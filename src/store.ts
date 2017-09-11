import { createStore, compose } from 'redux';

import animals from './reducers/animals';

// tslint:disable:no-any
// tslint:disable:no-string-literal
const devtools: any = window['__REDUX_DEVTOOLS_EXTENSION__']
  ? window['__REDUX_DEVTOOLS_EXTENSION__']()
  : (f: any) => f;

const store = createStore<any>(animals, compose(devtools));

export default store;
