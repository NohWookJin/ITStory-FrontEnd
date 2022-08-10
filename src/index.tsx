import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './router/Router';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
