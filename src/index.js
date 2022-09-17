import { displayMain, addChecked } from "./display"
import { makeObject, reloadCreateProjectBtn } from "./object"
import {removeProject, activateRemove, displayProjectName, displayInputContainer, makeArray, removeActive, todoDom, createProjectBtn } from "./testout"
import {btnRemoveTodo,removeTodo, createTodoName, makeButtonsMain, btnDisplayInputContainer, btnActivateRemove, btnRemoveActive, btnTodoDom, btnaddChecked} from "./buttonfunctions"

const main = document.querySelector('main')
const inboxButton = document.querySelector('.inbox')
window.onload = function(){
    inboxButton.click()
}
let projectStorage = localStorage.getItem("projects")
        ? JSON.parse(localStorage.getItem("projects"))
        : [];

let todoStorage = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
 
        

const _inbox = displayMain()
inboxButton.addEventListener('click', function(event){
    main.replaceChildren(_inbox)
    displayProjectName()
    displayInputContainer()
    activateRemove()
    addTodo()
})
function addTodo(){
    const add = document.querySelector('.add')
    const chore = document.querySelector('.chore')
    const choreDate  = document.querySelector('.date')

    add.addEventListener('click', function(e){
        
        let constArray = []
        constArray.push(chore.value)
        constArray.push(choreDate.value)
        todoStorage.push(constArray);
        console.log(todoStorage)
        console.log(localStorage.setItem("todos", JSON.stringify(todoStorage)))

        const todoDiv = document.querySelectorAll('.tododiv')
        if(choreDate.value === ""){
            var newTodo = makeObject(chore.value, "No Due Date")
        }else{
            var newTodo = makeObject(chore.value, choreDate.value)
        }
        if(chore.value === ""){
            alert('Todo Name cannot be empty')
            return;
        }
        let tar = Array.from(todoDiv).some(btn => {
            return btn.childNodes[0].childNodes[1].innerText === chore.value
        })
        if(typeof todoDiv === 'undefined' || todoDiv.length <= 0){            
            todoDom(newTodo)
        }else if(( typeof todoDiv !== 'undefined' && todoDiv.length > 0) && tar === true ){
            alert('Todo cannot be the same')
        }
        else{
            todoDom(newTodo)
        }
        addChecked()
        removeTodo(todoStorage)
        removeActive()
        e.stopImmediatePropagation()
    })
}

window.onload = function() {
    inboxButton.click()
    setTimeout(myFunc, 1);
    setTimeout(addChecked, 3);
    setTimeout(function() {
        removeTodo(todoStorage);
    }, 3)
}
function myFunc(){
    localStorage.setItem("todos", JSON.stringify(todoStorage));
    const getNotes = JSON.parse(localStorage.getItem("todos"));
    getNotes.forEach((todo) => {
        const todoDiv = document.querySelectorAll('.tododiv')
        if(todo[1] === ""){
            var newTodo = makeObject(todo[0], "No Due Date")
        }else{
            var newTodo = makeObject(todo[0], todo[1])
        }
        todoDom(newTodo)
    });
}



const cancel = document.querySelector('.cancel')
const addNewProject = document.querySelector('.addnewproject')
const makeAddVisible = document.querySelector('.makeaddvisible')
makeAddVisible.addEventListener('click', function(){
    const project = document.querySelector('.project')
    project.classList.add('active')
})
cancel.addEventListener('click', function(){
    const project = document.querySelector('.project')
    project.classList.remove('active')
})
addNewProject.addEventListener('click', function(){
    checkProjectName()
    makeDeleteVisible()
    activateProjectBtn()
    removeProject(projectStorage)
})
function makeDeleteVisible(){
    const projetBtnContainer = document.querySelectorAll('.projectbtndiv')
    projetBtnContainer.forEach(cont => { 
        cont.addEventListener('mouseover', function(){
            cont.childNodes[1].classList.add('active')
        })
        cont.addEventListener('mouseleave', function(){
            cont.childNodes[1].classList.remove('active')
        })
    })
}

function checkProjectName(){
    const deleteBtn = document.querySelectorAll('.projectbutton')
    const projectNameInput = document.querySelector('.projectnameinput')
    let tar = Array.from(deleteBtn).some(btn => {
        return btn.childNodes[0].childNodes[1].innerText === projectNameInput.value
    })
    if(typeof deleteBtn === 'undefined' || deleteBtn.length <= 0){
        createProjectBtn()
    }else if(( typeof deleteBtn !== 'undefined' && deleteBtn.length > 0) && tar === true ){
        alert('project Name cannot be the same')
    }
    else{
        createProjectBtn()
    }
    projectStorage.push(projectNameInput.value)
    console.log(localStorage.setItem("projects", JSON.stringify(projectStorage)))
}

