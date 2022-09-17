export function displayMain(){
    const  containerDiv = document.createElement('div')
    containerDiv.classList.add('container')
    const h2 = document.createElement('h2');  
    h2.classList.add('currentproject') 
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('taskdiv')
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttoncontainer')
    const img = document.createElement('img')
    img.src="images/plus.png"
    const addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "Add Task"
    addTaskButton.classList.add('addtask')


    const inputContainer = document.createElement('div')
    inputContainer.classList.add('inputcontainer')
    const input = document.createElement('input')
    input.classList.add('chore')
    input.type = 'text'
    input.placeholder = "What to do"
    const dateInput = document.createElement('input')
    dateInput.classList.add('date')
    dateInput.type = "date"
    const inputContainerButton = document.createElement('div')
    const addTodoButton = document.createElement('button')
    addTodoButton.classList.add('add')
    addTodoButton.innerHTML = "Add"
    const removeTodoButton = document.createElement('button')
    removeTodoButton.innerHTML = "Remove"
    removeTodoButton.classList.add('remove')
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
export function addChecked(){
    const unchecked = document.querySelectorAll('.unchecked')
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