import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App/App';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

render(App);

if (module.hot) {
  module.hot.accept('./component/App/App', () => {
    render(require('./component/App/App'));
  });
};