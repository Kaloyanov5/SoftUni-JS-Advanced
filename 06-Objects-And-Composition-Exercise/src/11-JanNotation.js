function janNotation(array) {
    let operands = [];

    for (let item of array) {
        if (typeof(item) === "number") {
            operands.push(item);
        } else if (typeof(item) === "string") {
            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            const o2 = operands.pop();
            const o1 = operands.pop();

            switch (item) {
                case "+":
                    operands.push(o1 + o2);
                    break;
                case "-":
                    operands.push(o1 - o2);
                    break;
                case "*":
                    operands.push(o1 * o2);
                    break;
                case "/":
                    if (o2 === 0) {
                        console.log("Error: division by zero!");
                        return;
                    }
                    operands.push(o1 / o2);
                    break;
                default:
                    console.log("Error: invalid operator!");
                    return;
            }
        }
    }

    if (operands.length !== 1) {
        console.log("Error: too many operands!");
        return;
    }

    console.log(operands[0]);
}

janNotation([15,
    '/']); // Output: 3
