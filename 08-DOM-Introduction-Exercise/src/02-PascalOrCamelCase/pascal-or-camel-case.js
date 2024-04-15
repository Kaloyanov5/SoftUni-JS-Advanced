function solve(){
    const input = (document.getElementById("text").value).toLowerCase().split(" ");
    const currentCase = document.getElementById("naming-convention").value;
    const resultDiv = document.getElementById("result");
    let result = "";

    switch(currentCase){
        case "Camel Case":
            result += `${input.shift()}${input.map(el => `${el[0].toUpperCase()}${el.substring(1)}`).join("")}`; break;
        case "Pascal Case":
            result += `${input.map(el => `${el[0].toUpperCase()}${el.substring(1)}`).join("")}`; break;
        default:
            result = "Error!"; break;
    }

    resultDiv.style.color = result === "Error!" ? "red" : "black";
    resultDiv.textContent = result;
}