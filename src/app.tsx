import { LanguageSelect } from 'components/LanguageSelect';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center pt-4 gap-4">
      <LanguageSelect />

      {t('Hello')}
    </div>
  );
};
