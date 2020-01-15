// asyncBreeds.js
/* 
Since readFile is an asynchronous function, it takes in a callback and returns undefined immediately3. After readFile returns undefined, breedDetailsFromFile has no other code to execute thereafter and also returns undefined
*/

const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
  //  console.log("In readFile's Callback: it has the data.");
    if (!error) {
      callback(data);
    } else {
      callback(data);
    }
  });
};
const printData = function (callbackData) {
  if (!callbackData) {
    return undefined;
  }
  console.log(callbackData);
 
  // return callbackData;
};


// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', printData);
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
// console.log(breedDetailsFromFile('Saphire', printData));
module.exports = breedDetailsFromFile;