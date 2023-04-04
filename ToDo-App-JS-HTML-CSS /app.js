const inputBox =  document.getElementById("input-box");
const listContainer = document.getElmeentById("list-containe");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something here...")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}