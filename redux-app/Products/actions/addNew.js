import axios from 'axios';

export function addNew(productName){
    return function(dispatch){
        const newProductData = { id : 0, name : productName, cost : 10};
        axios
            .post('http://localhost:3000/products', newProductData)
            .then(response => {
                const newProduct = response.data;
                const newAction = { type: 'ADD_NEW', payload: newProduct };
                dispatch(newAction);
            })
    }
}