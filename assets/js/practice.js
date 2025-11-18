let user_score=0;
let comp_score=0;

let msg=document.querySelector("#msg");
let userScore_para=document.querySelector("#user-score");
let compScore_para=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
const getcomp_choice=()=>{
    const options=["rock","paper","scissor"];
    const rando=Math.floor(Math.random()*3);
    return options[rando];
}
const drawGame=()=>{
    msg.innerText="Its a Draw! Try Again";
    msg.style.backgroundColor="gray";
}
const ShowWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        user_score++;
        userScore_para.innerText=user_score;
        msg.innerText=`Yay! You Won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compScore_para.innerText=comp_score;
        msg.innerText=`Oh no! You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=getcomp_choice();
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=false;
        if(userChoice==="rock" && compChoice==="scissor" ||
            userChoice==="scissor" && compChoice==="paper" ||
            userChoice==="paper" && compChoice==="rock"){
                userWin=true;
            }
        ShowWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
