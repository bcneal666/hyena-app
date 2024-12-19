export const fallbackLng = 'en';
export const languages = [fallbackLng, 'zh-TW', 'zh-CN'];
export const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions(
  lng = fallbackLng,
  ns = defaultNS as string | string[],
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}