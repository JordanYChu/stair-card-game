import { WebSocketServer } from "ws";
import type { Card } from "@sharedTypes/gameTypes";

const wss = new WebSocketServer({ port: 80 });

type MessageType = "play_card";

type GameMessage = {
    type: MessageType;
    card?: Card;
}

const messageHandlers: Record<MessageType, (data: GameMessage) => void> = {
    play_card: (data) => playCard(data.card as Card),
}


wss.on("connection", (ws) => {
    ws.on("message", (message: string) => {
        let data: GameMessage;

        try {
            data = JSON.parse(message) as GameMessage;
        } catch (e) {
            console.error("Invalid JSON", e);
            return;
        }

        // execute appropriate handler for message type
        if (!(data.type in messageHandlers)) {
            console.error("Invalid message type");
            return;
        }
        messageHandlers[data.type](data);
    });
    ws.send("Connected to server");
});


const playCard = (card: Card) => {
    console.log("Card played:", card);
}

const quitGame = () => {

}

console.log("WebSocket server is running on ws://localhost:80");
