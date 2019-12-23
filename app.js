import socket from './utils/socket';
import config from './config/index';

App({
  onLaunch: function () {
    // socket.connect(config.socketHost);
  },
  socket: socket,
  globalData: {}
});