let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const playGame = (userchoice) => {
        console.log("user-choice = ", userchoice)
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ( )=> {
        const userchoice = choice.getAttribute("id");
         console.log("choice was clicked", userchoice);
         playGame(userchoice);

    });
});