function result(){
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = firstNumber - secondNumber;
}