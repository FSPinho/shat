import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { Alert } from ".";

const doSignIn = async (t = () => {}) => {
    try {

        await GoogleSignin.configure();

        const data = await GoogleSignin.signIn();

        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        console.log('Home:navigationOptions - Signed in as:', currentUser)
        Alert.showLongText(t('sign-in-wellcome', { name: currentUser.user.displayName }))

    } catch (e) {

        console.log('Home:navigationOptions - Can\'t sign in with Google:', e)
        Alert.showLongText(t('sign-in-error'))

    }
}

const doSignOut = async (t = () => {}) => {
    try {

        firebase.auth().signOut()
        console.log('Home:navigationOptions - Signed out')

    } catch (e) {

        console.log('Home:navigationOptions - Can\'t sign out:', e)
        Alert.showLongText(t('sign-out-error'))

    }
}

const getCurrentUser = () => firebase.auth().currentUser

const isAuth = () => !!getCurrentUser()

const doToggleAuth = async (t = () => {}) => {
    if (isAuth())
        await doSignOut(t)
    else
        await doSignIn(t)
}

export default {
    doSignIn, doSignOut, getCurrentUser, isAuth, doToggleAuth
}
