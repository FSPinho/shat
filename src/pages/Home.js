import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Box, Page, Spacer } from '../components';
import Buttom from '../components/Buttom';
import Text from '../components/Text';
import { Routes } from '../navigation/RootNavigation';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';
import FadeFromDown from '../transitions/FadeFromDown';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

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
    }

    async componentWillUnmount() {
        this.authListenerUnsibscriber()
    }

    doStartSorting = async () => {
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