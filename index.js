let display = document.getElementById("display")

function selectValue(val) {
  if (display.value === "Error" || display.value === "Infinity") {
    display.value = "";
  }
  display.value += val;
}

function clearAll() {
  display.value = "";
}

function del() {
  let current = display.value;
  display.value = current.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value;
    expr = expr.replace(/%/g, "/100");
    let result = eval(expr);
    if (result === undefined) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}
