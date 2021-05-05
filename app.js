
// CATEGORY SELECTION

//Null question
const quesCatArrayNull = [
    {
        categoryName: ""
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        key: 0000
    }]

// Set links to question category arrays
const questionsCat1 = quesCatArray0
const questionsCat2 = quesCatArray1
const questionsCat3 = quesCatArray2
const questionsCat4 = quesCatArray3
const liSelectBgColor = "#ccc"
const liUnSelectBgColor = "white"
const selectionBgColor = "#00eaff"//"#0091ff"//"#4fcaff""#00b3ff"
const correctAnsWas = "#ff0040"//"#ff3d6e" //red
const catInvalidBgColor = "gray"

// Grab UL holding the category selections
const categoriesUl = document.querySelector(".categoriesUl")
const category1 = document.querySelector('#category1')
const category2 = document.querySelector('#category2')
const category3 = document.querySelector('#category3')
const category4 = document.querySelector('#category4')

const scoreArray = [0, 0, 0, 0]
const categoryPlayed = [0, 0, 0, 0]
let scoreCategoryId = 0
// let categoryScore = 0

categoriesUl.addEventListener("click", event => {
    scoreDiv.innerText = 0
    category1.style.backgroundColor = liUnSelectBgColor
    category2.style.backgroundColor = liUnSelectBgColor
    category3.style.backgroundColor = liUnSelectBgColor
    category4.style.backgroundColor = liUnSelectBgColor

    if (event.target.id === "category1") {
        loadCategory(questionsCat1)
        submitEnable = true
        //reset this score
        // if (categoryPlayed[0] === 1) {
        //     category1.style.color = catInvalidBgColor

        //     alert('select another category')
        // }

        scoreCategoryId = 0
        categoryPlayed[0] = 1
        // errPrompt.innerTxt = ""

        category1.style.backgroundColor = liSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category2") {
        loadCategory(questionsCat2)

        // if (categoryPlayed[1] === 1) {
        //     category2.style.color = catInvalidBgColor

        //     alert('select another category')
        // }
        //reset this score
        // scoreArray[1] = 0
        scoreCategoryId = 1
        categoryPlayed[1] = 1
        // categoryScore = 0
        // let origTxt = category2.innerText
        // category2.innerHTML = `${origTxt} &#10003`
        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category3") {
        loadCategory(questionsCat3)

        // if (categoryPlayed[2] === 1) {
        //     category3.style.color = catInvalidBgColor

        // alert('select another category')
        // }
        //reset this score
        // scoreArray[2] = 0
        scoreCategoryId = 2
        categoryPlayed[2] = 1
        // categoryScore = 0
        // let origTxt = category3.innerText
        // category3.innerHTML = `${origTxt} &#10003`

        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else {
        loadCategory(questionsCat4)

        // if (categoryPlayed[3] === 1) {
        //     category4.style.color = catInvalidBgColor

        //     alert('select another category')
        // }
        //reset this score
        // scoreArray[3] = 0
        scoreCategoryId = 3
        categoryPlayed[3] = 1
        // categoryScore = 0
        // let origTxt = category4.innerText
        // category4.innerHTML = `${origTxt} &#10003`
        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liSelectBgColor
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
const btnNext = document.querySelector(".next")
const qWrapper = document.querySelector('.qWrapper')
const choicesDiv = document.querySelector('.choices')
const startPage = document.querySelector('.startPage')
const scoreDiv = document.querySelector(".score")
const questionHeader = document.querySelector("#questionHeader")
const selectedCategory = document.querySelector("#selectedCategory")
const resultsDiv = document.querySelector(".resultsDiv")
const btnReturn = document.querySelector("#btnReturn")
const btnBeginQuiz = document.querySelector("#btnBeginQuiz")
const errPrompt = document.querySelector("#errPrompt")


let selectedChoice = ""
let totalScore = updateTotalScore()


choicesDiv.addEventListener('click', (event) => {

    // console.log('You clicked me!')
    // console.log(event.target.id)

    // get answer key

    if (event.target.id !== "") {
        const selection = event.target.id
        selectedChoice = selection

        resetMultiChoiceBg()
        // set background of selected ans
        document.getElementById(selection).style.backgroundColor = selectionBgColor;  // TEST color... change it to appropriate one
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


function updateTotalScore() {
    let sum = 0

    scoreArray.forEach(element => {
        sum += element

    });
    return sum
}

//FUNCTION TO LOAD CATEGORY OF QUESTIONS
function loadCategory(quesCatArray) {

    let i = 1
    let answer = ""
    let nextCount = 0
    quizQuestions(i)



    function quizQuestions(i) {

        nextEnable = false
        submitEnable = true

        // Base case for recursion -> exit and show results if prev question was last
        // if (i === quesCatArray.length - 1) {
        //     return
        // }

        // load questions and answer choices into HTML page
        selectedCategory.innerText = `CATEGORY: ${quesCatArray[0].categoryName}`
        questionHeader.innerHTML = `&nbsp;&nbsp;Question ${i} of ${quesCatArray.length - 1}`
        question.innerText = quesCatArray[i].question
        ansA.innerText = quesCatArray[i].choiceA
        ansB.innerText = quesCatArray[i].choiceB
        ansC.innerText = quesCatArray[i].choiceC
        ansD.innerText = quesCatArray[i].choiceD

        // Answer key fetched from question object
        let key = quesCatArray[i].key


        // Decode answer key
        if (key === 1000) { answer = "choiceA" }
        else if (key === 0100) { answer = "choiceB" }
        else if (key === 0010) { answer = "choiceC" }
        else if (key === 0001) { answer = "choiceD" }


        // SUMBIT event listener
        submitBtn.addEventListener('click', (event) => {
            if (submitEnable === true) {
                if (selectedChoice === answer) {
                    scoreArray[scoreCategoryId]++
                    console.log(scoreArray)  // TESTING
                    scoreDiv.innerText = scoreArray[scoreCategoryId]
                    // enable to move to next question
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""

                }
                else if (selectedChoice === "") {
                    alert('please make a selection first.')
                    // errPrompt.innerTxt = "Please make a selection first."
                    // let something = errPrompt.innerTxt
                    // console.log(something)
                }
                else {
                    // console.log('Wrong!')       // TEST remove
                    // console.log(selectedChoice)  // TEST remove
                    // show correct answer
                    document.getElementById(answer).style.backgroundColor = correctAnsWas;  // TEST color... change it to appropriate one
                    console.log(answer)
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""
                }
            }
        })
        btnNext.addEventListener('click', nextQuestion)
        function nextQuestion() {
            //----------NEW WAY-------------------
            // while (i < quesCatArray.length - 1) {


            //     i++
            //     resetMultiChoiceBg()
            //     quizQuestions(i)
            //     nextCount++
            // }
            // if (nextCount === quesCatArray.length) {
            //     //  end stuff
            //     resetMultiChoiceBg()
            //     loadCategory()
            //     resultsPage()

            //     nextCount = 0



            // }

            //----------END NEW WAY----------------


            //----------------OLD WAY-----------------------
            if (i < quesCatArray.length - 1 && nextCount != quesCatArray.length) {

                if (nextEnable === true) {
                    i++
                    nextCount++
                    console.log(i, quesCatArray.length)  // Test
                    resetMultiChoiceBg()
                    quizQuestions(i)
                }
            }
            else {
                //Reset questions... reload?
                console.log('hello from else')
                qWrapper.style.display = "none"
                quizQuestions(1)
                resetMultiChoiceBg()
                resultsPage()
                submitEnable = false
                nextCount = 0
                // loadCategory(quesCatArrayNull)
            }
            //---------------------END OLD WAY---------------


        }


    }

    //-----



    //------
}

//go to results end page
function resultsPage() {
    resultsDiv.style.display = "block"
    const scoreP = document.querySelector("#scoreP")
    scoreP.innerHTML = `Your score this category: ${scoreArray[scoreCategoryId]}`
    // scoreP.innerHTML = `Your score this category: ${scoreArray[scoreCategoryId]} <br/> Your overall score: ${totalScore}`

}

function firstPage() {
    location.reload()

    //---------------------------
    // qWrapper.style.display = "none"
    // resultsDiv.style.display = "none"
    // startPage.style.display = "block"
    // scoreDiv.innerText = 0
    //---------------------------

}

btnBeginQuiz.addEventListener('click', (event) => {
    // categoryScore = 0
    // if (categoryPlayed[0] === 1 ||
    //     categoryPlayed[1] === 1 ||
    //     categoryPlayed[2] === 1 ||
    //     categoryPlayed[3] === 1) {
    //     //start over
    //     alert('You completed all the categories!')
    // }

    scoreArray[scoreCategoryId] = 0
    startPage.style.display = "none"
    qWrapper.style.display = "block"
    //load afresh the selected category

})

quitBtn.addEventListener("click", quitQuiz)
function quitQuiz() {
    //alert and then quit when confirmed
    let conf = confirm("Are you sure?")
    if (conf == true) {
        // startPage.style.display = "block"
        // qWrapper.style.display = "none"
        //reset question grid
        selectedChoice = ""
        categoryScore = 0
        scoreArray[scoreCategoryId] = 0  //reset score at quit ...
        resetMultiChoiceBg()
        firstPage()
    }

}

btnReturn.addEventListener("click", firstPage)


// when btnBeginQuiz clicked, hide firstpage, unhide qWrapper

// when quiz ends hide qWrapper, unhide results