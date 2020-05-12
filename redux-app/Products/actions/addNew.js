import productsApi from '../services/productsApi';

export function addNew(productName){
    return async function(dispatch){
        const newProductData = { id : 0, name : productName, cost : 10};
        const newProduct = await productsApi.save(newProductData);
        const newAction = { type: 'ADD_NEW', payload: newProduct };
        dispatch(newAction);
    }
}