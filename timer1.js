let alarmArray = process.argv.slice(2).sort((a, b) => a - b);
let alarmArrayNums = alarmArray.map(num => parseInt(num, 10));

const alarm = function(alarmList) {
  //Implement timer that will return output after specified amount of time has passed
  //Loop through array for values of element
  for (let time of alarmList) {
    //If time is a number and greater than 0
    if (typeof time === "number" && time > 0) {
    //Timer set to seconds, timer resets every loop
      let timer = time * 1000;
      setTimeout(() => {
        process.stdout.write(".");
      }, timer);
    }
  }
};

alarm(alarmArrayNums);
