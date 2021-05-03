
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

// CATEGORY SELECTION

const categoriesUl = document.querySelector(".categoriesUl")

categoriesUl.addEventListener("click", event => {

    console.log(event.target.id) // TESTING
    if (event.target.id === "category1") {
        //load category1
        loadCategory(questionsCat1)
    }
    else if (event.target.id === "category2") {
        //load category2
        loadCategory(questionsCat2)
    }
    else if (event.target.id === "category3") {
        //load category3
        loadCategory(questionsCat3)
    }
    else {
        //load category4
        loadCategory(questionsCat4)
    }

})
const cat1 = document.getElementById("category1")




//*************************

const question = document.querySelector("#question")
const ansA = document.querySelector("#choiceA")
const ansB = document.querySelector("#choiceB")
const ansC = document.querySelector("#choiceC")
const ansD = document.querySelector("#choiceD")
const submitBtn = document.querySelector(".submit")
const quitBtn = document.querySelector(".quit")
const qWrapper = document.querySelector('.qWrapper')
const choicesDiv = document.querySelector('.choices')

let selectedChoice = ""
choicesDiv.addEventListener('click', (event) => {

    // console.log('You clicked me!')
    // console.log(event.target.id)

    // get answer key
    // console.log(event.target.id)
    if (event.target.id !== "") {
        selection = event.target.id
        selectedChoice = selection

        // change bg of selected div
        // console.log(selection)
        // selection.style.background = "green"
        ansA.style.backgroundColor = "#ddd";
        ansB.style.backgroundColor = "#ddd";
        ansC.style.backgroundColor = "#ddd";
        ansD.style.backgroundColor = "#ddd";
        // set background of selected ans
        document.getElementById(selection).style.backgroundColor = "green";
    }
})

submitBtn.addEventListener('click', (event) => {
    // test answer if it was choiceA
    if (selectedChoice === "choiceA") {
        console.log('You are correct!')
    } else if (selectedChoice === "") {
        console.log('please make a selection')
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

function loadCategory(quesCatArray) {
    let i = 0
    let answer = ""
    // _________________________________________________________ LOOP START
    // loop as long as i<questCatArray.length
    // While(i < quesCatArray.length)... or maybe recursion


    // base case ...  return when i = quesCatArray-1

    while (i < quesCatArray.length) {

        question.innerText = quesCatArray[i].question
        ansA.innerText = quesCatArray[i].choiceA
        ansB.innerText = quesCatArray[i].choiceB
        ansC.innerText = quesCatArray[i].choiceC
        ansD.innerText = quesCatArray[i].choiceD

        let key = quesCatArray[i].key       // Answer key fetched from question object
        // Answer will be set by comparison to key

        // SCORING THE SELECTION AGAINST THE ANSWER KEY
        if (key === 1000) { answer = "choiceA" }
        else if (key === 0100) { answer = "choiceB" }
        else if (key === 0010) { answer = "choiceC" }
        else if (key === 0001) { answer = "choiceD" }



        submitBtn.addEventListener('click', (event) => {


            // what to do when correct answer selected
            if (selectedChoice === answer) {
                // DO CORRECT ANSWER STUFF
                // Maybe display correct
                // update score
                // enable to move to next
                console.log('You are correct!')
            } else if (selectedChoice === "") {
                // DO WRONG ANSWER STUFF
                // enable to move to next
                console.log('please make a selection')
            }
            else { console.log('Wrong!') }
        })
        i++

    }
    // _________________________________________________________LOOP END

    //go to results/ end page

}



// question format
