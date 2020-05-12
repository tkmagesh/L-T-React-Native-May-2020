
export default function productsReducer(currentState = [], action){
    if (action.type === 'ADD_NEW'){
        const newState = [...currentState, action.payload];
        console.log(newState);
        return newState;
    }
    return currentState;
}