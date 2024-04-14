function getSquare(size){
    let stars = ''
    for (let i = 0; i < size; i++){
        stars += '*'
    }
    stars = [...stars].join(" ");
    for (let i = 0; i < size; i++){
        console.log(stars);
    }
}

getSquare(1)