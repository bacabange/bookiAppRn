import I18n from 'react-native-i18n';
import en from './locales/en';
import es from './locales/es';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es,
};

const lang = key => I18n.t(key);

export default lang;
