var StateManager = (function(){
    var _currentState = undefined;
    var _subscribers = [];
    var _reducer = null;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    //private
    function triggerChange(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        var store = { getState, subscribe, dispatch };
        return store;
    }
    return { createStore };
})()