const submitButton = document.getElementById('submit-btn');

const nameInput = document.getElementById('greeting-txt');
const ageInput = document.getElementById('age-text');

let userName;
let userAge;

submitButton.onclick = () => {
  userName = document.getElementById('name-box').value;
  userAge = document.getElementById('age-box').value;

  if (!userName && !userAge) {
    nameInput.innerText = 'I know nothing about you.';
    ageInput.innerText = '';
  } else if (userName && !userAge) {
    nameInput.innerText = `Hello, ${userName}.`;
    ageInput.innerText = '';
  } else if (!userName && userAge) {
    nameInput.innerText = "I don't know you.";
    ageInput.innerText = `But you're ${userAge} years old.`;
  } else {
    nameInput.innerText = `Hello, ${userName}!`;
    ageInput.innerText = `You're ${userAge} years old.`;
  }
};
