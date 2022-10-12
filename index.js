const body = document.body;
// main screen buttons
const addGoalButton = document.getElementById("addGoalButton");
const addCardButton = document.getElementById("addCardButton");
const timer = document.getElementById("timer");
const TIME_LIMIT = 5400;
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
        console.log("Winner: Team A");
    }
    else if (teamAGoals.length , teamBGoals.length){
        console.log("Winner: Team B");
    }
    else{
        console.log("Draw");
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

function startTimer() {
    timerInterval = setInterval(() => {
      
      // The amount of time passed increments by one
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      
      // The time left label is updated
      document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    }, 1000);
}


// event listeners

submitGoalButton.addEventListener("click", () => {
    newGoal = new Goal(goalTeam.value, goalPlayer.value, goalTime.value);
    newGoal.addGoal();
})

submitCardButton.addEventListener("click", () => {
    newCard = Card(cardColor, cardTeam, cardPlayer, cardTime);
    newCard.addCard();
})

closeGoalButton.addEventListener("click", ()=> {
    closeAddGoalForm();
})

closeCardButton.addEventListener("click", ()=>{
    closeAddCardForm();
})