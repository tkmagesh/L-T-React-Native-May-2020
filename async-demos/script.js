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

    window['addAsyncClient'] = addAsyncClient;
})();