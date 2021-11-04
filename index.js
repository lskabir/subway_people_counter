let button = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let save = document.getElementById('save-el')
let counter = document.getElementById('count-el')
let count = 0

button.addEventListener("click", () => {
    count += 1
    counter.textContent = count
})

saveBtn.addEventListener("click", () => {
    let prevState = count + " - "
    save.textContent += prevState
    count = 0
    counter.textContent = count
})