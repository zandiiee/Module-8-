

// ============================================
// PA1201: CONNECT TO WEBSOCKET SERVER
// ============================================

const statusText = document.getElementById("status");
const messageText = document.getElementById("message");
const sendStatus = document.getElementById("sendStatus");

const socket = new WebSocket("ws://localhost:8384");

// Connection successful
socket.onopen = function () {
  statusText.textContent = "Connected";
  statusText.style.color = "green";

  console.log("PA1201: Connected to server");
};

// Connection closed
socket.onclose = function () {
  statusText.textContent = "Disconnected";
  statusText.style.color = "red";

  console.log("PA1201: Disconnected");
};

// Connection error
socket.onerror = function () {
  statusText.textContent = "Connection Error";
  statusText.style.color = "red";
};

// ============================================
// PA1202: RECEIVE WEBSOCKET MESSAGES
// ============================================

socket.onmessage = function (event) {
  console.log("PA1202: Message received:", event.data);

  try {
    const data = JSON.parse(event.data); // ====================================
    // PA1204: HANDLE DIFFERENT MESSAGE TYPES
    // ====================================

    switch (data.type) {
      case "chat":
        messageText.textContent = "Chat: " + data.message;
        messageText.style.color = "blue";
        break;

      case "notification":
        messageText.textContent = "Notification: " + data.message;
        messageText.style.color = "green";
        break;

      case "announcement":
        messageText.textContent = "Announcement: " + data.message;
        messageText.style.color = "purple";
        break;

      default:
        messageText.textContent = "Unknown message type";
        messageText.style.color = "black";
    } // ====================================
    // PA1205: CONFIRM SERVER RESPONSE
    // ====================================

    console.log("PA1205: Server response:", data);
  } catch (error) {
    console.error("Invalid JSON message:", error);
  }
};

// ============================================
// PA1203: SEND MESSAGE TO WEBSOCKET SERVER
// ============================================

document.getElementById("sendBtn").addEventListener("click", function () {
  // Get the message from the input
  const message = document.getElementById("userMessage").value.trim(); // PA1204: Get selected message type

  const type = document.getElementById("messageType").value; // Check empty input

  if (message === "") {
    sendStatus.textContent = "Please enter a message.";
    return;
  } // Check connection

  if (socket.readyState === WebSocket.OPEN) {
    // PA1204: Create typed message
    const data = {
      type: type,
      message: message,
    }; // PA1203: Send message

    socket.send(JSON.stringify(data));

    sendStatus.textContent = "Message sent!";

    console.log("PA1203: Message sent:", data); // Clear input

    document.getElementById("userMessage").value = "";
  } else {
    sendStatus.textContent = "Not connected to server.";
  }
});
