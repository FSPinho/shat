import React from 'react';
import { translate } from 'react-i18next';
import { Image, ScrollView, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from 'redux-persist-filesystem-storage';
import { Box, Page, Spacer } from '../components';
import Buttom from '../components/Buttom';
import Text from '../components/Text';
import { HouseMetadata } from '../constants/houses';
import { Routes } from '../navigation/RootNavigation';
import { Auth } from '../services';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';
import FadeFromDown from '../transitions/FadeFromDown';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: undefined
        }
    }

    async componentDidMount() {
        Analytics.doSendHomePageView()

        this.authListenerUnsibscriber = firebase.auth().onAuthStateChanged(user => {
            const params = this.props.navigation.state.params || {}
            this.props.navigation.setParams({
                ...params,
                user,
            })
        })

        this.doUpdateStoredDataInterval = setInterval(this.doUpdateStoredData, 1000)
    }

    async componentWillUnmount() {
        this.authListenerUnsibscriber()

        clearInterval(this.doUpdateStoredDataInterval)
    }

    doUpdateStoredData = async () => {
        try {
            const data = JSON.parse(await AsyncStorage.getItem('shat:house'))
            this.setState({ ...this.state, data })
        } catch (e) {
            /** ... */
        }
    }

    doStartSorting = async (again) => {
        if (!await Auth.isAuth())
            await Auth.doSignIn(this.props.t)

        if (await Auth.isAuth())
            this.props.navigation.navigate(Routes.Sorting, {
                again,
                houseToExclude: this.state.data ? (again ? this.state.data.house.house : true) : false
            })
    }

    render() {

        const { t, theme, styles } = this.props
        const { data } = this.state

        const house = data ? HouseMetadata[data.house.house] : undefined

        return (
            <Page>
                <ScrollView style={{ flex: 1 }}>
                    <Box column centralize fit padding style={{ minHeight: 640 }}>

                        {
                            !!data && house && (
                                <Box centralize column padding>

                                    <Text center>{t('your-house-is')}</Text>

                                    <Spacer vertical />

                                    <Box style={styles.houseImageWrapper}>
                                        <Image style={styles.houseImage} source={house.image} />
                                    </Box>

                                    <Spacer vertical />

                                    <Text center size={24} weight={'Bold'}>{house.title}</Text>

                                    <Spacer vertical />

                                    <Text center size={18} weight={'Light'}>{
                                        house.description.replace(/\s+/, ' ')
                                            .replace(/\n+/, ' ')
                                            .replace(/\t+/, ' ')
                                    }</Text>

                                    <Spacer vertical large />

                                </Box>
                            )
                        }

                        <Box centralize padding>
                            <FadeFromDown visible>
                                <Buttom onPress={this.doStartSorting}>
                                    <Box pointerEvents="none" centralize>
                                        <Text color={theme.palette.Primary['500'].text}>
                                            {t('begin-sorting')}
                                        </Text>
                                        <Spacer />
                                        <Icon name={'control-play'} color={theme.palette.Primary['500'].text} size={18} />
                                    </Box>
                                </Buttom>

                                <Spacer vertical />

                                {
                                    !!data && (
                                        <Buttom onPress={() => this.doStartSorting(true)}>
                                            <Box pointerEvents="none" centralize>
                                                <Text color={theme.palette.Primary['500'].text}>
                                                    {t('begin-sorting-again', { house: house.title.toUpperCase() })}
                                                </Text>
                                            </Box>
                                        </Buttom>
                                    )
                                }

                            </FadeFromDown>
                        </Box>
                    </Box>
                </ScrollView>
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({
    houseImage: {
        width: 192,
        height: 192,
        borderRadius: 192,
    },
    houseImageWrapper: {
        width: 192,
        height: 192,
        borderRadius: 192,
    }
})

export default translate('common')(withTheme(styles, Home))