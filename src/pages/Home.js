import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from 'redux-persist-filesystem-storage';
import { Box, Page, Spacer } from '../components';
import Buttom from '../components/Buttom';
import Text from '../components/Text';
import { Routes } from '../navigation/RootNavigation';
import { Auth } from '../services';
import { withTheme } from '../theme';
import FadeFromDown from '../transitions/FadeFromDown';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    async componentDidMount() {
        // Analytics.doSendHomePageView()

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
            const { house, user } = JSON.parse(await AsyncStorage.getItem('shat:house'))
            console.log(house, user)
        } catch (e) {
            /** ... */
        }
    }

    doStartSorting = async () => {
        if (!await Auth.isAuth())
            await Auth.doSignIn(this.props.t)

        if (await Auth.isAuth())
            this.props.navigation.navigate(Routes.Sorting)
    }

    render() {

        const { t, theme, styles } = this.props
        const { } = this.state

        return (
            <Page>
                <Box column centralize fit>
                    <Box centralize>
                        <FadeFromDown visible delay={800} duration={1200}>
                            <Buttom onPress={this.doStartSorting}>
                                <Box pointerEvents="none" centralize>
                                    <Text color={theme.palette.Primary['500'].text}>{t('begin-sorting')}</Text>
                                    <Spacer />
                                    <Icon name={'control-play'} color={theme.palette.Primary['500'].text} size={18} />
                                </Box>
                            </Buttom>
                        </FadeFromDown>
                    </Box>
                </Box>
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({

})

export default translate('common')(withTheme(styles, Home))