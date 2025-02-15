
document.addEventListener('DOMContentLoaded', function(){

    let execute = document.querySelector('#execute')
    let clear = document.querySelector('#clear')
    
    execute.addEventListener('click', showResult)
    clear.addEventListener('click', clearFields)
})


function showResult(event) {
    clearFields(event)

    document.querySelector('#parse-float').innerHTML = `Number.parseFloat('n'): ${parseFloatNumber('46.4856')}`
    document.querySelector('#to-fixed').innerHTML = `variable.toFixed(46.4856): ${roundedNumber(46.4856)}`
    document.querySelector('#floor').innerHTML = `Floor (46.4856): ${numberFloor(46.4856)}`
    document.querySelector('#ceil').innerHTML = `Ceil (46.4856): ${numberCeil(46.4856)}`
    document.querySelector('#evaluate').innerHTML = `Number greater than variable? ${evaluateCondition(11)}`
}

function parseFloatNumber(number) {
    let objNumber = Number.parseFloat(number)
    return objNumber
}

function roundedNumber(number) {
    let numberRound = number.toFixed(2)
    return numberRound
}

function numberFloor(number) {
    return Math.floor(number)
}

function numberCeil(number) {
    return Math.ceil(number)
}

function evaluateCondition(number) {
    return number >= 10
}

function clearFields(event){
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#parse-float').innerHTML = ''
    document.querySelector('#to-fixed').innerHTML = ''
    document.querySelector('#floor').innerHTML = ''
    document.querySelector('#ceil').innerHTML = ''
    document.querySelector('#evaluate').innerHTML = ''
}