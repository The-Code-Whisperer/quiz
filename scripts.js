const questions = [
    {
        question: "What is Garen's ultimate ability?",
        options: ["Demacian Justice", "Final Judgement", "Honor and Justice"],
        answer: "Demacian Justice"
    },
    {
        question: "Who did Katarina fail to assassinate on her first mission?",
        options: ["Jarvan Lightshield III", "Marcus Du Couteau", "Jericho Swain", "Officer Demetrius"],
        answer: "Officer Demetrius"
    },
    {
        question: "Who made this quiz?",
        options: ["God", "Faker", "Steven"],
        answer: "Steven"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.textContent == questions[question_number].answer) {
                alert(option.textContent + " is correct.");
                correct++;
            }
            else {
                alert(option.textContent + " is incorrect.");
            }
            question_number++;
            document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
            if (question_number >= questions.length) {
                document.querySelector("h1").innerHTML = "Quiz Complete";
                document.querySelector("h2").style.display = "none";
                document.querySelector("#options").style.display = "none";
            }
            else {
                load_question();
            }
        }
    });
}