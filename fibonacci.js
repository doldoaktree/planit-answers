function fibonacci (n) {  
    let a = 0;
    let b = 1;
    let sum = 0;
    
    if (n < 3) {
      return  n-1;
    } 

    for (let i = 0; i < n-2; i++) {
       sum = a + b;
       a = b;
       b = sum;
    }

    return sum;
}
const t = fibonacci(5);
console.log(t)