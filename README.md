# JavaScript DOM Execrises

## 1. Clone this template

Click on the `Use this Template` green button to clone a copy of this repoistory on your own Github account.

## 2. Open the template in `Gitpod` 

This will install the prerequistes needed. If there are issues, please see the `Troubleshooting` section below.

### If using Visual Studio Code:
Install all dependencies with `yarn install`

## 3. Login
In the directory with this `readme.md` file (or now as referred ), type in 

```
node login.js
```

Enter your given Trent Global email address and password to log in.  You have to relogin once every few days.


## 4. Doing the questions

Each question is in a folder by itself. The question description and what's expected
will be in the `readme.md` file. Each question will have an `index.html` file
and `script.js` file. Follow the instructions carefully in the `readme.md` file. 
**Do not change** the `script.js` file unnecessarily (there are special code at the
end of the `script.js` file, don't touch it!)

### Testing your output
In the terminal, type:

```python3 - m http.server```

And click on `Ports` (next to your Terminal) in the bottom, and select the globe icon. This will allow you to select the 
HTML file that you want to run.

## 5. Testing the Solutions
In the terminal, type in

```node test-runner.js```

And then select the question that you want to test.

### Important for Windows Users
If you are running the test cases in Windows, ignore the `ELIFECYCLE` error message if your test case does not pass.

Also ignore the error message `Jest did not exit one second after the test run has completed.`

# 6. Getting new questions

To get new questions, open a **NEW** terminal and type in the terminal:

```
git fetch upstream
git merge upstream/main
```

If there are conflicts in `script.js` files, just use your original copies.
