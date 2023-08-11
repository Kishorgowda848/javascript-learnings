let add = function (a){

    return function(b){
        if(b){
            return add(a+b);
        }
        return a;
    }
}

console.log(add(3)(3)(9)());
