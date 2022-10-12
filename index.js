const body = document.body;
const addGoalButton = document.getElementById("addGoalButton");
const addCardButton = document.getElementById("addCardButton");
const submitGoalButton = document.getElementById("submitGoalButton");
const submitCardButton = document.getElementById("submitCardButton");

const goalTeam = document.getElementById("teamInput");
const goalPlayer = document.getElementById("playerInput");
const goalTime = document.getElementById("timeInput");

teamAGoals = [];
teamBGoals = [];

teamACards = [];
teamBCards = [];


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


submitGoalButton.addEventListener("click", () => {
    console.log(goalTeam.value);
    console.log(goalPlayer.value);
    console.log(goalTime.value);


    newGoal = new Goal(goalTeam.value, goalPlayer.value, goalTime.value);
    newGoal.addGoal();
    console.log(teamAGoals)
})

submitCardButton.addEventListener("click", () => {
    cardColor = document.getElementById("addCardForm").elements.namedItem("color").value;
    cardTeam = document.getElementById("addCardForm").elements.namedItem("team").value;
    cardPlayer = document.getElementById("addCardForm").elements.namedItem("player").value;
    cardTime = document.getElementById("addCardForm").elements.namedItem("time").value;

    newCard = Card(cardColor, cardTeam, cardPlayer, cardTime);
    newCard.addCard();
})