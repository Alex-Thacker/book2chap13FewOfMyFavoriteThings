const name1 = document.querySelector('.name');
const location1 = document.querySelector('.location');
const button = document.querySelector('.button');
const container = document.querySelector('.container')

console.log(name1)
console.log(location1)
console.log(button)

function dom (name, location) {
    container.innerHTML = `<strong>I can purchase ${name} at ${location}</strong>`
}

button.addEventListener('click', event => {
    const nameText = name1.value
    const locationText = location1.value
    dom (nameText, locationText)
})

