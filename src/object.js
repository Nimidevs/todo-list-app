export function makeObject(todo, time){
    return {todo, time}
}

export function reloadCreateProjectBtn(proj){
    const projectButtonContainer = document.querySelector('.projectbuttoncontainer')
    const projectNameInput = document.querySelector('.projectnameinput')
    
    const projectBtnDiv = document.createElement('div')
    projectBtnDiv.classList.add('projectbtndiv')
    
    const projectButton = document.createElement('button')
    const projectLeftSideDiv = document.createElement('div')
    const h4 = document.createElement('h3')
    h4.innerHTML = proj
    const leftSideImg = document.createElement('img')
    leftSideImg.src="images/format-list-checks (1).png"
    projectLeftSideDiv.append(leftSideImg)
    projectLeftSideDiv.append(h4)


    const rightSideButton = document.createElement('button')
    rightSideButton.classList.add('removeprojectbtn')
    rightSideButton.innerHTML = "x"
    projectButton.append(projectLeftSideDiv)

    projectButton.classList.add('projectbutton')
    projectButton.classList.add(proj)
    projectBtnDiv.append(projectButton)
    projectBtnDiv.append(rightSideButton)
    projectButtonContainer.append(projectBtnDiv)

    const project = document.querySelector('.project')
    project.classList.remove('active')
}