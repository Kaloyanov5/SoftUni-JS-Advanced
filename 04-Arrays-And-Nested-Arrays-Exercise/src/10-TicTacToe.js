function ticTacToe(moves){
    let board = [[false, false, false], 
    [false, false, false], 
    [false, false, false]];

    let xTurn = true;

    function checkIfTaken(matrix, col, row){
        return matrix[col][row] !== false;
    }

    function checkIfSpace(matrix){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if (matrix[i][j] === false) return true;
            }
        }
        return false;
    }

    function checkWin(matrix, player){
        const winPlayer = [player, player, player];

        for (let i = 0; i < matrix.length; i++){
            const curRow = [];
            for (let j = 0; j < matrix[i].length; j++){
                curRow.push(matrix[i][j]);
            }

            if (curRow.join() === winPlayer.join()) return true;
        }

        for (let j = 0; j < matrix[0].length; j++){
            const curCol = [];
            for (let n = 0; n < matrix.length; n++){
                curCol.push(matrix[n][j]);
            }

            if (curCol.join() === winPlayer.join()) return true;
        }

        let leftDiag = [];
        let rightDiag = [];
        for (let y = 0; y < matrix.length; y++){
            leftDiag.push(matrix[y][y]);
            rightDiag.push(matrix[y][matrix.length - 1 - y]);
        }
        if (leftDiag.join() === winPlayer.join() || rightDiag.join() === winPlayer.join()) return true;

        return false;
    }

    for (let i = 0; i < moves.length; i++){
        if (!checkIfSpace(board)){
            console.log("The game ended! Nobody wins :(");
            console.log(board.map(row => row.join("\t")).join("\n"));
            break;
        }

        const curMove = moves[i].split(" ").map(Number);
        const col = curMove[0];
        const row = curMove[1];
        const curPlayer = xTurn ? 'X' : 'O';
        
        if (checkIfTaken(board, col, row)){
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        board[col][row] = curPlayer;
        xTurn = !xTurn; 

        if (checkWin(board, curPlayer)){
            console.log(`Player ${curPlayer} wins!`);
            console.log(board.map(row => row.join("\t")).join("\n"));
            break;
        }
    }
}

ticTacToe(["0 2",
"0 0",
"0 2",
"2 0",
"1 0"]);