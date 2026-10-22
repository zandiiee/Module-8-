
const WebSocket = require("ws");

// ============================================
// PA1201: CREATE WEBSOCKET SERVER
// ============================================

const server = new WebSocket.Server({
    port: 8384
});

console.log("Server running on port 8384");

server.on("connection", function (socket) {

    console.log("PA1201: Client connected");

    // PA1201: Detect disconnection
    socket.on("close", function () {
        console.log("PA1201: Client disconnected");
    });



    // ========================================
    // PA1202: SEND WELCOME MESSAGE
    // ========================================

    socket.send(JSON.stringify({
        type: "announcement",
        message: "The AI session starts in 10 minutes."
    }));



    // ========================================
    // PA1203: RECEIVE MESSAGE FROM BROWSER
    // ========================================

    socket.on("message", function (message) {

        const text = message.toString();

        console.log(
            "PA1203: Message from browser:", text
        );



        // ====================================
        // PA1204: HANDLE MESSAGE TYPES
        // ====================================

        try {
            const data = JSON.parse(text);

            switch (data.type) {

                case "chat":
                    console.log("Chat received:", data.message);
                    break;

                case "notification":
                    console.log("Notification received:", data.message);
                    break;

                case "announcement":
                    console.log("Announcement received:", data.message);
                    break;

                default:
                    console.log("Unknown message type");
                    return;
            }



            // ====================================
            // PA1205: SEND RESPONSE TO BROWSER
            // ====================================

            const response = {
                type: data.type,
                message: "Server received: " + data.message
            };

            socket.send(JSON.stringify(response));

            console.log("PA1205: Response sent:", response);

        } catch (error) {
            console.error("Invalid JSON message:", error);
        }

    });

});
