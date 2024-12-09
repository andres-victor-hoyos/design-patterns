const TEAMS = 2;

const PLAYERS_IN_TEAM = 5;

const CoinSide = {
  HEAD:"HEAD",
  TAILS:"TAILS"
};

const CoinSideArray = Object.keys(CoinSide);

class Scenario {
  run() {
    const servereReferee = new ServereReferee();
    const match1 = new Match(servereReferee);
    match1.play();

    const permisiveReferee = new PermisiveReferee();
    const match2 = new Match(permisiveReferee);
    match2.play();
  }
}

class Match {
  constructor(referree) {
    this._referee = referree;
    this._coaches = [];
    for (let i = 0; i < TEAMS; i++) {
      this._coaches[i] = new Coach(i + 1, this._referee);
    }

    this._physiotherapists = [];
    for (let i = 0; i < TEAMS; i++) {
      this._physiotherapists[i] = new Physiotherapist(i + 1, this._referee);
    }

    this._captains = [];
    for (let i = 0; i < TEAMS; i++) {
      this._captains[i] = new Captain(i + 1, this._referee);
    }

    this._players = [];
    for (let i = 0; i < TEAMS; i++) {
      for (let j = 0; j < PLAYERS_IN_TEAM; j++) {
        this._players[i * PLAYERS_IN_TEAM + j] = new Player(
          i + 1,
          j + 1,
          this.referree
        );
      }
    }
  }

  generateRandomNumer(max){
    return Math.floor(Math.random()*max);
  }
  
  play() {
    this._referree.performCoinTos();
    this._players[this.generateRandomNumer(PLAYERS_IN_TEAM)].requestYellowCard();
    this._players[this.generateRandomNumer(PLAYERS_IN_TEAM)].requestRedCard();
    this._captains[this.generateRandomNumer(TEAMS)].requestPenalty();
    this._players[this.generateRandomNumer(PLAYERS_IN_TEAM)].requestMessage();
    this._coaches[this.generateRandomNumer(TEAMS)].requesSubstitution();
  }
}

class Referee {
  constructor(){
    if(new.target === 'Referee')
      throw new Error('Error: This class is abstract.');
  }

  set players(players){
    this._players = players;
  }

  set captains(captains){
    this._captains = captains;
  }

  set coaches(coaches){
    this._coaches = coaches;
  }

  performCoinToss(){
    console.log('Perform coin toss (referee)');
    const choosenCaptain = this.captains[this.generateRandomNumer()];
    console.log('Request captain in team' + choosenCaptain.TeamId + " o choose head or tails (referee)");
    const chooseCoinSide = choosenCaptain.chooseCoinSide();
    const finalCoinSide = CoinSideArray[this.generateRandomNumer(CoinSideArray.length, true)];
    let winnerCaptain = choosenCaptain;
    if(chooseCoinSide!=finalCoinSide){
      const indexWinner = (winnerCaptain.TeamId + 1) % this.captains.length;
      winnerCaptain = this._captains[indexWinner];
    }
    console.log("The Winner perform coin toss is " + winnerCaptain.TeamId);    
  }

  answerYesNoRequest(){

  }

  informTeamMembersAboutAnswer(){

  }

  answerSubstitutionRequest(){

  }

  generateRandomNumber(){
      throw new Error('generateRandomNumber is abstract.');
  }
}


class ServereReferee extends Referee {
  
}

class PermisiveReferee extends Referee {}

class Coach {
  constructor(teamid, referree) {
    this._teamid = teamid;
    this._referee = referree;
  }
}

class Physiotherapist {
  constructor(teamid, referree) {
    this._teamid = teamid;
    this._referee = referree;
  }
}

class Captain {
  constructor(teamid, referree) {
    this._teamid = teamid;
    this._referee = referree;
  }

  requestPenalty(){

  }

  chooseCoinSide(){

  }
}

class Player {
  constructor(playerid, teamid, referree) {
    this._teamid = teamid;
    this._referee = referree;
    this._playerid = playerid;
  }

  requestYellowCard(){
    console.log("Request red card (player" + th);
    this._referee.requestYellowCard();
  }

  requestRedCard(){

  }

  requestPenalty(){

  }

  requestMessage(){

  }
}

new Scenario().run();
