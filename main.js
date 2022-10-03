//Race Day project that will give instructions to registered runners
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 30;

//checks if runner is an adult and registered early
if (age > 18 && registeredEarly == true) {
  raceNumber += 1000;
}

//checks conditions of runner to see when they will race
if (age > 18 && registeredEarly) {
  console.log(`The race will begin at 09:30 am for runner: ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
  console.log(`The race will begin at 11:00 am for runner: ${raceNumber}`);
} else if (age < 18) {
  console.log(`The race will begin at 12:30 pm for runner: ${raceNumber}`);
} else {
  console.log("Please see registration desk.");
}
