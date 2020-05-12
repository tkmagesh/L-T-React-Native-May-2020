

export function addNew(productName){
    const newProduct = { name : productName, cost : 10};
    const newAction = { type: 'ADD_NEW', payload: newProduct };   
    console.log('dispatched - ', newAction);
    return newAction;
}