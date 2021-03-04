// object array that holds -question - choices - answer  --- I guess I just gotta pull basic coding questions from somewhere online?? how many q's?  5? 6? 10000000???

// questions / answers taken from https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm dunno if this matters?

let quizQuestions = [
    {
        prompt: 'Which built-in method removes the last element from an array and returns that element?',

        choices: ['last()', 'get()', 'pop()', 'None of the above'],

        answer: 'pop()'

    },
    {
        prompt: 'Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?',

        choices: ['slice()', 'split()', 'substr()', 'search()'],

        answer: 'substr()'

    },

    {
        prompt: 'Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',

        choices: ['concat()', 'every()', 'filter()', 'some()'],

        answer: 'filter()'

    },
    {
        prompt: 'Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?',

        choices: ['unshift()', 'sort()', 'splice()', 'toString()'],

        answer: 'unshift()'

    },
    {
        prompt: 'What is the HTML tag under which one can write the JavaScript code?',

        choices: ['<javascript>', '<scripted>', '<script>', '<js>'],

        answer: '<script>'
    },

];

// need score counter
let score = 0;
//cycle through questions counter
let quizIndex = 0;

//need timer
let time =  document.querySelector('#time');
//timer countdown start
let timerStart = document.querySelector('#startQuiz');

let quizContainer = document.querySelector('#quizContainer');

let container = document.querySelector('#container'); //Holds everything





// 10 second penalizer for getting a wrong answer
let penalty = 10;
// allowed time per question???
let remainingTime = 10;

//placement holder
let ph = 0;

let newUl = document.createElement('ul');

timerStart.addEventListener('click', function() {

if (ph === 0){
    ph = setInterval(function() {
        remainingTime --;
        time.textContent = 'Time: ' + remainingTime;

        if (remainingTime <= 0){
            clearInterval(ph);
            finished();
            time.textContent = 'Out of Time!';
        }
    }, 1000);
}

show(quizIndex);

});


function show(quizIndex){

    quizContainer.innerHTML = '';
    newUl.innerHTML = '';

//looping through quiz questions array
for (let i = 0; i < quizQuestions.length; i++){
let userQ = quizQuestions[quizIndex].prompt;
let userChoice = quizQuestions[quizIndex].choices;
quizContainer.textContent = userQ;

}

userChoice.forEach(function (newItem) {
    let newListItem = document.createElement('li');

    newListItem.textContent = newListItem;
    quizContainer.appendChild(newUl);
    newUl.appendChild(newListItem);
    newListItem.addEventListener('click', (compare));
});

}

function compare(event){
    let element = event.target;

    if (element.matches('li')){

        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newDiv');

        // prompt when correct answer chosen
        if(element.textContent == quizQuestions[quizIndex].answer) {
            score++;
            newDiv.textContent = 'Correct!';
        } 
        // prompt when wrong answer chosen
         else {
            remainingTime = remainingTime - penalty;
            newDiv.textContent = 'Wrong Answer!';
        }
    }

    quizIndex ++;

    if (quizIndex >= quizQuestions.length){

        finished();

        newDiv.textContent = 'That concludes the quiz! ' + 'You answered, ' + score + '/' + quizQuestions.length + ' correctly!';
    }
     else {
        show(quizIndex);
    }
    quizContainer.appendChild(newDiv);

}

function finished(){

quizContainer.innerHTML = '';
time.innerHTML = '';


let newH1 = document.createElement('h1');
newH1.setAttribute('id', 'newH1');
newH1.textContent = 'Finished!';

quizContainer.appendChild(newH1);


let newP = document.createElement('p');
newP.setAttribute('id', 'newP');
quizContainer.appendChild(newP);


// takes remaing time and uses that as the users final score
if (remainingTime >= 0){
let playerScoreFromTime = remainingTime;
let newP2 = document.createElement('p');
clearInterval(ph);
newP.textContent = 'Your socre is: ' + playerScoreFromTime;
quizContainer.appendChild(newP2);
}

let newLabel = document.createElement('label');
newLabel.setAttribute('id', 'newLabel');
newLabel.textContent = 'Please enter your initials (Example - KCF) :';

quizContainer.appendChild(newLabel);



// handles input
let newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('id', 'initials');
newInput.textContent = '';

quizContainer.appendChild(newInput);



// handles submission
let submit = document.createElement('button');
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'submit');
submit.textContent = 'Submit';

quizContainer.appendChild(submit);


submit.addEventListener('click',function () {
let initials = newInput.value;

if (initials === null){

    alert('initials left NULL');

} else {
    let final = {
        initials: initials,
        score: playerScoreFromTime
    }
    let allHighScores = localStorage.getItem('allHighScores');
    if (allHighScores === null){

        allHighScores = [];
    } else {
        allHighScores = JSON.parse(allHighScores);
    }
    allHighScores.push(final);
    let newHighScore = JSON.stringify(allHighScores);
    localStorage.setItem ('allHighScores', newHighScore);
window.location.replace('.highscores.html');
}

});


}





