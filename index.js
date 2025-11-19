const display=document.getElementById("display")

function selectValue(val) {
  if(display.value==="Error"||display.value==="Infinity"){
    display.value="";
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
      let result = eval(display.value);
      if (result===undefined){
        display.value="Error";
      }else{
      display.value =result;}
    } catch {
      display.value = "Error";
    }
  }