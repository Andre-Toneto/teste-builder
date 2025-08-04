import { useApp } from "@/stores/app";

class WebSocketConnection {
    private ws: WebSocket | undefined ;
    private url: string;

    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.url = 'wss://app.neovisoapp.online/ws';
        } else {
            this.url = 'ws://127.0.0.1:8765';
        }

        if (typeof window !== "undefined") {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onclose = this.onClose.bind(this);
            this.ws.onerror = this.onError.bind(this);
        
        } else {
            console.error("WebSocket is not supported in this environment.");
        }
    }

    private onOpen() {
        console.log('Connected to', this.url);
        const _message = {
            'type': 'login',
            'data': {
                'user': useApp().user.user,
                'id': useApp().user.id,
                'user_type' : useApp().user.user_type
            }
        }
        
        this.sendMessage(JSON.stringify(_message));
    }

    public onMessage(event: MessageEvent) {
        const _message = JSON.parse(event.data);
        
        if (_message.type == 'notification') {
            useApp().notifications = _message.data;

            console.log('notifications_qtd message:',  _message.notifications);
            useApp().notifications_qtd = _message.notifications;
            console.log('notifications_qtd:', useApp().notifications_qtd);
        }
        
        console.log('Received message:', event.data);
    }

    private onClose(event: CloseEvent) {
        console.log(`Connection closed: ${event.code} - ${event.reason}`);
    }

    private onError(event: Event) {
        console.error('WebSocket error:', event);
    }

    public sendMessage(message: string) {
        console.log('WebSocket ready state:', this.ws.readyState);
        if (this.ws.readyState === WebSocket.OPEN) {
            console.log('Sending message:', message);
            this.ws.send(message);
        } else {
            console.error('WebSocket is not open. Ready state:', this.ws.readyState);
        }
    }

    public closeConnection() {
        this.ws.close();
    }
}

export default WebSocketConnection;