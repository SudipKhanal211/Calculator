document.querySelector("button").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }
    }

    document.getElementById("result").textContent = result;
});
