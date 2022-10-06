

const { spawn } = require("child_process");
const path = require('path');
const { readdirSync } = require('fs');
const prompt = require('prompt-sync')();

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

async function main() {

    console.log("---- Test Runner -----")

    // get all the directories
    let directories = getDirectories('./');
    // only shortlist those that begins with a q
    let questions = directories.filter(d => d[0] == 'q' || d[0] == 'r');

    for (let i = 0; i < questions.length; i++) {
        console.log((i + 1) + ".", questions[i]);
    }

    const selected = parseInt(prompt("Enter the number for the question that you want to test: "));
    if (selected-1 < questions.length) {
        const cmd = process.platform == 'win32' ? 'npm.cmd' : 'npm';

        let testPath = "./" + questions[selected-1]

        console.log("Running test case...");

        spawn(cmd, [`run`, `-s`, `test`, testPath], { stdio: 'inherit' })
            .on('exit', function (error) {

                if (!error) {
                    console.log('Success!');
                } else {
                    console.log(error);
                }
            }
            );
    } else {
        console.log("Not a valid question.");
    }
}
main();
