let fib = function(n){ //O(2^n)
    if (n <= 1) return n;
    return fib(n -1) + fib(n-2);
}


console.log(fib(8));
