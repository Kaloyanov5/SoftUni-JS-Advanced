function mathOp(num1, num2, operation){
    let result;
    switch(operation){
        case "+": result = num1+num2; break;
        case "-": result = num1-num2; break;
        case "*": result = num1*num2; break;
        case "/": result = num1/num2; break;
        case "%": result = num1%num2; break;
        case "**": result = Math.pow(num1, num2); break;
        default: break;
    };
    console.log(result);
}