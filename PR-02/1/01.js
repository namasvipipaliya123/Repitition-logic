function generateFibonacci() {
    
    let n = parseInt(document.getElementById("number").value);

  
    let fibonacciSeries = [0, 1];

    for (var i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    document.getElementById("fibonacciResult").innerHTML = "Fibonacci Series up to " + n + " numbers: " + fibonacciSeries.join(", ");
}