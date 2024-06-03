function calculate() {
  var a = parseFloat(document.getElementById("inputA").value);
  var b = parseFloat(document.getElementById("inputB").value);
  var c = parseFloat(document.getElementById("inputC").value);
  var result = solveQuadraticEquation(a, b, c);
  document.getElementById("result").innerText = "Roots: " + result;
  
  drawGraph(a, b, c);
}

function solveQuadraticEquation(a, b, c) {
  var discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return "x1 = " + x1 + ", x2 = " + x2;
  } else if (discriminant === 0) {
    var x = -b / (2 * a);
    return "x = " + x;
  } else {
    return "No real roots";
  }
}

function drawGraph(a, b, c) {
  var canvas = document.getElementById('graph');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  
  for (var x = -canvas.width / 2; x <= canvas.width / 2; x++) {
    var y = a * x * x + b * x + c;
    ctx.lineTo(x + canvas.width / 2, canvas.height / 2 - y);
  }
  
  ctx.stroke();
}