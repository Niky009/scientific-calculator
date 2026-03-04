let display = document.getElementById("display");

function add(value)
{
display.value += value;
}

function clearDisplay()
{
display.value = "";
}

function calculate()
{
display.value = eval(display.value);
}

function square()
{
let value = document.getElementById("display").value;
document.getElementById("display").value = value * value;
}

function sqrt()
{
let value = document.getElementById("display").value;
document.getElementById("display").value = Math.sqrt(value);
}

function sin()
{
let value = parseFloat(document.getElementById("display").value);
let result = Math.sin(value * Math.PI / 180);
document.getElementById("display").value = result.toFixed(4);
}

function cos()
{
let value = parseFloat(document.getElementById("display").value);
let result = Math.cos(value * Math.PI / 180);
document.getElementById("display").value = result.toFixed(4);
}

function tan()
{
let value = parseFloat(document.getElementById("display").value);
let result = Math.tan(value * Math.PI / 180);
document.getElementById("display").value = result.toFixed(4);
}

function pi()
{
document.getElementById("display").value = Math.PI.toFixed(4);
}

function power()
{
document.getElementById("display").value += "**";
}

function cube()
{
let value = document.getElementById("display").value;
document.getElementById("display").value = value * value * value;
}

function factorial()
{
let num = parseInt(document.getElementById("display").value);
let result = 1;

for(let i=1;i<=num;i++)
{
result *= i;
}

document.getElementById("display").value = result;
}

function log()
{
let value = document.getElementById("display").value;
document.getElementById("display").value = Math.log10(value).toFixed(4);
}

function ln()
{
let value = document.getElementById("display").value;
document.getElementById("display").value = Math.log(value).toFixed(4);
}

function toggleSign()
{
let display = document.getElementById("display");

if(display.value.startsWith("-"))
display.value = display.value.slice(1);
else
display.value = "-" + display.value;
}

function deleteLast()
{
let display = document.getElementById("display");
display.value = display.value.slice(0,-1);
}

document.addEventListener("keydown", function(event)
{
let key = event.key;
let display = document.getElementById("display");

if(!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/")
{
display.value += key;
}

else if(key === "Enter")
{
calculate();
}

else if(key === "Backspace")
{
display.value = display.value.slice(0,-1);
}

else if(key === "Escape")
{
display.value = "";
}
});