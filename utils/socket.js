const IO = require('../libs/weapp.socket.io');

let socket = null;

const handleSocketConnectFail = function () {
  console.log('socket 连接失败');
  socket = null;
};

// API
function connect(url, options = {}) {
  socket = IO(url, options);

  socket.on('connect', () => {
    console.log('连接成功');
  });

  socket.on('connect_error', handleSocketConnectFail);
  socket.on('connect_timeout', handleSocketConnectFail);
  socket.on('disconnect', handleSocketConnectFail);
  socket.on('reconnect', handleSocketConnectFail);
  socket.on('reconnect_failed', handleSocketConnectFail);
  socket.on('reconnect_attempt', handleSocketConnectFail);
  socket.on('error', handleSocketConnectFail);
}

function disConnect() {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject('socket还未初始化');
    }
    socket.close();
    socket.null;
  });
}

function emit(event, data) {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject('socket还未初始化');
    }
    socket.emit(event, data, resolve);
  });
}

function getSocket() {
  return socket;
}

export default {
  connect,
  disConnect,
  emit,
  getSocket,
};