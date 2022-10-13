const body = document.body;
// main screen buttons
const addGoalButton = document.getElementById("addGoalButton");
const addCardButton = document.getElementById("addCardButton");
const timer = document.getElementById("timer");
const latestUpdate = document.getElementById("latestUpdate");

const teamAGoalsCount = document.getElementById("teamAGoalsCount");
const teamBGoalsCount = document.getElementById("teamBGoalsCount");
const teamAYellowCardsCount = document.getElementById("teamAYellowCards");
const teamARedCardsCount = document.getElementById("teamARedCards");
const teamBYellowCardsCount = document.getElementById("teamBYellowCards");
const teamBRedCardsCount = document.getElementById("teamBRedCards");

const winnerDisplay = document.getElementById("winnerDisplay");
const endOfGameText = document.getElementById("endOfGameResult");

// const TIME_LIMIT = 5400;

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const FULL_DASH_ARRAY = 283
startTimer();


// form buttons - submit & close
const submitGoalButton = document.getElementById("submitGoalButton");
const submitCardButton = document.getElementById("submitCardButton");

// form input
const goalTeam = document.getElementById("goalTeamInput");
const goalPlayer = document.getElementById("goalPlayerInput");
const goalTime = document.getElementById("goalTimeInput");

const cardColor = document.getElementById("cardColorInput");
const cardTeam = document.getElementById("cardTeamInput");
const cardPlayer = document.getElementById("cardPlayerInput");
const cardTime = document.getElementById("cardTimeInput");

// paragraph elements
const timeLeftParagraph = document.getElementById("timeLeft");
const timerRemaining = document.getElementById("base-timer-path-remaining");

teamAGoals = [];
teamBGoals = [];

let teamAYellowCards = [];
let teamARedCards = [];
let teamBYellowCards = [];
let teamBRedCards = [];

teamAGoalsCount.textContent = "0";
teamBGoalsCount.textContent = "0";
//teamACardsCount.textContent = "0";
//teamBCardsCount.textContent = "0";

teamAYellowCardsCount.textContent = "0";
teamARedCardsCount.textContent = "0";
teamBYellowCardsCount.textContent = "0";
teamBRedCardsCount.textContent = "0";


// classes
class Goal{
    constructor(team, player, time){
        this.team = team;
        this.player = player;
        this.time = time;
    }

    addGoal(){
        if (this.team == "Team A"){
            teamAGoals.push(this);
        }

        else if (this.team == "Team B"){
            teamBGoals.push(this);
        }
        else {
            console.log("what's your problem?");
        }
    }  
}

class Card{
    constructor(color, team, player, time){
        this.color = color;
        this.team = team;
        this.player = player;
        this.time = time;
    }

    addCard(){
        if (this.team == "Team A" && this.color == "yellow"){
                teamAYellowCards.push(this);
            }
        else if (this.team == "Team A" && this.color == "red"){
                teamARedCards.push(this);
            }

        else if (this.team == "Team B" && this.color == "yellow"){
            teamBYellowCards.push(this);
        }

        else if (this.team == "Team B" && this.color == "red"){
            teamBRedCards.push(this);
            }   
        else{
            console.log("what's your problem?");
        }
    }
}

// functions

function endOfGameResult(){
    if (teamAGoals.length > teamBGoals.length){
        return("Team A wins");
    }
    else if (teamAGoals.length < teamBGoals.length){
        return("Team B wins");
    }
    else{
        return("Draw");
    }

}

function openAddGoalForm(){
    document.getElementById("addGoalForm").style.display = "block";
}

function closeAddGoalForm(){
    document.getElementById("addGoalForm").style.display = "none";
    teamAGoalsCount.textContent = teamAGoals.length.toString();
    teamBGoalsCount.textContent = teamBGoals.length.toString();
}

function openAddCardForm(){
    document.getElementById("addCardForm").style.display = "block";
}

function closeAddCardForm(){
    document.getElementById("addCardForm").style.display = "none";
//     console.log(teamAYellowCards.length.toString());
    teamAYellowCardsCount.textContent = teamAYellowCards.length.toString();
    teamARedCardsCount.textContent = teamARedCards.length.toString();
    teamBYellowCardsCount.textContent = teamBYellowCards.length.toString();
    teamBRedCardsCount.textContent = teamBRedCards.length.toString();
}

function openWinnerDisplay(){
    start();
    winnerDisplay.style.display = "block";
    //console.log(endOfGameResult());
}


// timer functions

function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);
    
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;
    
    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}

timeLeftParagraph.textContent  = formatTimeLeft(TIME_LIMIT);

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        //document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        timeLeftParagraph.textContent  = formatTimeLeft(timeLeft);
        if (timeLeft < 1){
            timerRemaining.style.color = "grey";  
        }
        if (timeLeft <= 0){
            if (timeLeft == 0){
                openWinnerDisplay();
            }
            timeLeftParagraph.textContent = "0:00";
            openWinnerDisplay();
            endOfGameText.textContent = endOfGameResult();
        }
       
        setCircleDasharray();
    }, 1000);
}

// // Divides time left by the defined time limit.
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
      
  // Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    //document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
    timerRemaining.setAttribute("stroke-dasharray", circleDasharray);
}

// event listeners

submitGoalButton.addEventListener("click", () => {
    newGoal = new Goal(goalTeam.value, goalPlayer.value, goalTime.value);
    newGoal.addGoal();
    console.log(`${goalTime.value} Player ${goalPlayer.value} from ${goalTeam.value} scored a goal.`);
    latestUpdate.textContent = `Latest Update: ${goalTime.value} Player ${goalPlayer.value} from ${goalTeam.value} scored a goal.`;
    closeAddGoalForm();
})

submitCardButton.addEventListener("click", () => {
    newCard = new Card(cardColor.value, cardTeam.value, cardPlayer.value, cardTime.value);
    newCard.addCard();
    console.log(`${cardTime.value} Player ${cardPlayer.value} from ${cardTeam.value} got a ${cardColor.value} card.`);
    latestUpdate.textContent = `Latest Update: ${cardTime.value} Player ${cardPlayer.value} from ${cardTeam.value} got a ${cardColor.value} card.`;
    closeAddCardForm();
})

// closeGoalButton.addEventListener("click", ()=> {
//     closeAddGoalForm();
// })

// closeCardButton.addEventListener("click", ()=>{
//     closeAddCardForm();
// })