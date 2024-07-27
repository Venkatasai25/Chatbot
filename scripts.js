function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    addMessage(userInput, 'user');

    showTypingIndicator();

    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
        hideTypingIndicator();
        addMessage(botResponse, 'bot');
    }, 1500); // Simulate bot typing delay

    document.getElementById('user-input').value = '';
}

function addMessage(text, type) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.className = type === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = text;
    chatbox.appendChild(messageElement);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function clearChat() {
    document.getElementById('chatbox').innerHTML = '';
}

function getBotResponse(input) {
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you': 'I\'m doing great, thanks for asking! How can I help you?',
        'bye': 'Goodbye! Have a great day!',
        'what can you do': 'I can chat with you, answer questions, and assist with various tasks. Try asking me something!',
        'help': 'Sure! What do you need help with?',
        'thank you': 'You\'re welcome! If you have any other questions, feel free to ask.',
        'what is your name': 'I\'m a chatbot created to assist you. I don\'t have a name, but you can call me Chatbot!',
        'joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
        'weather': 'I can\'t check the weather, but you can look it up online for the latest updates.',
        'news': 'I don\'t have the latest news, but you can check out news websites for current events.',
        'default': 'I\'m not sure how to respond to that. Can you ask something else?'
    };

    // Convert input to lowercase to match keys
    const response = responses[input.toLowerCase()] || responses['default'];
    return response;
}

function showTypingIndicator() {
    const chatbox = document.getElementById('chatbox');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-message typing-indicator';
    typingIndicator.textContent = '...';
    chatbox.appendChild(typingIndicator);

    typingIndicatorTimeout = setTimeout(() => {
        chatbox.removeChild(typingIndicator);
    }, 1500); // Remove after the delay
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}
