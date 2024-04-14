function cook(start, op1, op2, op3, op4, op5){
    start = Number(start);
    const operations = [op1, op2, op3, op4, op5];

    for (let op in operations){
        const curOp = operations[op];
        switch(curOp){
            case 'chop': start = start / 2; break;
            case 'dice': start = Math.sqrt(start); break;
            case 'spice': start = start + 1; break;
            case 'bake': start = start * 3; break;
            case 'fillet': start = start * 0.8; break;
            default: break;
        }

        if (start % 1 !== 0){
            console.log(start.toFixed(1));
        } else{
            console.log(start);
        }
    }
}

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');