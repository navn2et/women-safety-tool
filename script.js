document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");
    const closeBtn = document.querySelector(".close-btn");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
  
    chatbotToggler.addEventListener("click", function () {
      document.body.classList.toggle("show-chatbot");
    });
  
    closeBtn.addEventListener("click", function () {
      document.body.classList.remove("show-chatbot");
    });
  
    sendChatBtn.addEventListener("click", function () {
      handleChat();
    });
  
    chatInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
      }
    });
  
    function handleChat() {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        appendMessage(userMessage, "outgoing");
        chatInput.value = "";
  
        // Generate responses based on user input
        const botResponse = generateResponse(userMessage);
        appendMessage(botResponse, "incoming");
      }
    }
  
    function appendMessage(message, className) {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      chatLi.innerHTML = `
        <span class="material-symbols-outlined">smart_toy</span>
        <p>${message}</p>
      `;
      chatbox.appendChild(chatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
    }
  
    function generateResponse(userMessage) {
      userMessage = userMessage.toLowerCase();
  
      // Define responses based on user input
      if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hi! How can I help you?";
      } else if (userMessage.includes("how are you")) {
        return "I'm just a chatbot, but thanks for asking! How can I assist you?";
      } else if (userMessage.includes("file a complaint")) {
        return "Sure, please provide more details about your complaint.";
      } else if (userMessage.includes("share your live location")) {
        return "please go to contact us page.";
      } else {
        return "I'm here to help. Feel free to ask any questions.";
      }
    }
  });
