function QuizItem(question, variants, answer, enabled, replied, selectionOfUser) {
    this.question = question;
    this.variants = variants;
    this.answer = answer;
    this.enabled = enabled;
    this.replied = replied;
    this.selectionOfUser = selectionOfUser;
}

var quizQuestions = [];
quizQuestions[0] = new QuizItem("How many Sustainable Development Goals (SDGs) have been agreed to, by all the world's nations, as part of the 2030 Agenda?",
                        ["10",
                         "8",
                         "17",
                         "16, plus a few statements about implementation that are not actually a Goal"],
                         2,
                         false,
                         false,
                         undefined);

quizQuestions[1] = new QuizItem("Each SDG is supported by a set of Targets - specific objectives that are associated with that Goal. How many Targets are there in total?",
                        ["99",
                         "1016",
                         "169",
                         "50"],
                         2,
                         false,
                         false,
                         undefined);

quizQuestions[2] = new QuizItem("Goal 1 is about poverty. What is the aim of this Goal?",
                        ["Reduce poverty by 75% by 2030",
                         "End poverty in all its forms everywhere",
                         "Cut poverty in half by 2030",
                         "Help each nation make progress on reducing poverty"],
                         1,
                         false,
                         false,
                        undefined);

quizQuestions[3] = new QuizItem("Goal 17 is about strengthening the 'means of implementation' and revitalizing the 'Global Partnership' for realizing all the other Goals. Which of the following is not part of Goal 17?",
                        ["Enhancing trade, especially to help developing countries increase their exports and grow their economies",
                        "Creating international sports tournaments and festivals to promote the Goals",
                        "Helping developing countries build the capacities they need in areas such as technology, public policy, and data for reporting on progress",
                        "Mobilizing the financial resources necessary to achieve the Goals"],
                        1,
                        false,
                        false,
                        undefined);

quizQuestions[4] = new QuizItem("In the 2030 Agenda, Sustainable Development Goal #13, on climate change, has an ' * ' (asterisk) after it. Why?",
                        ["Because the negotiators were unable to come to an agreement on a climate change Goal.",
                        "Because addressing climate change is more important than all the other Goals.",
                        "Because the Goal on climate change is constantly shifting.",
                        "Because the UN Framework Convention on Climate Change (which is meeting in Paris in late 2015) is the forum where more detailed decisions on climate will be made."],
                        3,
                        false,
                        false,
                        undefined);
quizQuestions[5] = new QuizItem("Which of the following is not part of the Sustainable Development Goals?",
                        ["Promotion of decent jobs for all",
                        "Availability of water and sanitation for all",
                        "Access to sustainable energy for all",
                        "Provision of internet services for all"],
                        3,
                        false,
                        false,
                        undefined);
quizQuestions[6] = new QuizItem("Equality issues are specifically mentioned in how many of the Sustainable Development Goals (not including the targets)?",
                        ["In one of them: Goal 16 on promoting peaceful and just societies for all",
                        "In three of them: Goal 4 on education, Goal 5 on gender, and Goal 10 on reducing inequality within and among countries",
                        "In four of them: Goal 2 on hunger, Goal 7 on energy, Goal 8 on economic growth and jobs, and Goal 14 on preserving the oceans and seas",
                        "In two of them: Goal 6 on water, and Goal 12 on sustainable production and consumption"],
                        1,
                        false,
                        false,
                        undefined);

quizQuestions[7] = new QuizItem("Which of the following is not part of Goal 15, on ecosystems?",
                        ["Halt the use of biotechnology and genetic engineering",
                        "Halt biodiversity loss",
                        "Halt and reverse land degradation",
                        "Use ecosystems sustainably while protecting and restoring them"],
                        0,
                        false,
                        false,
                        undefined);

quizQuestions[8] = new QuizItem("Which of the following is not true about the SDGs?",
                        ["They explicitly promote innovation",
                        "They encourage the promotion of health, well-being, and education for all, at all ages",
                        "They include the development of sustainable cities, infrastructure, and industry",
                        "They are a legally binding international treaty that all nations are required to follow"],
                        3,
                        false,
                        false,
                        undefined);
quizQuestions[9] = new QuizItem("What can individuals do to help realize the achievement of the Sustainable Development Goals?",
                        ["Create projects and partnerships of their own and participate in existing initiatives to help achieve one or more of the goals",
                        "Use their positions in society - as teachers, decision-makers, consumers, role-models, and ordinary citizens - to voice support for the Goals, to make decisions that advance the Goals, and to take actions help to implement the Goals",
                        "Hold their governments and the private sector accountable and support reputable civil society organizations",
                        "All of the Above"],
                        3,
                        false,
                        false,
                        undefined);




