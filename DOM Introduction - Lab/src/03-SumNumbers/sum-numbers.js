function sumNumbers(){
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    const resultField = document.getElementById("sum");
    resultField.value = `${Number(firstNum) + Number(secondNum)}`;
}