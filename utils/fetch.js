import socket from './socket';

const fetch = function (event, data, options) {
  return socket.emit(event, data);
};

export default fetch;