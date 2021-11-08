

const form = document.querySelector('#create-task-form')
const input=document.querySelector('#new-task-description')
const uList=document.querySelector('#tasks')

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const list=document.createElement("li")
  list.innerHTML=`${input.value} <button onclick="deleteTask(event)">x</button>`
  uList.append(list)

})

function deleteTask(e){
alert ("clicked")
e.target.parentNode.remove()}
