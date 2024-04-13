let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userNum = document.querySelector("#user");
const compNum = document.querySelector("#comp");

const genCompChoice = () => {
    let opt = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * 3);
    return opt[num];
};

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userNum.innerText = userScore;
    } else {
        msg.innerText = `You Loose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compNum.innerText = compScore;
    }

};
const playGame = (userChoice) => {
    //computer choice
    const comChoice = genCompChoice();
    //draw
    if (userChoice === comChoice) {
        msg.style.backgroundColor = "#070F2B";
        msg.innerText = `Draw! You both choose ${userChoice}`;
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);

        if (userNum.innerText == 5) {
            alert("Game Over! You Wins");
            userScore = 0;
            compScore = 0;
            userNum.innerHTML = userScore;
            compNum.innerHTML = compScore;
            msg.innerText = "Play your move";
            msg.style.backgroundColor = "#070F2B";
        }
        if (compNum.innerText == 5) {
            alert("Game Over! Computer Wins");
            userScore = 0;
            compScore = 0;
            userNum.innerHTML = userScore;
            compNum.innerHTML = compScore;
            msg.innerText = "Play your move";
            msg.style.backgroundColor = "#070F2B";

        }
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        console.log("clicked");
    })
})