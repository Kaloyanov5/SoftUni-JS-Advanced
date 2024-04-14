function stringLength(str1, str2, str3){
    const sumLength = str1.length + str2.length + str3.length;
    const avarageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(avarageLength);
}

stringLength('chocolate', 'ice cream', 'cake');