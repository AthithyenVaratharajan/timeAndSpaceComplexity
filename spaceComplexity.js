let countDown = function(n){
    if (n === 0) return;
    return countDown(n - 1);
}


console.log(countDown(8));
