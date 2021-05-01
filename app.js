console.log('test')

//question object
// const question = {
//question
//answer1
//answer2
//answer3
//answer4
//ans-key

// }
//select an array of questions to load

//
/*
on submit, check returned value against answer key
display result and move to next question

way to hide answer key?

*/


// const q1 = {
//     question: "Which of the following is not part of the contiguous USA?",
//     ansA: "Wyoming",
//     ansB: "Vermont",
//     ansC: "Alaska",
//     ansD: "Texas",
//     ansKey: 0010
// }
const qWrapper = document.querySelector('.qWrapper')
console.log(qWrapper)
qWrapper.addEventListener('click', (event) => {

    console.log('You clicked me!')
    console.log(event.target.id)
})


//change the bg of the id

{
    // div.style.background - color: 'green'
}

let question = document.querySelector("#question")
let ansA = document.querySelector("#one")
let ansB = document.querySelector("#two")
let ansC = document.querySelector("#three")
let ansD = document.querySelector("#four")


// console.log(question)
question.innerText = "Q: Who was the first man to dance on the moon?"
ansA.innerText = "A) Neil Armstrong"
ansB.innerText = "B) Buzz Aldrin"
ansC.innerText = "C) Yuri Gagarin"
ansD.innerText = "D) Moon people of course!"