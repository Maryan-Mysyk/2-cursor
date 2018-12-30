function fibonachi (n){
    fib1 = 0, fib2 = 1, fib=1;
    for (let i=1; i<=n; i++){
        fib = fib1+fib2;
        fib1 = fib2;
        fib2 = fib;
    }
    return fib;
}
console.log (fibonachi(15));

