function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function testFunction(){
        
    }
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}

//let funcname = () => code block