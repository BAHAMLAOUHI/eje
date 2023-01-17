let display = document.querySelector("#resultat");
let buttons = document.querySelector("#buttons");
let equals = document.querySelector("#equals");

buttons.addEventListener("click", function(event) {
  let value =event.target.value;
  if (value == "clear") {
    display.value = "";
  } else if (value == "backspace") {
    display.value = display.value.slice(0, -1);
  } else if (value == "=") {
    display.value = eval(display.value);
  } else {
    display.value += value;
  }
});


// levenement hua mouseclick
//event.target.value hya lvaleur lmaojuda aal button 
//eval hya fonction thawelelna text mteena loperation o tehsebha 




//calculatrice N°2//

let x=document.querySelector("#X");
let y=document.querySelector("#Y");
let resul=document.querySelector("#res") 
let operator;
let button1 = document.querySelector("#op1");
let button2 = document.querySelector("#op2");
let button3 = document.querySelector("#op3");
let button4 = document.querySelector("#op4");
button1.addEventListener("click", function() { operator = button1.value
operation() });
button2.addEventListener("click", function() { operator = button2.value
  operation() });
button3.addEventListener("click", function() { operator = button3.value
  operation() });
button4.addEventListener("click", function() { operator = button4.value 
  operation()});

function operation (){
  switch(operator){
    case "/": resul.value = Number(x.value)/Number(y.value);break;
    case"*": resul.value = Number(x.value)*Number(y.value);break;
    case "+":resul.value = Number(x.value)+Number(y.value);break;
    case "-":resul.value = Number(x.value)-Number(y.value);break;
  }


}

//calculatrice N°1 staamlna function(event) bsh aya donnée ...//
// noqrs aalha tethat f variable ' value ' o f thenya hatit kol whda f variable mteeha mush f nafs lvariable//

