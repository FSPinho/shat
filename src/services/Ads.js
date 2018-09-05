import { AdMobInterstitial, AdMobRewarded } from 'react-native-admob';
import AsyncStorage from 'redux-persist-filesystem-storage';
import { Alert } from '.';
import Analytics from './Analytics';

const ADS_FIRST_INTERVAL = __DEV__ ? 2 * 60 * 1000 : 60 * 1000
const ADS_INTERVAL = __DEV__ ? 3 * 60 * 1000 : 3 * 60 * 1000
const ADS_REWARDED_INTERVAL = __DEV__ ? 1 * 60 * 1000 : 1 * 60 * 1000 // ...


export default {
    prepare: async () => {

        try {
            await AsyncStorage.setItem('ca:ads-timestamp', "" + (+new Date() - (ADS_INTERVAL - ADS_FIRST_INTERVAL)))
        } catch (error) {
            /** error */
        }

        try {
            let timestampReward = false

            try {
            timestampReward = parseInt(await AsyncStorage.getItem('ca:ads-reward-timestamp'))
            } catch (e) {
                /** ... */
            }

            if (!timestampReward)
                await AsyncStorage.setItem('ca:ads-reward-timestamp', "" + 0)
        } catch (error) {
            /** error */
        }

        if (__DEV__) {
            console.log('WallpaperGenerator:doShowAds - DEV MODE!!!')
            Alert.showLongText('Showing ads on dev mode!')
            await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
            await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');

        } else {
            console.log('WallpaperGenerator:doShowAds - PROD MODE!!!')
            await AdMobInterstitial.setAdUnitID('ca-app-pub-5594222713152935/5307373982');
            await AdMobRewarded.setAdUnitID('ca-app-pub-5594222713152935/9719403464');
        }

        try {
            await AdMobInterstitial.requestAd()
        } catch (error) {
            /** ... */
        }

        try {
            await AdMobRewarded.requestAd()
        } catch (error) {
            /** ... */
        }

        if (__DEV__) {
            setInterval(async () => {

                const timestamp = parseInt(await AsyncStorage.getItem('ca:ads-timestamp'))
                if (+new Date() - timestamp <= ADS_INTERVAL) {
                    console.log('Ads:doShowAds - Can\'t show ads')
                } else {
                    console.log('Ads:doShowAds - Can show ads!')
                }

                const timestampReward = parseInt(await AsyncStorage.getItem('ca:ads-reward-timestamp'))
                if (+new Date() - timestampReward <= ADS_REWARDED_INTERVAL) {
                    console.log('Ads:doShowAds - Can\'t show rewarded ads')
                } else {
                    console.log('Ads:doShowAds - Can show rewarded ads!')
                }

            }, 3000)
        }
    },

    doShowAds: async () => {

        try {

            const timestamp = parseInt(await AsyncStorage.getItem('ca:ads-timestamp'))

            if (+new Date() - timestamp <= ADS_INTERVAL) {
                console.log('Ads:doShowAds - Skipping ads...')
                return;
            } else {
                console.log('Ads:doShowAds - Showing ads:', +new Date() - timestamp)
            }

            await AdMobInterstitial.showAd()
            await Analytics.doSendAdsEvent()

            // await AsyncStorage.setItem('ca:ads-reward-timestamp', +new Date() + "")
            await AsyncStorage.setItem('ca:ads-timestamp', +new Date() + "")

        } catch (error) {

            console.log('Ads:doShowAds - Can\'t show Ad:', error)

        }

        try {
            await AdMobInterstitial.requestAd()
        } catch (error) {
            /** ... */
        }
    },

    canShowRewardedAds: async () => {
        const timestamp = parseInt(await AsyncStorage.getItem('ca:ads-reward-timestamp'))
        return (+new Date()) - timestamp >= ADS_REWARDED_INTERVAL
    },

    doShowRewardedAds: async () => {

        try {

            const timestamp = parseInt(await AsyncStorage.getItem('ca:ads-reward-timestamp'))

            if (+new Date() - timestamp <= ADS_REWARDED_INTERVAL) {
                console.log('Ads:doShowRewardedAds - Skipping rewarded ads...')
                return;
            } else {
                console.log('Ads:doShowRewardedAds - Showing rewarded ads:', +new Date() - timestamp)
            }

            await AdMobRewarded.showAd()
            await Analytics.doSendAdsRewardedEvent()

        } catch (error) {

            console.log('Ads:doShowRewardedAds - Can\'t show rewarded Ad:', error)

        }

        try {
            await AsyncStorage.setItem('ca:ads-reward-timestamp', +new Date() + "")
            await AsyncStorage.setItem('ca:ads-timestamp', +new Date() + "")
        } catch (error) {
            /** ... */
        }

        try {
            await AdMobRewarded.requestAd()
        } catch (error) {
            /** ... */
        }
    }
}