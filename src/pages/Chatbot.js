import React from 'react'

const Chatbot = () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.className = sender;
      messageElement.innerText = message;
      chatMessages.appendChild(messageElement);
    }

    function sendMessage() {
      const userMessage = userInput.value;
      appendMessage("user", userMessage);

      const botResponse = getBotResponse(userMessage);
      appendMessage("bot", botResponse);

      userInput.value = "";
    }

    function getBotResponse(userMessage) {
      userMessage = userMessage.toLowerCase();

      if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I assist you today? ";
      } else if (userMessage.includes("support")) {
        return "Sure, I can help with that. Please specify the type of support you need.";
      } else if (userMessage.includes("marketing")) {
        return "Marketing is crucial for business growth. What specific marketing support do you require?";
      } else if (
        userMessage.includes("web design") ||
        userMessage.includes("website") ||
        userMessage.includes("web")
      ) {
        return "A well-designed website can boost your online presence. Tell me more about your web design needs.";
      } else if (
        userMessage.includes("technology") ||
        userMessage.includes("tech")
      ) {
        return "Technology is essential in the digital age. How can I assist you with technology-related challenges?";
      } else if (
        userMessage.includes("goodbye") ||
        userMessage.includes("bye")
      ) {
        return "Goodbye! If you have more questions, feel free to return.";
      } else if (
        userMessage.includes("frontend") ||
        userMessage.includes("UI") ||
        userMessage.includes("UX")
      ) {
        return "You can go to our services section to avail web services from top service providers.";
      } else if (userMessage.includes("UI") || userMessage.includes("UX")) {
        return "Sure, I can help with that. Please specify the type of support you need.";
      } else if (userMessage.includes("advertisement")) {
        return "You can avail ad services from our services page.";
      } else if (userMessage.includes("supply")) {
        return "You can access supply support from services page.";
      } else if (userMessage.includes("how to use")) {
        return "Firtly sign in as company or a volunteer. If you are a business you can avail services from services section.If you are a volunteer you can help any small business by providing supports like website,marketing or investing.";
      } else {
        return "I'm here to help. Please provide more details, and I'll do my best to assist you.";
      }
    }
  return (
    <div>
      <div id="chat-container">
        <div id="chat-header">Chatbot</div>
        <div id="chat-messages">
          {/* Chat messages will be displayed here */}
        </div>
        <input type="text" id="user-input" placeholder="Type your message..." />
        <button className="chatbutton" onclick="sendMessage()">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot
