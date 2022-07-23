function f(n){
    if (n === 0){
        console.log("**********");
        return
    }

    for (let i = 1; i <= n; i++){
        f(n - 1);
    }
}


function factorial(n){
    let factorial = 1;
    if (n === 0) return 0;
    for ( let i =n; i >= 1; i--){
        console.log(i);
        factorial *= i
    }
    return factorial;
}

console.log(factorial(5));
