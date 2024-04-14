function sumTable() {
    const elements = Array.from(document.querySelectorAll("table td:nth-child(even)")).map(el => Number(el.innerText));
    const sumTr = document.getElementById("sum");
    elements.pop();
    const sum = elements.reduce((total, curPrice) => total + curPrice, 0);
    sumTr.textContent = sum;
}