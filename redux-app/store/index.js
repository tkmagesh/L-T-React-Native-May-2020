import { createStore, combineReducers } from 'redux';
import productsReducer from '../Products/reducers'

const rootReducer = combineReducers({
    productsData : productsReducer
});

const appStore = createStore(rootReducer);

export default appStore;