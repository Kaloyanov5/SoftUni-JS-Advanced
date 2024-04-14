function sortArray(array){
    array = array.sort((a, b) => {
        return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
    });

    console.log(array.join("\n"));
}

sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);