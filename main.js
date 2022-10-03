//Race Day project that will register runners and give instructions 
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 30;

//checks if runner is an adult and registered early
if (age > 18 && registeredEarly == true) {
  raceNumber += 1000;
}