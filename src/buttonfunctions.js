export function createTodoName(e){
    const main = document.querySelector('main')
    main.childNodes[0].childNodes[0].innerHTML = e.childNodes[0].childNodes[1].innerText
}
export function makeButtonsMain(btn){
    const  containerDiv = document.createElement('div')
    containerDiv.classList.add('btncontainer')
    const h2 = document.createElement('h2');  
    h2.classList.add('btncurrentproject') 
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('btntaskdiv')
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('btnbuttoncontainer')
    const img = document.createElement('img')
    img.src="images/plus.png"
    const addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "Add Task"
    addTaskButton.classList.add('btnaddtask')


    const inputContainer = document.createElement('div')
    inputContainer.classList.add('btninputcontainer')
    const input = document.createElement('input')
    input.classList.add('btnchore')
    input.type = 'text'
    input.placeholder = "What to do"
    const dateInput = document.createElement('input')
    dateInput.classList.add('btndate')
    dateInput.type = "date"
    const inputContainerButton = document.createElement('div')
    const addTodoButton = document.createElement('button')
    addTodoButton.classList.add('btnadd')
    addTodoButton.classList.add(btn.childNodes[0].childNodes[1].innerHTML)
    addTodoButton.innerHTML = "Add"
    const removeTodoButton = document.createElement('button')
    removeTodoButton.innerHTML = "Remove"
    removeTodoButton.classList.add('btnremove')
    inputContainerButton.append(addTodoButton)
    inputContainerButton.append(removeTodoButton)
    inputContainer.append(input)
    inputContainer.append(dateInput)
    inputContainer.append(inputContainerButton)


    buttonContainer.append(img)
    buttonContainer.append(addTaskButton)
    containerDiv.append(h2)
    containerDiv.append(taskDiv)
    containerDiv.append(inputContainer)
    containerDiv.append(buttonContainer)

    return containerDiv
}

export function btnDisplayInputContainer(){
    const addTask = document.querySelector('.btnaddtask')
    const inputcontainer = document.querySelector('.btninputcontainer')
    addTask.addEventListener('click', function(){
        inputcontainer.classList.add("active")
    })
}
export function btnRemoveActive(){
    const inputcontainer = document.querySelector('.btninputcontainer')
    inputcontainer.classList.remove('active')
}
export function btnActivateRemove(){
    const remove = document.querySelector(".btnremove")
    remove.addEventListener('click', function(){
        btnRemoveActive()
    })
}

export function btnTodoDom(el){
    const taskContainer = document.querySelector('.btntaskdiv')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('btntododiv')
    const leftSideDiv = document.createElement('div')
    leftSideDiv.classList.add('btnleftside')
    const rightSideDiv = document.createElement('div')
    rightSideDiv.classList.add('btnrightside')
    const h3 = document.createElement('h3')
    h3.classList.add('btntodo')
    h3.innerText = el.todo
    const check = document.createElement('div')
    check.classList.add('btnunchecked')
    const h4 = document.createElement('h4')
    h4.classList.add('btntododate')
    h4.innerText = el.time
    const removeTodoBtn = document.createElement('button')
    removeTodoBtn.classList.add('removetodobtn')
    removeTodoBtn.innerHTML = "x"

    leftSideDiv.append(check)
    leftSideDiv.append(h3)
    rightSideDiv.append(h4)
    todoDiv.append(leftSideDiv)
    todoDiv.append(rightSideDiv)
    todoDiv.append(removeTodoBtn)

    taskContainer.append(todoDiv)
}

export function btnaddChecked(){
    const unchecked = document.querySelectorAll('.btnunchecked')
    unchecked.forEach(divc => {
        divc.addEventListener('click', function(){
            if(divc.classList.contains('checked')){
                divc.classList.remove('checked')
            }
            else{
                divc.classList.add('checked')
            }
        })
    })
}
export function removeTodo(todoStorage){
    const removeTodoBtn = document.querySelectorAll('.removetodobtn')
    removeTodoBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            event.target.parentNode.remove()
            todoStorage.forEach(array => {
                let val = array.includes(event.target.parentNode.childNodes[0].childNodes[1].innerHTML)
                if(val === true){
                    var findex = todoStorage.indexOf(array)
                }
                if (findex > -1) { // only splice array when item is found
                    todoStorage.splice(findex, 1); // 2nd parameter means remove one item only
                    localStorage.setItem("todos", JSON.stringify(todoStorage))
                }
            })
        })
    })
}

export function btnRemoveTodo(todoStorage, bten){
    const removeTodoBtn = document.querySelectorAll('.removetodobtn')
    removeTodoBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            event.target.parentNode.remove()
            todoStorage.forEach(array => {
                let val = array.includes(event.target.parentNode.childNodes[0].childNodes[1].innerHTML)
                if(val === true){
                    var findex = todoStorage.indexOf(array)
                    console.log(findex)
                }
                if (findex > -1) { // only splice array when item is found
                    todoStorage.splice(findex, 1); // 2nd parameter means remove one item only
                    console.log(todoStorage)
                    localStorage.setItem(`${bten}`+"todos", JSON.stringify(todoStorage))
                }
            })
        })
    })
}