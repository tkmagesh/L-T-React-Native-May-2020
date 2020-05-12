
export default function productsReducer(currentState = [], action){
    if (action.type === 'ADD_NEW'){
        const newState = [...currentState, action.payload];
        console.log(newState);
        return newState;
    }
    if (action.type === 'LOAD_PRODUCTS'){
        return action.payload;
    }
    return currentState;
}