function wordsUp(text){
    const regex = /[,.\?!]/g;
    const regex1 = /i.e./gi;
    text = text.replace(regex1, "i e").replace(regex, "").split(" ");
    let upperList = []
    for (let str of text){
        str = str.toUpperCase();
        upperList.push(str);
    }
    console.log(upperList.join(", "));
}

wordsUp('Functions in JS can be nested, i.e. hold other functions');