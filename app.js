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
BASIC ENCRYPTION...


*/


// const q1 = {
//     question: "Which of the following is not part of the contiguous USA?",
//     ansA: "Wyoming",
//     ansB: "Vermont",
//     ansC: "Alaska",
//     ansD: "Texas",
//     ansKey: 0010
// }

let question = document.querySelector("#question")
let ansA = document.querySelector("#choiceA")
let ansB = document.querySelector("#choiceB")
let ansC = document.querySelector("#choiceC")
let ansD = document.querySelector("#choiceD")


const qWrapper = document.querySelector('.qWrapper')
const choicesDiv = document.querySelector('.choices')
console.log(choicesDiv)
choicesDiv.addEventListener('click', (event) => {

    console.log('You clicked me!')
    console.log(event.target.id)

    // get answer key

    let selection = event.target.id
    //change bg of selected div
    console.log(selection)
    // selection.style.background = "green"
    ansA.style.backgroundColor = "#ddd";
    ansB.style.backgroundColor = "#ddd";
    ansC.style.backgroundColor = "#ddd";
    ansD.style.backgroundColor = "#ddd";
    document.getElementById(selection).style.backgroundColor = "green";

    if (event.target.id === "choiceA") {
        console.log('You are correct!')
    }
    else { console.log('Wrong!') }



})



{
    // div.style.background - color: 'green'
}



// console.log(question)
/*
question.innerText = "Q: Who was the first man to dance on the moon?"
ansA.innerText = "A) Neil Armstrong"
ansB.innerText = "B) Buzz Aldrin"
ansC.innerText = "C) Yuri Gagarin"
ansD.innerText = "D) Moon people of course!"
*/


//Using the question object array
question.innerText = quesCatArray[0].question
ansA.innerText = quesCatArray[0].choiceA
ansB.innerText = quesCatArray[0].choiceB
ansC.innerText = quesCatArray[0].choiceC
ansD.innerText = quesCatArray[0].choiceD




// question format
