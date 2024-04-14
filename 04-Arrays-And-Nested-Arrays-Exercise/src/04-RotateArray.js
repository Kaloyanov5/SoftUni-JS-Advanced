function rotateArray(array, rotations){
    for (let i = 1; i <= rotations; i++){
        array.unshift(array.pop());
    }

    console.log(array.join(" "));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);