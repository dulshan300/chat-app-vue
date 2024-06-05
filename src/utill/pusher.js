import PusherJS from 'pusher-js'

let pusher = new PusherJS('key', {
    wsHost: import.meta.env.VITE_SOCKET_URL,
    wsPort: import.meta.env.VITE_SOCKET_PORT,
    forceTLS: false,
    encrypted: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    cluster: 'mt1',
});


export default pusher

