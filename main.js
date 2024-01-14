const submitButton = document.getElementById('submit-btn');
const greetingText = document.getElementById('greeting-txt');

let userName;

submitButton.onclick = () => {
  userName = document.getElementById('text-box').value;

  if (userName === '') {
    greetingText.innerText = "I can't greet nobody.";
  } else {
    greetingText.innerText = `Hello, ${userName}!`;
  }
};
