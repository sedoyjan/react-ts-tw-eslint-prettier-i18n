import { availableLanguages } from 'i18n';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  
  return (
    <select
      className="select select-bordered uppercase text-neutral800 select-sm"
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
      }}
    >
      {availableLanguages.map((lang) => {
        return (
          <option value={lang} selected={lang === i18n.language}>
            {lang}
          </option>
        );
      })}
    </select>
  );
};
