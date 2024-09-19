let results = [];

function calculate(x, y, operator) {
    switch(operator) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        default: return 'Invalid operator';
    }
}

function createTable() {
    document.write("<table>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    
    while(true) {
        let x = prompt("Enter the first number:");
        if (x === null) break;
        
        let y = prompt("Enter the second number:");
        if (y === null) break;
        
        let operator = prompt("Enter the operator (+, -, *, /, %):");
        if (operator === null) break;
        
        x = parseFloat(x);
        y = parseFloat(y);
        
        let result;
        if (isNaN(x) || isNaN(y)) {
            result = "Error: Invalid number input";
        } else if (!['+', '-', '*', '/', '%'].includes(operator)) {
            result = "Error: Invalid operator";
        } else {
            result = calculate(x, y, operator);
            if (!isNaN(result)) {
                results.push(result);
            }
        }
        
        document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
    }
    
    document.write("</table>");
}

function createSummaryTable() {
    if (results.length === 0) {
        document.write("<p>No valid calculations performed.</p>");
        return;
    }
    
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;
    
    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${total}</td></tr>`);
    document.write("</table>");
}

createTable();
createSummaryTable();