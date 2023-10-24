const elForm = document.querySelector(".form")
const elFormInput = document.querySelector(".form__input")
const chat = document.querySelector(".chat")
const elFormbtn = document.querySelector(".form__btn")
elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    chat.innerHTML = chat.innerHTML + `<h3>${elFormInput.value}</h3> <br>`
    elFormInput.value = null;

})

let mode = true
elForm.addEventListener("submit", (e) => {
    e.preventDefault()
})
//     if (mode == true) {
//         chat.innerHTML = chat.innerHTML + `<h3> <b> ${elFormInput.value} <b> <h3> <br> `
//     }

// })