// pTag.innerHTML = test1.question;
// console.log(quizQuestions[0]);
var currentIndex = 0, numOfAnswered = 0;
var currentQuestion = quizQuestions[currentIndex];
//second ulTag
var ulTag = document.getElementsByTagName('ul')[1];
var liTags = ulTag.getElementsByTagName('li');
/*
    this function inserts the current question into the layout
    of the page: p tag which is a question and ul tag meaning
    an options
*/
function showCurrentQuestion() {
    var headerOfDropdow = document.getElementsByClassName('wrapper')[0];
    //parse into integer, because it interpretes it as a string
    var numQuestion = parseInt(currentIndex)+1;
    headerOfDropdow.getElementsByTagName('span')[0].innerHTML = numQuestion;
    var pTag = document.getElementsByTagName('p')[0];
    // console.log(liTags);
    var ulTag = document.getElementsByTagName('ul')[1];
    var liTags = ulTag.getElementsByTagName('li');
    pTag.innerHTML = currentQuestion.question;
    for (var i=0; i < liTags.length; i++) {
        //in case the number of variants is less than 4 (e.g. when it's
        // undefined) disable li tag
        if (currentQuestion.variants[i] == undefined) {
            console.log(currentQuestion.variants[i]);
            liTags[i].className = "doNotDisplay";
        } else {
            console.log(currentQuestion.variants[i]);
            liTags[i].innerHTML = currentQuestion.variants[i];//assign question
            liTags[i].className = "";
        }
    }
};

enableLiOnClickEvents();
showCurrentQuestion();

//when a variant is selected it becomes highlighted
function changeLiStyle() {
    var selectedItem = document.getElementsByClassName('selected')[0];
    //disable previously selected item and enable the clicked one
    if (selectedItem) selectedItem.className = "";
    this.className = "selected";
}


//self-invoking function to find all li tags
// and assing them text from the object
// and assign event listeners
function enableLiOnClickEvents() {
    for (var i=0; i < liTags.length; i++) {
        console.log(liTags[i]);
        liTags[i].onclick = changeLiStyle;
    }
};

var button = document.getElementsByClassName('submit')[0];
button.onclick = submitAndCheckAnswer;

function submitAndCheckAnswer() {
    var selectedItem = document.getElementsByClassName('selected')[0];
/*  console.log(selectedItem.innerHTML);*/
 if (selectedItem == undefined)
        alert("There is no variant selected! Please select any!");
else {
   currentQuestion.enabled = true;
    if (selectedItem.innerHTML == currentQuestion.variants[currentQuestion.answer]) {

        console.log("Correct "+ currentQuestion.variants.indexOf(selectedItem.innerHTML));
        changeTheLayoutAccordingTheResult(selectedItem,"correct", true);
        checkIfTheLastQuestion(this);//sending button obj as a parameter
        numOfAnswered++;

    } else {

        console.log("Wrong!");
        changeTheLayoutAccordingTheResult(selectedItem,"wrong", false);
        checkIfTheLastQuestion(this);
        liTags[currentQuestion.answer].className = "correct";
    }
}
}

function changeTheLayoutAccordingTheResult(selectedItem,result,replied) {
    console.log(result);
    currentQuestion.replied = replied;
    //the index corresponding to the selection of user is selectiOfUser
    currentQuestion.selectionOfUser = currentQuestion.variants.indexOf(selectedItem.innerHTML);
    selectedItem.className=result;//changing color of selected item by changing className
    disableLiOnClickEvents();//cannot click on the other litags anymore
}

//if the current question is the last one then change button style
//and onclick event(function)
//to finalize, otherwise continue to the next question
function checkIfTheLastQuestion(button) {
    console.log("currentIndex: ",currentIndex);
    if (currentIndex == quizQuestions.length-1) {
            console.log(currentIndex +" " + quizQuestions.length);
            button.className = "finalize";//change the color
            button.innerHTML = "Finalize";
            button.onclick = finalize;//change event listener
        } else {
            console.log(currentIndex +"fdsf " + quizQuestions.length);
            currentIndex++;
            button.innerHTML = "Next Question";
            button.className = "next";
            button.onclick = goToNextQuestion;
        }
}

function disableLiOnClickEvents() {
    for (var i=0; i < liTags.length; i++) {
        liTags[i].onclick = "";
    }
}

function goToNextQuestion() {
    // if (currentIndex == quizQuestions.length) {
    //  finalize();
    //  return alert("Quiz is over. Your result: " + numOfAnswered);
    // }
    //changes the current question index before moving to the next one
    currentQuestion = quizQuestions[currentIndex];
    //change button's label and event handler
    this.innerHTML = "Submit";
    this.onclick = submitAndCheckAnswer;
    this.className = "submit";
    showCurrentQuestion();
    enableLiOnClickEvents();
}

function cleanUpTheLayout() {
    var mainDiv = document.getElementsByClassName('main')[0];
    // deleting all child nodes
    while (mainDiv.hasChildNodes()) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
    console.log("clean UPP!!");
}

