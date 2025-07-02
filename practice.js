let user_score=0;
let comp_score=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const getCompChoice=()=>{
    const options = ["rock", "paper", "scissor"];
    const rando = Math.floor(Math.random() * 3);
    return options[rando];
};
const drawGame=()=>{
    msg.innerText="Its a Draw!";
    msg.style.backgroundColor="gray";
};
const ShowWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        userScorePara.innerText=user_score;
        msg.innerText=`You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        

    }
    else{
        comp_score++;
        compScorePara.innerText=comp_score;
        msg.innerText=`Comp win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";

    }
};
const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ) {
            userWin = true;
        }

        ShowWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});