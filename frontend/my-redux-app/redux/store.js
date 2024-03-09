// store.js
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;

// In store.js
export { store };

// In the file where you're importing
import { store } from './redux/store';
