const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Poodie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
];

let messageIndex = 0;

noBtn.addEventListener('click', () => {
  // 1. Change the "No" button text
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // 2. Make the "Yes" button bigger
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.5}px`;
  yesBtn.style.padding = `${currentSize * 0.8}px ${currentSize * 1.2}px`;
});

yesBtn.addEventListener('click', () => {
  // Redirect to a "Success" page or change the content
  window.location.href = "yes_page.html";
});
