function checkValidity(x1, y1, x2, y2){
    const distance1 = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    const distance2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    const distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    const allDistance = {
        'distance1': distance1 % 1 !== 0 ? 'invalid' : 'valid',
        'distance2': distance2 % 1 !== 0 ? 'invalid' : 'valid',
        'distance3': distance3 % 1 !== 0 ? 'invalid' : 'valid'
    };

    const result = `{${x1}, ${y1}} to {0, 0} is ${allDistance[`distance1`]}\n{${x2}, ${y2}} to {0, 0} is ${allDistance[`distance2`]}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${allDistance[`distance3`]}
    `;
    console.log(result);
}

checkValidity(2, 1, 1, 1);