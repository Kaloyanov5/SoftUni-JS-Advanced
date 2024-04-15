function toggle(){
    const textDiv = document.getElementById("extra");
    const buttonDiv = document.getElementsByClassName("button")[0];
    if(buttonDiv.textContent === "More"){
        buttonDiv.textContent = "Less";
        textDiv.style.display = "block";
    } else {
        buttonDiv.textContent = "More";
        textDiv.style.display = "none";
    }
}