const body = document.body;
// main screen buttons
const addGoalButton = document.getElementById("addGoalButton");
const addCardButton = document.getElementById("addCardButton");

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