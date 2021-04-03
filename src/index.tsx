import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import configureTranslations from './translations/i18n';
import { I18nextProvider } from 'react-i18next';
import { applyMiddleware, createStore } from 'redux';
import reducerRoot from './store/reducers/index'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const i18n = configureTranslations('pl')
const store = createStore(reducerRoot, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <App></App>
        </Router>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
