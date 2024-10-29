const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const responseVideo = document.getElementById("response-video");

const chatbotResponses = {
  hi: "Hello! Nice meeting you",
  "how are you?": "I'm good, thanks!",
  "what is your name?": "My name is Chatbot AI.",
  "i love you": "Aw, that's sweet! I love you too🤗",
  "i like you": "I like you too",
  "ai i have something to tell you": "What's that",
  "ai kamusta kaya sya?": "Hindi kita masasagot dyan.",
  "may pag-asa kaya ako?": "Hindi kita masasagot dyan malay mo meron",
  "i miss you?": "Wag kang umasa na miss ka nya💔",
  "ai miss kaya nya ako?": "May iba na yun wag kang oa dyan😢",
  "ano ang gagawen ko?": "Maginom ka na lang mabuti pa🤗",
  default: "Miss ko sya",
};

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  const chatbotResponse =
    chatbotResponses[userMessage.toLowerCase()] || chatbotResponses.default;

  const userMsgHTML = `<div class="user-msg">${userMessage}</div>`;
  const chatbotMsgHTML = `<div class="chatbot-msg">${chatbotResponse}</div>`;

  chatMessages.innerHTML += userMsgHTML + chatbotMsgHTML;
  userInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (chatbotResponse === chatbotResponses.default) {
    setTimeout(() => {
      responseVideo.hidden = false;
      responseVideo.play();
    }, 1000);
  } else {
    responseVideo.hidden = true;
    responseVideo.pause();
    responseVideo.currentTime = 0;
  }
});
