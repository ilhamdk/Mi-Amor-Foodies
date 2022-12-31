import NotifHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler() {
    NotifHelper.sendNotification({
      title: 'Mi Amor Foodies is waiting you to check restaurant from indonesia',
      options: {
        icon: '/cursor.png',
        image: 'https://cdn1-production-images-kly.akamaized.net/ujrUz8TSNAASJjY-kLyF0c3Heo0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3610791/original/098354700_1634980708-GTA_remaster_3.jpg',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
