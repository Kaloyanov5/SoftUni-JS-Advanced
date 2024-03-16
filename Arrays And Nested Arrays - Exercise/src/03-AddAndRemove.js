function addOrRemove(array){
    let result = 1;
    let newArray = [];
    for (let op of array){
        switch (op){
            case 'add': 
                newArray.push(result); break;
            case 'remove': 
                newArray.pop(); break;
            default: break;
        }
        result++;
    }

    return !newArray.length ? 'Empty' : newArray.join("\n");
}

console.log(addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']))