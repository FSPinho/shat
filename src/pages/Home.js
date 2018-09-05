import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import { Page } from '../components';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    async componentDidMount() {

        // this.props.navigation.navigate(Routes.Favorites)

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

    render() {

        const { t, theme, styles } = this.props
        const {  } = this.state

        return (
            <Page>
                
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({
    
})

export default translate('common')(withTheme(styles, Home))