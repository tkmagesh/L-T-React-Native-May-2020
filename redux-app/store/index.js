import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../Products/reducers'

const rootReducer = combineReducers({
    productsData : productsReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.log(action.type);
            next(action);
        }
    }
}

/* function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch);
            }
            return next(action);
        }
    }
} */

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch);
    }
    return next(action);
}



const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));

export default appStore;