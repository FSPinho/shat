import RNLanguages from 'react-native-languages';
import i18n from 'i18next';

import en from '../translations/en.json';
import pt from '../translations/pt.json';

export default i18n.init({
    debug: __DEV__,
    lng: RNLanguages.language,
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    resources: {en, pt},
    interpolation: {escapeValue: false},
    react: {wait: true}
});