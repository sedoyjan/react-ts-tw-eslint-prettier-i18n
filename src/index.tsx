import './style.css';

import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { App } from './app';
import { i18n } from './i18n';

export default render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,

  document.getElementById('root'),
);
