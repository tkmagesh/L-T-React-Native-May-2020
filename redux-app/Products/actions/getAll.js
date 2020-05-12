import axios from 'axios';
/* const staticData = [
        {id : 1, name : 'Pen'},
        { id: 2, name: 'Pencil'}
    ];
    const action = { type: 'LOAD_PRODUCTS', payload: staticData };
    return action;  */

//using the asyncMiddleware / thunk middleware
/* export function getAll(){
     return function(dispatch){
        axios
            .get('http://localhost:3000/products')
            .then(function(response){
                const action = { type: 'LOAD_PRODUCTS', payload: response.data };
                dispatch(action); 
            });
    };

    
} */

import productsApi from '../services/productsApi';

//using the promiseMiddleware
export async function getAll() {
    /* return axios
        .get('http://localhost:3000/products')
        .then(function (response) {
            const action = { type: 'LOAD_PRODUCTS', payload: response.data };
            return action;
        }); */

    const products = await productsApi.getAll();
    const action = { type: 'LOAD_PRODUCTS', payload: products };
    return action;
}