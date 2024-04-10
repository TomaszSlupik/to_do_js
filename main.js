const btn = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const myli = document.querySelectorAll('ul li')

// Dodanie do listy
const addToUl = () => {
    const value = input.value
    if (value) {
        const li = document.createElement('li')
        li.textContent = value
        ul.appendChild(li)
        input.value = ""
        li.addEventListener("click", () => {
            li.style.textDecoration = 'line-through'
        })
        
    }

}

// Zrobione zadanie
const checkDone = (event) => {
    const clickedLi = event.target;
    clickedLi.style.textDecoration = 'line-through'
}


btn.addEventListener('click', addToUl)

myli.forEach(element => {
    element.addEventListener('click', checkDone)
});

// Dodanie listy za pomocą entera:
const handleKey = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addToUl()
    }
}

input.addEventListener('keypress', handleKey)