let task=document.querySelector("#ajout");
let button=document.querySelector("#add");
let liste =document.querySelector("ul");
 
 button.addEventListener("click",add_to_do);
 

 function add_to_do() { 
    if (task.value == "") {
          alert("Please enter a task");
          return;
        }else{ liste.innerHTML += "<li>" + task.value + "</li>" + "<input type='checkbox' class='done' />done" + "</br>" + "<button class='bt' >delete</button>"
     
         task.value=""
        }  } 











