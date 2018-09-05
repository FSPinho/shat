import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

const tracker = new GoogleAnalyticsTracker("UA-124619346-1")

const PREFIX = __DEV__ ? 'DEV_' : 'PROD_'
const SCREEN_HOME_VIEW = PREFIX + 'HOME'
const SCREEN_CANDIDATES_VIEW = PREFIX + 'CANDIDATES'
const SCREEN_CANDIDATE_DETAILS_VIEW = PREFIX + 'CANDIDATE_DETAILS'
const SCREEN_CANDIDATE_PRISE_VIEW = PREFIX + 'CANDIDATE_PRISE'
const SCREEN_CANDIDATE_CRITICISM_VIEW = PREFIX + 'CANDIDATE_CRITICISM'
const EVENT_CATEGORY_COMMON = PREFIX + 'COMMON'
const EVENT_CANDIDATE_DETAILS_VIEW = PREFIX + 'EVENT_CANDIDATE_DETAILS'
const EVENT_CANDIDATE_DETAILS_COMMENT = PREFIX + 'EVENT_CANDIDATE_DETAILS_COMMENT'
const EVENT_ADS = PREFIX + 'EVENT_ADS'
const EVENT_ADS_REWARDED = PREFIX + 'EVENT_ADS_REWARDED'

export default {
    doSendHomePageView: () => tracker.trackScreenView(SCREEN_HOME_VIEW),
    doSendCandidatesPageView: () => tracker.trackScreenView(SCREEN_CANDIDATES_VIEW),
    doSendCandidateDetailsPageView: () => tracker.trackScreenView(SCREEN_CANDIDATE_DETAILS_VIEW),
    doSendCandidatePrisePageView: () => tracker.trackScreenView(SCREEN_CANDIDATE_PRISE_VIEW),
    doSendCandidateCriticismPageView: () => tracker.trackScreenView(SCREEN_CANDIDATE_CRITICISM_VIEW),
    doSendCandidateDetailsEvent: (c) => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_CANDIDATE_DETAILS_VIEW, { label: c.name, value: parseInt(c.number) }),
    doSendCandidateDetailsCommentEvent: (c) => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_CANDIDATE_DETAILS_COMMENT, { label: c.name, value: parseInt(c.number) }),
    doSendAdsEvent: () => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_ADS),
    doSendAdsRewardedEvent: () => tracker.trackEvent(EVENT_CATEGORY_COMMON, EVENT_ADS_REWARDED),
}