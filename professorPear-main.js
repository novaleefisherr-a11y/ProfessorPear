
var presCredentials = [
  {
    username: "ahacker",
    password: "password123"
  }
]

var goalCredentials = [
  {
    username:"rpear",
    password: "jackson2006"
  }
]

var answersGoal = [
  {
    answerOne: "jackson",
    answerTwo: "buffalo",
    answerThree: "garcia"
  }
]

var answersUser = [
  {
    answerOne: "dog",
    answerTwo: "erie",
    answerThree: "hacker"
  }
]

function getUserInfo() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  for (var i=0; i < presCredentials.length; i++) {
    if (username.toLowerCase() == presCredentials[i].username && password == presCredentials[i].password) {
      location.replace("./pres-login-page.html")
      return
    }

    if (username.toLowerCase() == goalCredentials[i].username && password == goalCredentials[i].password) {
      location.replace("./outgoingEmails.html")
      return
    }

  }
  alert("Incorrect username or password");
}

function goBack() {
  location.replace("./index.html")
}

function instagram() {
  location.replace("./instagram.html")
}

function getUsername() {
  var username = document.getElementById('username').value

  for (var i=0; i < presCredentials.length; i++) {
    if (username.toLowerCase() == presCredentials[i].username) {
      location.replace("./security-question-ahacker.html")
      return
    }

    if (username.toLowerCase() == goalCredentials[i].username) {
      location.replace("./security-question-rpear.html")
      return
    }

  }
  alert("Incorrect username.");
}

function getAnswerGoal() {
  var answers = document.getElementById('answers').value

  for (var i=0; i < answersGoal.length; i++) {
    if (answers.toLowerCase() == answersGoal[i].answerOne || answers.toLowerCase() == answersGoal[i].answerTwo || answers.toLowerCase() == answersGoal[i].answerThree) {
      alert("Your password is jackson2006")
      return
    }
  }
  alert("Answer is incorrect.")
}

function getAnswerUser() {
  var answers = document.getElementById('answers').value

  for (var i=0; i < answersUser.length; i++) {
    if (answers.toLowerCase() == answersUser[i].answerOne || answers.toLowerCase() == answersUser[i].answerTwo || answers.toLowerCase() == answersUser[i].answerThree) {
      alert("Your password is password123")
      return
    }
  }
  alert("Answer is incorrect.")
}