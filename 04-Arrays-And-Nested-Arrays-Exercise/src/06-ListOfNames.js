function getListOfNames(array){
    console.log(array.sort((a, b) => a.localeCompare(b)).map((e,ix)=> `${ix+1}.${e}`).join("\n"));
}

getListOfNames(['Alice', 'Bob', 'Alice', 'Charlie']);