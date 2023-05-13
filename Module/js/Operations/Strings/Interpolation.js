import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'
import { clearFields } from '/JavaScript/Module/js/Publics/clearString.js'

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''
    let words = document.querySelector('#words').value
    let interpolation = `Maximum ${words}`
    createLabel(document.querySelector('#result').innerHTML = interpolation)
}
