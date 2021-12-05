let outputScreen = document.getElementById('output-screen');

display = (num) => {
    outputScreen.value += num;
}

calculate = () => {
    try {
        outputScreen.value = eval(outputScreen.value)
    }
    catch (err) {
        alert("invalid input")
    }
}

clearAll = () => {
    outputScreen.value = " ";
    outputScreen.placeholder = "0";
}

del = () => {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
