let age = document.querySelector('#age')
let message = document.querySelector('p')

function checkAge(){
    if(age.value < 13){
        // alert('You are a child')
        message.innerHTML = 'You are a child'
    }
    else if(age.value >= 13 && age.value <= 18){
    message.innerHTML = 'You are a teenager'
    }
    else {
        message.innerHTML = 'You are an adult'
    }
}

// js concatination

let name = 'tasneem' + ' ' + 'farid'
let number = 5 + 2

console.log(name)
console.log(number)

let ageNum = 18 
// let text = "i am 18 years old"
// let text = 'I am ' + ageNum + ' years old'
let text = `I am ${ageNum} years old`

console.log(ageNum)
console.log(text)