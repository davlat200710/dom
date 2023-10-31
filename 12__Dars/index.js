const ellist = selectelem(".list")
const eltemplate = selectelem(".template").content
const elform = selectelem(".form")
const elforminput = selectelem(".form_input", elform)


let todosArr = JSON.parse(window.localStorage.getItem("todos")) || []

const deleteTodo = (e) => {
    let dataId = e.target.dataset.Id

    let foundIndex = todosArr.find(item => item.id == dataId)

    foundIndex.content = prompt("Yangi xabarni kiriting")
    renderTodos(todosArr, ellist)

    window.localStorage.setItem("todos", JSON.stringify(todosArr))

}

const editTd = (e) => {
    let editId = e.target.dataset.Id
    let foundIndex = todosArr.find(item => item.id == editId)
    todosArr.splice(foundIndex, 1)
    renderTodos(todosArr, ellist)

    window.localStorage.setItem("todos", JSON.stringify(todosArr))


}

function renderTodos(arr, list) {
    ellist.innerHTML = null

    arr.map(item => {
        let cloneTemplate = eltemplate.cloneNode(true)
        let listItemContent = selectelem(".list_item-content", cloneTemplate)
        let listItemDelit = selectelem(".list_item-btn", cloneTemplate)
        let listItemdelete = selectelem(".list_item-btn2", cloneTemplate)


        listItemContent.textContent = item.content
        ellist.appendChild(cloneTemplate)

        listItemContent.textContent = item.content
        listItemDelit.dataset.Id = item.id
        listItemdelete.dataset.id = item.id


        listItemDelit.addEventListener("click", deleteTodo)
        listItemdelete.addEventListener("click", editTd)


        ellist.appendChild(cloneTemplate)
    })
}



elform.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputvalue = elforminput.value.trim()
   
    if(inputvalue != ""){
        todosArr.push({
            id: new Date().getMilliseconds(),
            content: inputvalue,
            isCompleted: false,
        })
        renderTodos(todosArr, ellist)
    
        window.localStorage.setItem("todos", JSON.stringify(todosArr))
    
        elforminput.value = null
        elforminput.focus()
    }
})

renderTodos(todosArr, ellist)