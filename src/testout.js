export function activateRemove(){
    const remove = document.querySelector(".remove")
    remove.addEventListener('click', function(){
        removeActive()
    })
}
export function displayProjectName(){
    const h2 = document.querySelector('.currentproject')
    h2.innerHTML = event.target.innerHTML
}
export function displayInputContainer(){
    const addTask = document.querySelector('.addtask')
    const inputcontainer = document.querySelector('.inputcontainer')
    addTask.addEventListener('click', function(){
        inputcontainer.classList.add("active")
    })
}
export function makeArray(){
   return window[event.target.innerHTML] = []
}




export function removeActive(){
    const inputcontainer = document.querySelector('.inputcontainer')
    inputcontainer.classList.remove('active')
}
export function todoDom(el){
    const taskContainer = document.querySelector('.taskdiv')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('tododiv')
    const leftSideDiv = document.createElement('div')
    leftSideDiv.classList.add('leftside')
    const rightSideDiv = document.createElement('div')
    rightSideDiv.classList.add('rightside')
    const h3 = document.createElement('h3')
    h3.classList.add('todo')
    h3.innerText = el.todo
    const check = document.createElement('div')
    check.classList.add('unchecked')
    const h4 = document.createElement('h4')
    h4.classList.add('tododate')
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
    console.log(todoDiv)
    console.log(taskContainer)

    taskContainer.append(todoDiv)
}


export function removeProject(projectStorage){
    const removeBtn = document.querySelectorAll('.removeprojectbtn')
    removeBtn.forEach(btn => {
        btn.addEventListener('click', function(event){
            event.target.parentNode.remove()
            const findex = projectStorage.indexOf(event.target.parentNode.childNodes[0].childNodes[0].childNodes[1].innerHTML)

            if (findex > -1) { // only splice array when item is found
                projectStorage.splice(findex, 1); // 2nd parameter means remove one item only
                localStorage.setItem("projects", JSON.stringify(projectStorage))
            }
        })
    })
}
export function createProjectBtn(){
    const projectButtonContainer = document.querySelector('.projectbuttoncontainer')
    const projectNameInput = document.querySelector('.projectnameinput')
    
    const projectBtnDiv = document.createElement('div')
    projectBtnDiv.classList.add('projectbtndiv')
    
    const projectButton = document.createElement('button')
    const projectLeftSideDiv = document.createElement('div')
    const h4 = document.createElement('h3')
    h4.innerHTML = projectNameInput.value
    const leftSideImg = document.createElement('img')
    leftSideImg.src="images/format-list-checks (1).png"
    projectLeftSideDiv.append(leftSideImg)
    projectLeftSideDiv.append(h4)


    const rightSideButton = document.createElement('button')
    rightSideButton.classList.add('removeprojectbtn')
    rightSideButton.innerHTML = "x"
    projectButton.append(projectLeftSideDiv)

    projectButton.classList.add('projectbutton')
    projectButton.classList.add(`${projectNameInput.value}`)
    projectBtnDiv.append(projectButton)
    projectBtnDiv.append(rightSideButton)
    projectButtonContainer.append(projectBtnDiv)
    const project = document.querySelector('.project')
    project.classList.remove('active')
}



