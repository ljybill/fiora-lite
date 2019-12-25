const app = getApp();
import { EVENT_LOGIN } from '../../event';

Page({
  data: {
    socketMessage: '',
    messageList: [],
  },
  onLoad(query) {
    this.initBind();
  },

  initBind() {
    app.bind(EVENT_LOGIN, this.onUserLogin.bind(this));
  },

  onUserLogin() {
    console.log('call onUserLogin');
    const list = app.globalData.groupList.map(item => {
      const messageList = app.globalData.groupMessage[item._id];
      if (Array.isArray(messageList) && messageList.length > 0) {
        return {
          ...item,
          lastMessage: messageList[messageList.length - 1].content,
        }
      }
      return {
        ...item,
        lastMessage: '',
      }
    })

    this.setData({
      messageList: list,
    })
  },

  handleIntoRoom(evt) {
    const { roomId } = evt.currentTarget.dataset;

    wx.navigateTo({
      url: `/pages/chat/index?roomId=${roomId}`
    })
  },
});
