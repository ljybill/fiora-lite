import socket from './socket';

const fetch = function (event, data, options) {
  return new Promise((resolve) => {
    return socket.emit(event, data, resolve);
  });
};

export default fetch;