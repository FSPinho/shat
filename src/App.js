import React from 'react';
import { I18nextProvider } from 'react-i18next';
import RNLanguages from 'react-native-languages';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './navigation/RootNavigation';
import { i18n } from './services';
import Ads from './services/Ads';
import { ThemeProvider } from './theme';


class App extends React.Component {

    async componentWillMount() {
        RNLanguages.addEventListener('change', this.onLanguagesChange)
        await Ads.prepare()
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('App:componentDidCatch - Hiding splash screen...')
            SplashScreen.hide();
        }, 2000)
    }

    componentWillUnmount() {
        RNLanguages.removeEventListener('change', this.onLanguagesChange)
    }

    onLanguagesChange = ({ language }) => {
        i18n.changeLanguage(language)
    }

    render() {
        return (
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    <RootNavigation />
                </ThemeProvider>
            </I18nextProvider>
        )
    }
}

export default App