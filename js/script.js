let outputScreen = document.getElementById("output-screen");

let NUM_ONE = 0;
let NUM_TWO = 0;
let OPERATOR = "";

/* ------------------------ Mathematical operations ------------------------ */
addition = (a, b) => { return a + b; };
subtraction = (a, b) => { return a - b; };
multiplication = (a, b) => { return a * b; };
division = (a, b) => { return a / b; };
percentage = (a, b) => { return a * (b / 100); };

operate = (a, b, operator) => {
    a = Number(a);
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
            return addition(0, b);
    }
};

/* -------------------------- Helper functions -------------------------- */
display = (num) => { outputScreen.value += num; };
clearAll = () => {
    outputScreen.value = " ";
    NUM_ONE = 0;
    NUM_TWO = 0;
};
del = () => {
    outputScreen.value = outputScreen.value.slice(0, -1);
    NUM_ONE = outputScreen.value;
};
setNumOne = () => {
    try {
        NUM_ONE = Number(outputScreen.value);
    } catch (err) {
        NUM_ONE = 0;
    }
    outputScreen.value = "";
};
evaluate = () => {
    NUM_TWO = outputScreen.value;
    let ans = operate(NUM_ONE, NUM_TWO, OPERATOR);

    // Set output as history
    if (typeof ans === "number") NUM_ONE = ans;
    else NUM_ONE = 0;
    NUM_TWO = 0;
    OPERATOR = "=";
    outputScreen.value = "";

    // display the answer
    display(ans);
};

/* --------------------------- Handle buttons --------------------------- */
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");

numberBtns.forEach((btn) =>
    btn.onclick = () => display(btn.innerText)
);

operatorBtns.forEach((btn) =>
    btn.onclick = () => {
        setNumOne();
        OPERATOR = btn.innerText === "x" ? "*" : btn.innerText;
    }
);

const point = document.getElementById("point");
const clearBtn = document.getElementById("clearBtn");
const deleteLast = document.getElementById("deleteLast");
const equal = document.getElementById("equal");

point.onclick = () => display(".");
clearBtn.onclick = () => clearAll();
deleteLast.onclick = () => del();
equal.onclick = () => evaluate();

/* ---------------------------- Handle keyboard inputs ---------------------------- */
handleKeyboardInput = (e) => {
    if (e.key >= 0 && e.key <= 9) display(e.key);
    if (e.key === ".") display(".");
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") del();
    if (e.key === "Escape") clearAll();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "%") {
        setNumOne();
        OPERATOR = e.key;
    }
};

window.addEventListener("keydown", handleKeyboardInput);

/* ---------------------------- Handle keyboard inputs ---------------------------- */
