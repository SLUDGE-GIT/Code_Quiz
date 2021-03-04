// object array that holds -question - choices - answer  --- I guess I just gotta pull basic coding questions from somewhere online?? how many q's?  5? 6? 10000000???

// questions / answers taken from https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm dunno if this matters?

let questions = [
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
let questionCycle = 0;

//need timer
let timer 
//timer countdown
// 10 second penalizer for getting a wrong answer
// allowed time per question???

// prompt when wrong answer chosen