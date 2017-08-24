import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import { isDev } from '../config';
import App from './components/app/App';

const baseProps = {
  description:
    `A stripped-down boilerplate for creating a small React
    app to attach to an otherwise non-React app.`
};

if (isDev) {
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component {...baseProps} />
      </AppContainer>,
      document.getElementById('root')
    )
  };

  render(App);
  module.hot.accept('./components/app/App', () => { render(App) });
}

function renderApp(attachEl, additionalProps) {
  ReactDOM.render(
    <App
      {...baseProps}
      {...additionalProps}
    />,
    attachEl
  );
}

export {
  renderApp,
  App,
  baseProps
};