localStorage.setItem("projects", JSON.stringify(projectStorage));
const getprojects = JSON.parse(localStorage.getItem("projects"));
getprojects.forEach((project) => {
    reloadCreateProjectBtn(project)
    makeDeleteVisible()
    removeProject(projectStorage)
    activateProjectBtn()
})

function activateProjectBtn(){
    const deleteBtn = document.querySelectorAll('.projectbutton')
    deleteBtn.forEach(btn => {
        let count = 0
        const _btnInbox = makeButtonsMain(btn)
        console.log(btn.childNodes[0].childNodes[1].innerHTML)
        window[btn.childNodes[0].childNodes[1].innerHTML] = localStorage.getItem(`${btn.childNodes[0].childNodes[1].innerHTML}` + "todos")
            ? JSON.parse(localStorage.getItem(`${btn.childNodes[0].childNodes[1].innerHTML}`+"todos"))
            : [];
            console.log(window[btn.childNodes[0].childNodes[1].innerHTML])
        btn.addEventListener('click', function(e){
            count++
            main.replaceChildren(_btnInbox)
            createTodoName(this)
            btnDisplayInputContainer()
            btnActivateRemove()
            btnAddTodo()
            const removeBtn = document.querySelectorAll('.removeprojectbtn')
            removeBtn.forEach(btn => {
                btn.addEventListener('click', function(event){
                    event.target.parentNode.remove()
                    document.querySelector('main').replaceChildren()
                })
            })
            if(count === 1){
                btnFunc(btn)
            }
            btnaddChecked()
            btnRemoveTodo(window[btn.childNodes[0].childNodes[1].innerHTML], btn.childNodes[0].childNodes[1].innerHTML)
            e.stopImmediatePropagation()
        })
    })
}
function btnAddTodo(){
    const add = document.querySelector('.btnadd')
    const chore = document.querySelector('.btnchore')
    const choreDate  = document.querySelector('.btndate')
    add.addEventListener('click', function(e){
        const myClassList = document.querySelector('.btnadd').classList
        const mainClass = Array.from(myClassList)
        console.log(mainClass)
        console.log(mainClass[1])


        let btnConstArray = []
        btnConstArray.push(chore.value)
        btnConstArray.push(choreDate.value)
        window[mainClass[1]].push(btnConstArray);
        console.log(window[mainClass[1]])
        console.log(localStorage.setItem(`${mainClass[1]}`+"todos", JSON.stringify(window[mainClass[1]])))

        const todoDiv = document.querySelectorAll('.btntododiv')
        if(choreDate.value === ""){
            var newTodo = makeObject(chore.value, "No Due Date")
        }else{
            var newTodo = makeObject(chore.value, choreDate.value)
        }
        if(chore.value === ""){
            alert('Todo Name cannot be empty')
            return;
        }

        let tar = Array.from(todoDiv).some(btn => {
            return btn.childNodes[0].childNodes[1].innerText === chore.value
        })
        if(typeof todoDiv === "undefined" || todoDiv.length <= 0){         
            btnTodoDom(newTodo) 
        }
        else if(( typeof todoDiv !== 'undefined' && todoDiv.length > 0) && tar === true ){
            alert('Todo cannot be the same')
        }
        else{
            btnTodoDom(newTodo)
        }
        const inputcontainer = document.querySelector('.btninputcontainer')
        inputcontainer.classList.remove('active')
        btnaddChecked()
        btnRemoveTodo(window[mainClass[1]], mainClass[1])
        e.stopImmediatePropagation()
    })
}

function btnFunc(btn){
    localStorage.setItem(`${btn.childNodes[0].childNodes[1].innerHTML}`+"todos", JSON.stringify(window[btn.childNodes[0].childNodes[1].innerHTML]));
    const getBtnTodos = JSON.parse(localStorage.getItem(`${btn.childNodes[0].childNodes[1].innerHTML}`+"todos"));
    getBtnTodos.forEach((todo) => {
        const todoDiv = document.querySelectorAll('.btntododiv')
        if(todo[1] === ""){
            var newTodo = makeObject(todo[0], "No Due Date")
        }else{
            var newTodo = makeObject(todo[0], todo[1])
        }
        btnTodoDom(newTodo)
    });
}













const todayBtn = document.querySelector('.today')
todayBtn.addEventListener('click', function(event){
    const h2 = document.createElement('h2')
    h2.innerHTML = event.target.innerHTML
    main.replaceChildren(h2)
})

const weekBtn = document.querySelector('.week')
weekBtn.addEventListener('click', function(event){
    const h2 = document.createElement('h2')
    h2.innerHTML = "This" + " " + event.target.innerHTML
    main.replaceChildren(h2)
})