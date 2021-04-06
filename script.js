const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

const localList = JSON.parse(localStorage.getItem("list"))

if(localList){
    localList.forEach(text =>{
    makingList(text)
})
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    makingList()

})


function makingList(localObject){
    let textOfInput = input.value

    if(localObject){
        textOfInput = localObject.text
    }


    if(textOfInput){
        const makeLi = document.createElement("li")
        makeLi.innerText  = textOfInput
          
        if(localObject && localObject.completed){
            makeLi.classList.add("comlete")
        } 

        makeLi.addEventListener("click",()=>{
            makeLi.classList.toggle("comlete")
            storingLiText()
        })

        makeLi.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            makeLi.remove()
            storingLiText()
        })

        todosUL.appendChild(makeLi)

        input.value = ''
        
        storingLiText()
    }
}

function storingLiText(){
    const liAll = document.querySelectorAll("li")
    const arrayOftext = []

    liAll.forEach(li=>{
        arrayOftext.push({
            text: li.innerText,
            completed: li.classList.contains("comlete")
        })
    })

    localStorage.setItem('list', JSON.stringify(arrayOftext))
}




































// const todos = JSON.parse(localStorage.getItem('todos'))

// if(todos){
//     todos.forEach(todo => {
//         addTodo(todo)
        
//     });
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()

//     addTodo()
// })

// function addTodo(todo){
//     let todoText = input.value

//     if(todo){
//         todoText = todo.text
//     }

//     if(todoText){
//         const todoEl = document.createElement("li")
//         if( todo && todo.completed){
//             todoEl.classList.add("completed")
//         }

//         todoEl.innerText = todoText
        
//         todoEl.addEventListener("click", ()=>{
//             todoEl.classList.toggle("comlete")
//             updatels()
//         })

//         todoEl.addEventListener("contextmenu", (e)=>{
//             e.preventDefault()
//             todoEl.remove()
//             updatels()
//         })

//         todosUL.appendChild(todoEl)

//         input.value = ''

//         updatels()
//     }

// }

// function updatels(){
//     const todoEl = document.querySelectorAll("li")

//     const todos = []

//     todoEl.forEach(todo =>{
//         todos.push({
//             text: todo.innerText,
//             completed:todo.classList.contains("comlete")
//         })
//     })

//     localStorage.setItem("todos", JSON.stringify(todos))
// }
