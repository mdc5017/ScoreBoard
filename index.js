const body = document.body;
// main screen buttons
const addGoalButton = document.getElementById("addGoalButton");
const addCardButton = document.getElementById("addCardButton");
const timer = document.getElementById("timer");
const winnerDisplay = document.getElementById("winnerDisplay");
const endOfGameText = document.getElementById("endOfGameResult");

// const TIME_LIMIT = 5400;

const TIME_LIMIT = 3;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const FULL_DASH_ARRAY = 283
startTimer();


// form buttons - submit & close
const submitGoalButton = document.getElementById("submitGoalButton");
const submitCardButton = document.getElementById("submitCardButton");
const closeGoalButton = document.getElementById("closeGoalButton");
const closeCardButton = document.getElementById("closeCardButton");

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

teamACards = [];
teamBCards = [];

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

        else{
            teamBGoals.push(this);
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
        if (this.team == "TeamA"){
            teamACards.push(this);
        }

        else{
            teamBCards.push(this);
        }
    }
}

// functions

function endOfGameResult(){
    if (teamAGoals.length > teamBGoals.length){
        return("Winner: Team A");
    }
    else if (teamAGoals.length , teamBGoals.length){
        return("Winner: Team B");
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
}

function openAddCardForm(){
    document.getElementById("addCardForm").style.display = "block";
}

function closeAddCardForm(){
    document.getElementById("addCardForm").style.display = "none";
}

function openWinnerDisplay(){
    winnerDisplay.style.display = "block";
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
            endOfGameText.textContent(endOfGameResult());
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
})

submitCardButton.addEventListener("click", () => {
    newCard = new Card(cardColor, cardTeam, cardPlayer, cardTime);
    newCard.addCard();
})

closeGoalButton.addEventListener("click", ()=> {
    closeAddGoalForm();
})

closeCardButton.addEventListener("click", ()=>{
    closeAddCardForm();
})