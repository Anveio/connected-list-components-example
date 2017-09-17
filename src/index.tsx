import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AnimalTable from './components/AnimalTable';
import registerServiceWorker from './registerServiceWorker';
import '@blueprintjs/core/dist/blueprint.css';

ReactDOM.render(
  <Provider store={store}>
    <AnimalTable />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
