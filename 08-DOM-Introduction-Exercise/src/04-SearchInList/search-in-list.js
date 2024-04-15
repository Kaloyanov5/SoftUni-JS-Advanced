function search() {
    const input = document.getElementById("searchText");
    const inputValue = input.value;
    if (!inputValue) return;

    const resultDiv = document.getElementById("result");
    const listElements = document.querySelectorAll("#towns li");
    let matches = 0;

    for (let town of listElements){
        town.style.textDecoration = "none";
        town.style.fontWeight = "normal";
        
        if(town.textContent.match(inputValue)){
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            matches++;
        }
    }

    resultDiv.textContent = `${matches} matches found`;
    input.value = "";
}