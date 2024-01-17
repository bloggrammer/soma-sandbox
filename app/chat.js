function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const chatBox = document.getElementById('chatBox');

  const message = messageInput.value.trim();
  if (message !== '') {
    const newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.textContent = `You: ${message}`;
    chatBox.appendChild(newMessage);

    messageInput.value = '';

    receiveMessage();
  }
}

function receiveMessage() {
  const chatBox = document.getElementById('chatBox');

  const receivedMessage = document.createElement('div');
  receivedMessage.className = 'message received';
  receivedMessage.textContent = 'SOMA: Hello!';

  chatBox.appendChild(receivedMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
}
