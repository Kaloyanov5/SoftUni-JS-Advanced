function extract(elementId){
    const text = document.getElementById(elementId).textContent;
    const regex = /\(([^)]+)\)/gi;
    const matchedWords = [];

    let match;
    while((match = regex.exec(text)) !== null){
        matchedWords.push(match[1]);
    }

    return matchedWords.join("; ");
}