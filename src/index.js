import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import { isDev } from '../config';
import App from './components/app/App';

const renderProps = {
  description:
    `A stripped-down boilerplate for creating a small React
    app to attach to an otherwise non-React app.`
};

if (isDev) {
  const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component {...renderProps} />
      </AppContainer>,
      document.getElementById('root')
    )
  };

  render(App);
  module.hot.accept('./components/app/App', () => { render(App) });
}

export default function renderWidget(attachEl) {
  ReactDOM.render(<App {...renderProps} />, attachEl);
}
