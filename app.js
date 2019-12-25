import socket from './utils/socket';
import config from './config/index';
import service from './app.service';

App({
  onLaunch: function () {
    this.init();
  },

  init() {
    socket.connect(config.socketHost).then(() => {
      this.globalData.socketConnected = true;
      const token = wx.getStorageSync('token');
      if (token) {
        this.loginByToken(token);
      } else {
        this.loginByGuest()
      }
    }, () => {
      // TODO: socket连接失败
    });
  },

  disposs() {
    socket.disConnect();
  },

  ...service,

  bind(event, fn) {
    if (!Array.isArray(this.globalData.bindFn[event])) {
      this.globalData.bindFn[event] = [];
    }
    this.globalData.bindFn[event].push(fn);

    if (this.globalData.socketConnected) {
      console.log('socketConnected');
      fn();
    }
  },

  unbind(event, fn) {
    if (Array.isArray(this.globalData.bindFn[event])) {
      this.globalData.bindFn[event] = this.globalData.bindFn[event].filter(item => item !== fn);
    }
  },

  exec(event) {
    if (Array.isArray(this.globalData.bindFn[event])) {
      this.globalData.bindFn[event].forEach(fn => fn());
    }
  },

  globalData: {
    socketConnected: false,
    isLogin: false,

    groupList: [],
    groupMessage: {},
    userInfo: {},

    bindFn: {

    }
  }
});