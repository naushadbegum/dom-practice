const dotenv = require('dotenv').config();
const STAFF_EMAIL = process.env.STAFF_EMAIL;
const STAFF_PASSWORD = process.env.STAFF_PASSWORD;
const axios = require('axios');
const config = require('./config.live');


const { readdirSync } = require('fs')

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

async function main() {
    // get all the directories
    let directories = getDirectories('./');
    // only shortlist those that begins with a q
    let questions = directories.filter(d => d[0] == 'q' || d[0] =='r');

    // login to get JWT
    let userResponse = await axios.post(config.BASE_API_URL + "api/users/login", {
        'email':STAFF_EMAIL, 'password':STAFF_PASSWORD
    })

    let token = userResponse.data.accessToken;
  
    const response = await axios.put(config.BASE_API_URL + 'api/tutorials/' + config.tutorialCode, {
        'title': 'JavaScript DOM Labs',
        'tutorial_code': 'js-dom-labs',
        'module': 'HTML/CSS/JavaScript',
        'order': 1,
        'question_codes': questions
    }, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    })
    console.log(response.data);
}
main();
