var elForm = document.querySelector(".js-form")
var elInputFirst= document.querySelector(".js-input-first")
var elInputSecond = document.querySelector(".js-input-second")
var elOutput = document.querySelector(".js-output")
var elOx = document.querySelector(".js-button-ox")
var elBx = document.querySelector(".js-button-bx")
var elOutput = document.querySelector(".js-output")

var fruits = [" Olma", "Nok", "Banan"]
elOutput.textContent = fruits


elForm.addEventListener("submit" , function(e){
    e.preventDefault()
    
    firstInputValue = elInputFirst.value.trim()
    secondInputValue = elInputSecond.value.trim()
    if (firstInputValue.length !== 0) {
        fruits.unshift(firstInputValue)
        
    }
    if (secondInputValue.length !== 0) {
        fruits.push(secondInputValue)
    }
    
    elOutput.textContent = fruits
    
    e.target.reset()
})

elBx.addEventListener("click", function(e){
    e.preventDefault()
    
    fruits.shift()
    elOutput.textContent = fruits
})

elOx.addEventListener("click", function(e){
    e.preventDefault()
    
    fruits.pop()
    elOutput.textContent = fruits
})
