class Scenario {
  run() {
    const person = new Person();
    person.createPlan();
    person.modifyPlan();

    person.undoPlanModification();
    person.undoPlanModification();

    person.redoPlanModification();
    person.redoPlanModification();
    person.redoPlanModification();

    person.reviewAllPlanVersion();
  }
}

class Person {
  createPlan() {
    this._plan = new Plan("SummerPlan to Chamonix1");
    this._planArchive = new PlanArchive(this._plan);
    this._plan.addDetail('Day 1: Drive to Chamonix');
    this._plan.addDetail('Day 2: Visit Mer de Glace with Montenvers train');
    this._plan.addDetail('Day 3: Climb Petit Aiguille Verte');
    this._plan.addDetail('Day 4: Visit Aiguille du Midi with cable car');
    this._plan.addDetail('Day 5: Climb to Montblanc via Ar�te des Cosmiques');
    this._plan.addDetail('Day 6: Visit Gorges de la Diosaz');
    this._plan.addDetail('Day 7: Via Ferrata Curalla');
    this._plan.addDetail('Day 8: Visit Refuge du Nid D´Aigle with Tramway du Montblanc');
    this._plan.addParticipant('Alex');
    this._plan.addParticipant('Helen');
    this._planArchive.registry();
  }

  modifyPlan() {
    this._plan.removeDetails('Day 8: Visit Refuge du Nid D´Aigle with Tramway du Montblanc');
    this._planArchive.registry();
    this._plan.removeDetails("Day 7: Via Ferrata Curalla");
    this._planArchive.registry();
    this._plan.Title = "SummerPlan to Chamonix and Zermatt";
    this._planArchive.registry();
    this._plan.addDetail("Day 7: Drive to Zermatt");
    this._planArchive.registry();
    this._plan.addDetail("Day 8: Trek to montain");
    this._planArchive.registry();
    this._plan.addDetail("Day 9: Climb Matterhorn via Hornli");
    this._planArchive.registry();
    this._plan.addDetail("Day 10: Drive back to Chamonix");
    this._planArchive.registry();
    this._plan.addParticipant("Maria");
    this._planArchive.registry();
    this._plan.removeParticipant("Alex");
    this._planArchive.registry();
  }

  undoPlanModification() {
    this._planArchive.undo();
  }

  redoPlanModification() {
    this._planArchive.redo();
  }

  reviewAllPlanVersion(){

  }
}

class Plan {
  constructor(title, details) {
    this._title = title;
    this._participants = [];
    this._details = [];
    this._date = new Date();
  }

  createPlanVersion() {
    return new PlanVersion(this._title, this._participants, this._details);
  }

  addDetail(detail) {
    this._details.push(detail);
  }

  removeDetails(detail) {
    this._details = this._details.filter((v) => v != detail);
  }

  addParticipant(participant) {
    this._participants.push(participant);
  }

  removeParticipant(participant) {
    this._participants = this._participants.filter((v) => v != participant);
  }

  set Title(title) {
    this._title = title;
  }

  setPlanVersion(planversion) {
    this._title = planversion.Title;
    this._participants = planversion.Participants;
    this._details = planversion.Details;
  }

  toString(){
    return `${this._title} + ${this._participants} + ${this._details}`;
  }
}

class PlanArchive {
  constructor(plan) {
    this._plan = plan;
    this._planVersions = [];
    this._index = 0;
  }

  registry() {
    this._planVersions.unshift(this._plan.createPlanVersion());
    console.log("Registry : " + this._plan.toString());
  }

  undo() {
    this._plan.setPlanVersion(this._planVersions[this._index]);
    this._index++;
    console.log('Undo : ' +this._plan.toString());
  }

  redo() {
    this._plan.setPlanVersion(this._planVersions[this._index]);
    this._index--;
    console.log('Redo : ' + this._plan.toString());
  }
}

class PlanVersion {
  constructor(title, participants, details) {
    this._title = title;
    this._participants = [...participants];
    this._details = [...details];
  }

  get Title() {
    return this._title;
  }

  get Participants() {
    return this._participants;
  }

  get Details() {
    return this._details;
  }
}

new Scenario().run();