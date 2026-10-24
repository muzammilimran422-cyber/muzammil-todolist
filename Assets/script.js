function todo() {
  let a = document.getElementById("inpt");
  let b = document.getElementById("show");

  if (a.value == "") {
    alert("Please write List item");
  } 
  
  else {

    let li = document.createElement("li");
    li.innerHTML = a.value;


    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.backgroundColor = "#ffc107";
    edit.style.border = "none";
    edit.style.padding = "5px 10px";
    edit.style.color = "white";

    edit.onclick = function () {
      let c = li.firstChild.textContent.trim();
      let d = prompt("Edit item:", c);
      if (d != null && d.trim() != "") {
        li.firstChild.textContent = d.trim();

      }
    };

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.style.backgroundColor = "#dc3545";
    del.style.border = "none";
    del.style.padding = "5px 10px";
    del.style.color = "white";

    del.onclick = function () {
      b.removeChild(li);
    };


    li.appendChild(edit);
    li.appendChild(del);


    b.appendChild(li);


    a.value = "";
  }
}