let usrscr  = 0;
let compscr = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#GameUpdate");
const usrscore = document.querySelector ("#you-score");
const comscore = document.querySelector("#Comp-score");
let Name = "";
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const usrchoice=choice.getAttribute("Id")
        console.log("choice was clicked",usrchoice);
        playgame(usrchoice);
        usrscore.innerText=`${usrscr}`;
        comscore.innerText=`${compscr}`;
        if(usrscr > compscr){
            usrscore.style.color = "green";
            comscore.style.color = "red";
        }else if(usrscr === compscr){
            usrscore.style.color = "blue";
            comscore.style.color = "blue";
        }else if(usrscr < compscr){
            usrscore.style.color = "red";
            comscore.style.color = "green";
        }
    });
});

Compchoice =() =>{
    a = ["Rock","Paper","Scissors"]
    return a[Math.floor(Math.random() * 3)];
}
draw=()=>{
    console.log("Draw Game....");
    msg.innerText=`It is a tie.`;
    msg.style.color = "blue";
}
UserWin=()=>{
    console.log("You Winn");
    msg.innerText=`You Won!`;
    msg.style.color = "green";
    usrscr++;
}
CompWin=()=>{
    console.log("Comp Win");
    msg.innerText=`You Lost`;
    msg.style.color = "red";
    compscr++;
}
playgame=(usrchoice)=>{
    const compchoice = Compchoice();
    console.log("choice was clicked",compchoice);
    document.querySelector("#usr-slctr p").innerText =`${usrchoice}` ;
    document.querySelector("#comp-slctr p").innerText = `${compchoice}`;
    if (usrchoice === compchoice){
        draw();
    }else{
        if (usrchoice === "Rock"){
            if(compchoice === "Paper"){
                CompWin();
            }
            else if(compchoice  === "Scissors"){
                UserWin();
            }
        }else if(usrchoice === "Paper"){
            if(compchoice == "Rock"){
                UserWin();
            }else if(compchoice === "Scissors"){
                CompWin();
            }
        }else if(usrchoice === "Scissors"){
            if(compchoice === "Paper"){
                UserWin();
            }else if(compchoice === "Rock"){
                CompWin();
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-game");

    startButton.addEventListener("click", () => {
        const userName = document.getElementById("username-input").value.trim(); 
       
    if (userName) {
        const userScoreHeader = document.querySelector('.scores h1'); 
        userScoreHeader.textContent = userName;
        document.querySelector("#usr-slctr h1").innerText  = userName;
        document.querySelector('.user').style.display = 'none'; 
        document.querySelector('.choices').style.display = 'flex'; 
        document.querySelector('.score').style.display = 'flex';
        document.querySelector('.score-board').style.display = 'block';
        document.querySelector('.score-head').style.display = 'block'; 
        document.querySelector('.selectors').style.display = 'flex';

    } else {
        alert("You must enter a name to play.");
    }
});
});
