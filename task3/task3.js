let input = document.getElementById("input");
    let button = document.getElementById("button");
    let list = document.getElementById("list");

    input.addEventListener("input", function() {
      button.innerHTML = `ajouter ${input.value} dans la liste`;
    });

    button.addEventListener("click", function() {
        if (input.value==''){
            alert("il faut taper une personne")
        } else {
      const newItem = document.createElement("li");
      newItem.innerHTML = input.value;
      list.appendChild(newItem);
      input.value = "";}
       
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            if (input.value==''){
                alert("il faut taper une personne")
            } else {
          const newItem = document.createElement("li");
          newItem.innerHTML = input.value;
          list.appendChild(newItem);
          input.value = "";}
        }
    });
