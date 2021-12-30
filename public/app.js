var todoInp = document.getElementById("todoInp")
var Todolist = document.getElementById("todolistparent")


function addTodo() {
  var inpValue = todoInp.value
  var todoLi = document.createElement('Li')
  var txt = document.createTextNode(inpValue)
  todoLi.appendChild(txt)
  todolistparent.appendChild(todoLi)

  var deleteBtn = document.createElement('button')
  var delteTxt = document.createTextNode('DELETE')
  deleteBtn.setAttribute('class','btn')
  deleteBtn.setAttribute('onclick','deleteTodo(this)')
  deleteBtn.appendChild(delteTxt)
  todoLi.appendChild(deleteBtn)
 
  var editBtn = document.createElement('button')
  var editTxt = document.createTextNode('EDIT')
  editBtn.setAttribute('class','btn')
  editBtn.setAttribute('onclick','edittodo(this)')
  editBtn.appendChild(editTxt)
  todoLi.appendChild(editBtn)
}

function deleteTodo(element){
    element.parentNode.remove()
}
function edittodo(element){
    element.parentNode.firstChild.nodeValue = prompt("Edit Value", element.parentNode.firstChild.nodeValue)
}
function DeleteAll (){
    Todolist.innerHTML = ""
}
