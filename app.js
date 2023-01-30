const clear = document.getElementById("clear")
const addbutton = document.getElementById("addbutton")
let deletebutton = document.getElementsByClassName("deletetask")
const text = document.getElementById("addvalue")
const taskList = document.getElementById("tasklist")

function deleteAttribute(){
    for (const i of deletebutton) {
        i.addEventListener("click", deleteTask = () =>{
            i.parentElement.remove()
        })
    }
}
deleteAttribute()
document.addEventListener("keypress", function(e){
    if (e.key ==! "") {
        text.accessKey
    }
})
clear.addEventListener("click", function(){
    let child = taskList.lastElementChild; 
        while (child) {
            taskList.removeChild(child);
            child = taskList.lastElementChild
        }
})
addbutton.addEventListener("click", addTask)
text.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        addTask()
    }
})

function addTask() {
    if(text.value !== ""){
        let newTask = document.createElement("div")
        newTask.classList.add("dailytask")
        taskList.appendChild(newTask)
        newTask.innerHTML = text.value;
        text.value = ""
        let newDeleteButton = document.createElement("button")
        newDeleteButton.classList.add("deletetask")
        let xSign = document.createElement("img");
        newDeleteButton.setAttribute("id","deletebutton")
        newDeleteButton.appendChild(xSign)
        xSign.src = "/x-symbol-svgrepo-com.svg"; 
        newTask.appendChild(newDeleteButton) 
        deleteAttribute()
    }
}
