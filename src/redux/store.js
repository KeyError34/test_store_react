import { createStore } from 'redux';
import prodReduser from './redusers';
const store = createStore(prodReduser);
export default store;
