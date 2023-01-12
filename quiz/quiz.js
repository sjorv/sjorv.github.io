// Adapted from https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/


const num_options = 4

const questions = [{
    q: "Welcome to Paul's quiz game!\nPress any button to play.",
    a: [{ text: "yay", isCorrect: true },
        { text: "uwu", isCorrect: true },
        { text: "poggers", isCorrect: true },
        { text: "Unexpected item in bagging area. Remove this item before continuing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", isCorrect: true }
    ]
},
{
    q: "When is Paul's Birthday?",
    a: [{ text: "January 19th", isCorrect: false},
        { text: "February 30th", isCorrect: false},
        { text: "October 6th", isCorrect: false},
        { text: "December 11th", isCorrect: true}
    ]
},
{
    q: "What ice cream flavour does Paul like?",
    a: [{ text: "neapolitan", isCorrect: false },
        { text: "mocha", isCorrect: true },
        { text: "strawberry 🍓", isCorrect: false },
        { text: "wasabi", isCorrect: false }
    ]
},
{
    q: "Which of the following UTM courses has Paul never taken?",
    a: [{ text: "MAT309", isCorrect: false },
        { text: "CSC309", isCorrect: true },
        { text: "CSC363", isCorrect: false },
        { text: "CSC369", isCorrect: false }
    ]
},
{
    q: "Out of the following, which object is Paul most scared of?",
    a: [{ text: "Escalators", isCorrect: true },
        { text: "C++", isCorrect: false },
        { text: "Garlic", isCorrect: false },
        { text: "Shopping carts", isCorrect: false }
    ]
},
{
    q: "As a teenager, what did Paul spend too much money on?",
    a: [{ text: "magic cards", isCorrect: false },
        { text: "arcade gaming", isCorrect: false },
        { text: "his cat", isCorrect: false },
        { text: "mechanical keyboards", isCorrect: true }
    ]
},
{
    q: "what moosic like? owo (go to https://www.youtube.com/watch?v=<code>)",
    a: [{ text: "YEtvskb_npI", isCorrect: true },
        { text: "ekp9QKIuKnM", isCorrect: true },
        { text: "TCd6PfxOy0Y", isCorrect: true },
        { text: "eNnxdVICxbU", isCorrect: true }
    ]
},
{
    q: "If Paul could start a business, what would it be about?",
    a: [{ text: "custom mouse-keyboard hybrids", isCorrect: false },
        { text: "printing meme posters", isCorrect: false },
        { text: "garfield restaurant", isCorrect: true },
        { text: "blueberry farm theme park", isCorrect: false }
    ]
},
{
    q: "Which of the following has Paul never done in his life?",
    a: [{ text: "travel to another country", isCorrect: false },
        { text: "eat a watermelon", isCorrect: false },
        { text: "drive an automobile", isCorrect: true },
        { text: "fast for 24 hours", isCorrect: false }
    ]
},
{
    q: "Thanks for playing!",
    a: [{ text: "yay", isCorrect: false },
        { text: "free sushi juice", isCorrect: false },
        { text: "ayaya", isCorrect: false },
        { text: "E", isCorrect: false }
    ]
}
]

function correct_answer_audio() {
    var audio = null;
    let x = Math.random();
    if (x < 0.25) {
        audio = new Audio("audio/yeah_baby.wav");
    }
    else if (x < 0.5) {
        audio = new Audio("audio/yeah_yeah.wav");
    }
    else if (x < 0.75) {
        audio = new Audio("audio/ayaya.wav");
    }
    else {
        audio = new Audio("audio/triple.wav");
    }
    audio.play();
}

function incorrect_answer_audio() {
    var audio = null;
    let x = Math.random();
    if (x < 0.25) {
        audio = new Audio("audio/bruh.wav");
    }
    else if (x < 0.5) {
        audio = new Audio("audio/angry_cat.wav");
    }
    else if (x < 0.75) {
        audio = new Audio("audio/mogus_imposter.wav");
    }
    else {
        audio = new Audio("audio/oof.wav");
    }
    audio.play();
}

var question_id = 0

function iterate_question() {
    const id = question_id;
    if (question_id < questions.length) {
        question_id++;
    }

    // Setting the question text
    const question = document.getElementById("question");
    question.innerText = questions[id].q;

    // Getting the options
    const opts = document.getElementsByClassName("option");
    for (let j = 0; j < num_options; j++) {
        const opt = opts[j];
        opt.innerText = questions[id].a[j].text;
        opt.value = questions[id].a[j].isCorrect;
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function opt_click_handler(opt_number) {
    const opts = document.getElementsByClassName("option");
    const opt = opts[opt_number];
    if (opt.value == "true") {
        correct_answer_audio();
        opt.style.backgroundColor = "green";
        await delay(2000);
        opt.style = "option";
        iterate_question();
    }
    else {
        incorrect_answer_audio()
        opt.style.backgroundColor = "red";
        await delay(2000);
        opt.style = "option";
    }
}

iterate_question();

// Getting the options
const opts = document.getElementsByClassName("option");
for (let j = 0; j < num_options; j++) {
    const opt = opts[j];
    opt.addEventListener("click", () => {
        opt_click_handler(j);
    })
};