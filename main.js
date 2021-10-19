let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`${raceNumber} 
will race at 9.30 am`);
} else if (age > 18 && !registeredEarly) {
  console.log(`${raceNumber} will race at 11.00`);
} else if (age < 18) {
  console.log(`${raceNumber} will race at 12.30`);
} else {
  console.log(`${raceNumber} go to registration desk`);
}
