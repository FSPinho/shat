import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

const tracker = new GoogleAnalyticsTracker("UA-124619346-1")

const PREFIX = __DEV__ ? 'DEV_' : 'PROD_'
const SCREEN_HOME_VIEW = PREFIX + 'HOME'
const SCREEN_SORTING_VIEW = PREFIX + 'SORTING'

const EVENT_SORTING_DONE = PREFIX + 'EVENT_SORTING_DONE'
const EVENT_SORTING_AGAIN = PREFIX + 'EVENT_SORTING_AGAIN'
const EVENT_ADS = PREFIX + 'EVENT_ADS'
const EVENT_ADS_REWARDED = PREFIX + 'EVENT_ADS_REWARDED'

export default {
    doSendHomePageView: () => tracker.trackScreenView(SCREEN_HOME_VIEW),
    doSendSOrtingPageView: () => tracker.trackScreenView(SCREEN_SORTING_VIEW),
    
    doSendSortingDoneEvent: (house) => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_SORTING_DONE, { label: house.title, value: 1.0 }),
    doSendSortingAgainEvent: (house) => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_SORTING_AGAIN, { label: house.title, value: 1.0 }),
    doSendAdsEvent: () => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_ADS),
    doSendAdsRewardedEvent: () => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_ADS_REWARDED),
}