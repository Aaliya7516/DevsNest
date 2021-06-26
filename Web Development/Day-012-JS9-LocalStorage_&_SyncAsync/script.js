var myList = document.getElementById("todoList");

function getTodos(){
    let todoList = localStorage.getItem("todos");
    myList.innerHTML = todoList;
  }
getTodos();

function addTodo(e){
    if (e.key === "Enter"){
        let todo = document.getElementById("todoInput").value;
        document.getElementById("todoInput").value = '';
        if (todo){
            let newTodo = `<li><i class="fa fa-trash" onclick="toTrash(event)"></i>${todo}<i class="fa fa-check"></i></li>`;
            document.getElementById("todoList").innerHTML += newTodo;
        }else{
            window.alert("Please enter a valid todo!");
        }
        localStorage.setItem('todos', myList.innerHTML);
    }
}

document.getElementById("todoList").addEventListener("click", myToggler);
function myToggler(e){
    if(document.getElementsByClassName("fa-check") ){
        if ("fa fa-check" === e.target.classList.value || "fa fa-check selected" === e.target.classList.value){
            e.target.classList.toggle("selected");
        }else if ( e.target.classList.value === "fa fa-trash" ){
            return;
        }else{
            e.target.getElementsByClassName("fa-check")[0].classList.toggle("selected");
        }
    }
    localStorage.setItem('todos', myList.innerHTML);
}

function toTrash(e){
    if ("fa fa-trash" === e.target.classList.value){
        e.target.parentNode.remove();
    }
    localStorage.setItem('todos', myList.innerHTML);
}