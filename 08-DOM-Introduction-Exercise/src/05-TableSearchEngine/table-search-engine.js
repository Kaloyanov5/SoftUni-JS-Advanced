function solve() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", clicked);

    function clicked() {
        const rows = Array.from(document.querySelectorAll("tbody tr"));
        const inputField = document.getElementById("searchField");
        const input = inputField.value.trim();
        if (!input) return;
        
        for (let row in rows){
            const curRow = Array.from(rows[row].children).map(el => {
                if(rows[row].classList.contains("select")) rows[row].classList.remove("select");
                return el.textContent;
            });
    
            for (let text of curRow){
                if (text.match(input)){
                    rows[row].classList.add("select");
                    break;
                }
            }
        }
    
        inputField.value = "";
    }
}