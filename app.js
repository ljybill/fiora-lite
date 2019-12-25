import socket from './utils/socket';
import config from './config/index';
import service from './app.service';
import { EVENT_MESSAGE } from './event';

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

    socket.getSocket().on('message', this.onMessage)
  },

  onMessage(res) {
    console.log('new message');
    console.log(res);

    if (res.to) {
      if (!Array.isArray(this.globalData.groupMessage[res.to])) {
        this.globalData.groupMessage[res.to] = []
      }

      const o = Object.assign({}, res);
      delete o.to
      this.globalData.groupMessage[res.to].push(o);

      this.exec(EVENT_MESSAGE)
    }
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