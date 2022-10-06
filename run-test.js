const { spawn } = require("child_process");
const path = require('path');

let testName = process.argv[2];
let testPath = "";
if (!testName) {
  testName = path.basename(path.resolve());
  testPath =  `../${testName}`;
} else {
  testPath = `./${testName}`
}

const cmd = process.platform == 'win32' ? 'npm.cmd' : 'npm';


console.log("Running test case...");

spawn(cmd, [`run`, `-s`, `test`,  testPath], {stdio:'inherit'})
  .on('exit', function (error) {

    if(!error){
      console.log('Success!');
    } else {
        console.log(error);
    }
    }
  );