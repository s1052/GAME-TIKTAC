let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const messege = document.querySelector("#messege");

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const gencomputerchoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option [randIdx];
};

const drawGame = () => {
    messege.innerText = "Game was draw . play again!!";
    messege.style.backgroundColor ="#081b31";
};

const showwinner = (userwin,userchoice, computerchoice) => {
    if(userwin){
        userscore++; 
        userscorepara.innerText = userscore;
        messege.innerText = 'you win!your {userchoice} beats {computerchoice}';
        messege.style.backgroundColor ="green";
    } else {
        computerscore++;
        computerscorepara.innerText = computerscore;
        messege.innerText = 'you lose! {computerchoice} beats your {userchoice}';
        messege.style.backgroundColor ="red";
    }

}
const playGame = (userchoice) => {
        //Generate computer choice....
        const computerchoice = gencomputerchoice();
        
        if (userchoice === computerchoice){
            //Draw Game
            drawGame();
        } else{
            let userwin = true;
            if (userchoice === "rock"){
                //scissors, papers
               userwin= computerchoice === "paper" ? false : true;
            } else if(userchoice === "paper"){
                //rock, scissors
                userwin = computerchoice === "scissors" ? false : true;
            } else {
                //rock, paper
              userwin =  computerchoice === "rock" ? false : true;
            }
            showwinner(userwin, userchoice, computerchoice);
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ( )=> {
        const userchoice = choice.getAttribute("id");
         console.log("choice was clicked", userchoice);
         playGame(userchoice);

    });
});