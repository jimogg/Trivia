
// CATEGORY SELECTION

// Set links to question category arrays
const questionsCat1 = quesCatArray
const questionsCat2 = []
const questionsCat3 = []
const questionsCat4 = []

// Grab UL holding the category selections
const categoriesUl = document.querySelector(".categoriesUl")

categoriesUl.addEventListener("click", event => {

    console.log(event.target.id) // TESTING
    if (event.target.id === "category1") {
        loadCategory(questionsCat1)
    }
    else if (event.target.id === "category2") {
        loadCategory(questionsCat2)
    }
    else if (event.target.id === "category3") {
        loadCategory(questionsCat3)
    }
    else { loadCategory(questionsCat4) }

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
const nextBtn = document.querySelector(".next")
const qWrapper = document.querySelector('.qWrapper')
const choicesDiv = document.querySelector('.choices')

let selectedChoice = ""
choicesDiv.addEventListener('click', (event) => {

    // console.log('You clicked me!')
    // console.log(event.target.id)

    // get answer key

    if (event.target.id !== "") {
        selection = event.target.id
        selectedChoice = selection

        resetMultiChoiceBg()
        // set background of selected ans
        document.getElementById(selection).style.backgroundColor = "green";  // TEST color... change it to appropriate one
    }
})

// reset backgrounds of  multi-choice divs
function resetMultiChoiceBg() {
    ansA.style.backgroundColor = "#ddd";
    ansB.style.backgroundColor = "#ddd";
    ansC.style.backgroundColor = "#ddd";
    ansD.style.backgroundColor = "#ddd";
}

// ######### TOTAL SCORE ###########
let totalScore = 0 //running tally?



function loadCategory(quesCatArray) {

    let categoryScore = 0
    let i = 0
    let answer = ""
    quizQuestions(i)



    function quizQuestions(i = 0) {
        i++
        nextEnable = false


        // Base case for recursion -> exit and show results if prev question was last
        if (i === quesCatArray - 1) {
            return
        }

        // load question and ans choices into HTML page
        question.innerText = quesCatArray[i].question
        ansA.innerText = quesCatArray[i].choiceA
        ansB.innerText = quesCatArray[i].choiceB
        ansC.innerText = quesCatArray[i].choiceC
        ansD.innerText = quesCatArray[i].choiceD

        // Answer key fetched from question object
        let key = quesCatArray[i].key


        // Set answer based on ans key in question object
        if (key === 1000) { answer = "choiceA" }
        else if (key === 0100) { answer = "choiceB" }
        else if (key === 0010) { answer = "choiceC" }
        else if (key === 0001) { answer = "choiceD" }


        // SUMBIT event listener
        submitBtn.addEventListener('click', (event) => {

            if (selectedChoice === answer) {
                console.log('You are correct!')
                // DO CORRECT ANSWER STUFF
                // Maybe display correct
                // update score
                // enable to move to next
                nextEnable = true

            }
            else if (selectedChoice === "") {
                alert('please make a selection first')
            }
            else {
                console.log('Wrong!')

                // DO WRONG ANSWER STUFF

                nextEnable = true
            }

        })
        nextBtn.addEventListener('click', (event) => {
            if (nextEnable === true) {
                console.log('Yes you clicked next.')

                // i++
                resetMultiChoiceBg()
                quizQuestions(i)

            } else { console.log('Do stuff before you can click next.') }
        })

        //_________

        //_________


        //go to results end page

    }
}
