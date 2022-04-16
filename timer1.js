
const inputTimer = process.argv.slice(2);


const setTimer = function (inputTimer) {

  for (let i = 0; i < inputTimer.length; i++){
    if (inputTimer[i] !== NaN && inputTimer[i] > 0) {
      setTimeout( () => {

        process.stdout.write('\x07');

      },inputTimer[i] * 1000);
    }
  }
  

}


setTimer(inputTimer);