function éNumeroFibonacci(num){
    if(num < 0){
        return false;
    }
    //números negativos não pertencem a sequecia de Fibonacci
    const fibonacci = (n) => {
        let a = 0
        let b = 1
        if(n === a || n === b){
            return true;
        }
        while(b < n){
            let temp = a + b;
            a = b
            b = temp
            if(b === n){
                return true;
            }
        }
        return false;
    }
    return fibonacci(num);
}

//exemplo de uso

const num = 13;
if(éNumeroFibonacci(num)){
    console.log(`${num} é um número de Fibonacci`);
}else{
    console.log(`${num} não é um número de Fibonacci`);
}