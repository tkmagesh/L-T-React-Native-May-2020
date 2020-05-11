(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] triggering service`);
        var result = addSync(x,y);
        console.log(`[@Client] result = ${result}`);
    }

    function addAsync(x, y, onResult) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@Service] returning result`);
            onResult(result);
        }, 5000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@Client] triggering service`);
        addAsync(x, y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
    }

    function addAsyncPromise(x, y) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function () {
                var result = x + y;
                console.log(`   [@Service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;   
    }

     function addAsyncPromiseClient(x,y){
        console.log(`[@Client] triggering service`);
        var p = addAsyncPromise(x, y);
        //then(fn), catch(fn)
        var doublePromise = p.then(function(result){
            var doubleResult = result * 2;
            return doubleResult;
        });
        return doublePromise;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})();

//var doublePromise = addAsyncPromiseClient(100,200)