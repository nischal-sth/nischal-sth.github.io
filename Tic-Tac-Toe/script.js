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

    if (a1 !== "") { if (a1 === b1) { if (b1 === c1) document.getElementById("winner").innerHTML = a1 + " wins"; } }
    if (a2 !== "") { if (a2 === b2) { if (b2 === c2) document.getElementById("winner").innerHTML = a2 + " wins"; } }
    if (a3 !== "") { if (a3 === b3) { if (b3 === c3) document.getElementById("winner").innerHTML = a3 + " wins"; } }

    if (a1 !== "") { if (a1 === a2) { if (a2 === a3) document.getElementById("winner").innerHTML = a1 + " wins"; } }
    if (b1 !== "") { if (b1 === b2) { if (b2 === b3) document.getElementById("winner").innerHTML = b1 + " wins"; } }
    if (c1 !== "") { if (c1 === c2) { if (c2 === c3) document.getElementById("winner").innerHTML = c1 + " wins"; } }

    if (a1 !== "") { if (a1 === b2) { if (b2 === c3) document.getElementById("winner").innerHTML = a1 + " wins"; } }
    if (a3 !== "") { if (a3 === b2) { if (b2 === c1) document.getElementById("winner").innerHTML = a3 + " wins"; } }
}
