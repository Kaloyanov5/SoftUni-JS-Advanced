function colorize(){
    const list = Array.from(document.querySelectorAll("table tr"));
    list.map(tr => {
        if(list.indexOf(tr) % 2 != 0) tr.style.backgroundColor = "teal";
    });
}