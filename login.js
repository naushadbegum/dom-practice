const prompt = require('prompt-sync')();
const axios = require('axios');
const fs = require('fs');
const config = require('./config.live')
const BASE_API_URL = config.BASE_API_URL;

async function main() {
    console.log("Setup Utility for Vue Questions");
    console.log("-------------------------------");
    let email = prompt("Enter your email address: ");
    let password = prompt("Please enter your password: ", {
        echo:"*"
    });
    try {
        let response = await axios.post(BASE_API_URL + "api/users/login", {
            email, password
        })
        let configTemplate = `
        let user = {
            'email': '${email}',
            'jwt': '${response.data.accessToken}'
        }
        
        module.exports = user;
                `
        fs.writeFileSync('user.js', configTemplate);
        console.log("Setup done! Please log in reguarly!");

    } catch (e) {
        console.log("Error logging in");
        if (e.statusCode == 401) {
            console.log("Wrong password or email");
        } else if (e.statusCode == 500) {
            console.log("Something went wrong at the server");
            console.log(e);
        } else {
            console.log(e);
        }
    }
}


main();

