let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (currentMark === "") {
        if (xTurn === true) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.color = "red";
        } else if (xTurn === false) {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.color = "blue";
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
    xTurn = true;
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    if (a1 === b1) {
        if (b1 === c1) {
            if (a1 === "X") document.getElementById("winner").innerHTML = "X wins";
            if (a1 === "O") document.getElementById("winner").innerHTML = "O wins";
        }
    }

    if (a2 === b2) {
        if (b2 === c2) {
            if (a2 === "X") document.getElementById("winner").innerHTML = "X wins";
            if (a2 === "O") document.getElementById("winner").innerHTML = "O wins";
        }
    }

    if (a3 === b3) {
        if (b3 === c3) {
            if (a3 === "X") document.getElementById("winner").innerHTML = "X wins";
            if (a3 === "O") document.getElementById("winner").innerHTML = "O wins";
        }
    }

    if (a1 === a2) {
        if (a2 === a3) {
            if (a1 === "X") document.getElementById("winner").innerHTML = "X wins";
            if (a1 === "O") document.getElementById("winner").innerHTML = "O wins";
        }
    }

    if (b1 === b2) {
        if (b2 === b3) {
            if (b1 === "X") document.getElementById("winner").innerHTML = "X wins";
        }
    }
}