function finalize() {
    cleanUpTheLayout();
    var mainDiv = document.getElementsByClassName('main')[0];
    var tHeader = document.createElement("p");
    tHeader.appendChild(document.createTextNode("Review your answers"));
    tHeader.setAttribute("class","pAboveTable");
    mainDiv.appendChild(tHeader);
    var table = document.createElement("table");
    // table.border='1px';
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var heading = ["Questions", "Your results", "Correct option"];

    for (var i = 0 ; i < heading.length ; i++) {
        var th = document.createElement("th");
        th.width = '200px';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
        console.log(tr);
    }

    for (var i = 0 ; i < quizQuestions.length; i++) {

            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.appendChild(document.createTextNode("Question " + (i+1)));
            td.setAttribute("class","questionCol");
            tr.appendChild(td);
            var td = document.createElement('td');

            var answer = quizQuestions[i].replied ? (
                td.className = "correctCol",
                "Correct"
                ) : (
                td.className = "wrongCol",
                "Incorrect"
                );

            td.appendChild(document.createTextNode(answer));
            tr.appendChild(td);
            var td = document.createElement('td');
            if (!quizQuestions[i].replied) {
                var correctAns = quizQuestions[i].variants[quizQuestions[i].answer];
                td.appendChild(document.createTextNode(correctAns));
                td.setAttribute("class","correctCol");
            }
            tr.appendChild(td);

            table.appendChild(tr);

    }

    mainDiv.appendChild(table);
    var trAll = document.getElementsByTagName("tr");
    console.log(trAll);
    for (var i = 1; i < trAll.length; i++) {
        trAll[i].onclick = returnToQuestion;
        console.log("Assigned!");
    }
    // var head2 = document.createElement("th");
    // head2.appendChild(document.createTextNode("Your Result"));
    // tr.appendChild(head2);
    // document.body.appendChild(table);
}
//dynamicaally creates the question layout when clicked on any of the questions in the result table
function createQuestionLayout() {
            var mainDiv = document.getElementsByClassName('main')[0];
            var wrapperDiv = document.createElement('div');
            wrapperDiv.className = "wrapper";
            wrapperDiv.onclick = "showDropdown";
            mainDiv.appendChild(wrapperDiv);
            for (var j = 0 ; j < 2; j++) {
                var span = document.createElement('span');
                wrapperDiv.appendChild(span);
            }
            span.innerHTML = "/ "+quizQuestions.length;
            var ulDdown = document.createElement('ul');
            ulDdown.className = "dropdown";
            mainDiv.appendChild(ulDdown);
            var pTag = document.createElement('p');
            pTag.className = "question";
            var ulTag = document.createElement('ul');
            mainDiv.appendChild(pTag);
            mainDiv.appendChild(ulTag);
            for (var i = 0 ; i < 4; i++) {
                var liTag = document.createElement('li');
                ulTag.appendChild(liTag);
                var liTag1 = document.createElement('li');
                ulDdown.appendChild(liTag1);
            }
            var button = document.createElement('button');
            button.innerHTML = "Back";
            button.className = "back";
      //goes back to the table layout when clicked
            button.onclick = finalize;
            mainDiv.appendChild(button);
}

function returnToQuestion() {
    console.log(this);
    var questionTitle = this.getElementsByClassName("questionCol")[0].innerHTML;
    var questionNum = questionTitle[questionTitle.length -1];


            cleanUpTheLayout();
            createQuestionLayout();
            currentQuestion = quizQuestions[questionNum -1];
            // change currentIndex in orderto correctly display
            // it on the new layout
            currentIndex = questionNum-1;
            showCurrentQuestion();
            var correctLiNum = quizQuestions[questionNum-1].answer;
  if (quizQuestions[questionNum-1].enabled) {
        if (quizQuestions[questionNum-1].replied) {

            document.getElementsByTagName("li")[correctLiNum+4].className="correct";
        } else {
            var selectedLiNum = quizQuestions[questionNum-1].selectionOfUser;
            document.getElementsByTagName("li")[selectedLiNum+4].className="wrong";
            document.getElementsByTagName("li")[correctLiNum+4].className="correct";

     }
}
}

function showDropdown() {
    var dropdown = document.getElementsByClassName("dropdown")[0];
     var dropdownItems = dropdown.getElementsByTagName("li");
     console.log(dropdownItems);
     for (var i = 0 ; i < dropdownItems.length; i++)
        dropdownItems[i].onclick = clickOnAnyQuestionFromDropdown;
    var display = dropdown.style.display;
    if (display=="") {
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display ="";
    };
}

function hideDropdown() {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    var dropdownItems = dropdown.getElementsByTagName("li");
    var display = dropdown.style.display;
    if (display=="") {
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display ="";
    };
}

/*
the number of action taken when any of the ul items is clicked on:
getting the number of question and show the current question
*/
function clickOnAnyQuestionFromDropdown() {
    console.log(this);
    var questionNum = this.getElementsByTagName('span')[0].innerHTML;
    currentQuestion = quizQuestions[questionNum-1];
    hideDropdown();
    currentIndex = questionNum-1;
    showCurrentQuestion();
}
// function enableLiOnClickEvents() {
//  for (var i=0; i < liTags.length; i++) {
//      // console.log(liTags[i]);
//      liTags[i].onclick = "";
//  }
// }
