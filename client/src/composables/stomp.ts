import {Client} from "@stomp/stompjs"
import {useUserStore} from "../store/user.ts";
import {useMessagesStore} from "../store/messages.ts";

const client = new Client({
    brokerURL: 'ws://localhost:8080/api/ws',
    onConnect: () => {
        console.log("WebSocket Connected!");
        client.subscribe("/topic/message", message => {
            const data = JSON.parse(message.body);
            const userStore = useUserStore()
            if (data.to !== userStore.user.id) {
                return
            }

            const messageStore = useMessagesStore()

            messageStore.addMessage(data.from, data)
        })
    }
});

client.activate();


export function useStompClient(): Client {
    return client;
}