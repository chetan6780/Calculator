let outputScreen = document.getElementById('output-screen');

let NUM_ONE='';
let NUM_TWO='';
let OPERATOR = "";
let isNumOne = true;

/* ------------------------ Mathematical operations ------------------------ */
addition = (a, b) => { return a + b };
subtraction = (a, b) => { return a - b };
multiplication = (a, b) => { return a * b };
division = (a, b) => { return a / b; }
percentage = (a, b) => { return (a * (b / 100)) };

operate = (a, b, operator) => {
    a = Number(a);
    if(b==='') return a;
    b = Number(b);
    switch (operator) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a, b);
        case "/":
            return division(a, b);
        case "%":
            return percentage(a, b);
        default:
            return "Invalid operator";
    }
}

/* -------------------------- Helper functions -------------------------- */
display = (num) => { outputScreen.value += num; }
clearAll = () => {
    outputScreen.value = " ";
    NUM_ONE = "";
    NUM_TWO = "";
    isNumOne = true;
}
del = () => {
    outputScreen.value = outputScreen.value.slice(0, -1);
    NUM_ONE = outputScreen.value;
}

setNum = () => {
    if (isNumOne) {
        NUM_ONE = outputScreen.value;
        isNumOne = false;
    } else {
        NUM_TWO = outputScreen.value
        isNumOne = false;
    }
    outputScreen.value = "";
}

/* --------------------------- Handle buttons --------------------------- */
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const point = document.getElementById('point');
const clearBtn = document.getElementById('clearBtn');
const deleteLast = document.getElementById('deleteLast');
const equal = document.getElementById('equal');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const percent = document.getElementById('percent');

one.onclick = () => display(1);
two.onclick = () => display(2);
three.onclick = () => display(3);
four.onclick = () => display(4);
five.onclick = () => display(5);
six.onclick = () => display(6);
seven.onclick = () => display(7);
eight.onclick = () => display(8);
nine.onclick = () => display(9);
zero.onclick = () => display(0);

point.onclick = () => display(".");
clearBtn.onclick = () => clearAll();
deleteLast.onclick = () => del();
equal.onclick = () => {
    setNum();
    let ans = operate(NUM_ONE, NUM_TWO, OPERATOR);
    if (typeof ans === "number") NUM_ONE = ans;
    else NUM_ONE = "";
    NUM_TWO = "";
    isNumOne = false;
    outputScreen.value = " ";
    display(ans);
}

plus.onclick = () => {
    setNum();
    OPERATOR = '+';
}
minus.onclick = () => {
    setNum();
    OPERATOR = '-';
}
multiply.onclick = () => {
    setNum();
    OPERATOR = '*';
}
divide.onclick = () => {
    setNum();
    OPERATOR = '/';
}
percent.onclick = () => {
    setNum();
    OPERATOR = '%';
}


/* ---------------------------- Handle buttons ---------------------------- */

