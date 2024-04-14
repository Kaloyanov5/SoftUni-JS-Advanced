function circleArea(diameter){
    let typeInpuy = typeof(diameter);
    let result = typeInpuy === "number" ? (Math.pow(diameter, 2) * Math.PI).toFixed(2) 
    : `We can not calculate the circle area, because we receive a ${typeInpuy}.`;
    console.log(result);
};

circleArea(5)