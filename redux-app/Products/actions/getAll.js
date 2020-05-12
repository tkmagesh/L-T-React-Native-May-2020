import axios from 'axios';

export function getAll(){
     return function(dispatch){
        axios
            .get('http://localhost:3000/products')
            .then(function(response){
                const action = { type: 'LOAD_PRODUCTS', payload: response.data };
                dispatch(action); 
            });
    };

    /* const staticData = [
        {id : 1, name : 'Pen'},
        { id: 2, name: 'Pencil'}
    ];
    const action = { type: 'LOAD_PRODUCTS', payload: staticData };
    return action;  */
}