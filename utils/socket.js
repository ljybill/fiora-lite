const IO = require('../libs/weapp.socket.io');

let socket = null;

const handleSocketConnectFail = function (resolve, reject, name) {
  console.log('socket 连接失败' + name);
  // reject();
};

const handleSocketConnectSuccess = function (resolve, reject) {
  console.log('socket 连接成功');
  resolve();
};

// API
function connect(url, options = {}) {
  return new Promise((resolve, reject) => {
    socket = IO(url, options);

    socket.on('connect', () => {
      console.log('连接成功');
      resolve();
    });

    socket.on('connect_error', handleSocketConnectFail(resolve, reject, 'connect_error'));
    socket.on('connect_timeout', handleSocketConnectFail(resolve, reject, 'connect_timeout'));
    socket.on('disconnect', handleSocketConnectFail(resolve, reject, 'disconnect'));
    socket.on('reconnect', handleSocketConnectFail(resolve, reject, 'reconnect'));
    socket.on('reconnect_failed', handleSocketConnectFail(resolve, reject, 'reconnect_failed'));
    socket.on('reconnect_attempt', handleSocketConnectFail(resolve, reject, 'reconnect_attempt'));
    socket.on('error', handleSocketConnectFail(resolve, reject, 'error'));

    setTimeout(() => {
      // 2000ms 的超时时间，如果超时认定为socket连接失败
      reject();
    }, 2000)
  })
}

function disConnect() {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject('socket还未初始化');
    }
    socket.close();
    socket = null;
  });
}

function emit(event, data) {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject('socket还未初始化');
    }
    socket.emit(event, data, (res) => {
      console.log(res);
      resolve(res);
    });
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