import { EVENT_MESSAGE } from '../../event';
import { messageList } from '../../model/mock';
import fetch from '../../utils/fetch';
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    messageList: [],
    scrollTop: 0,
    // 用于重置input内容
    messageContent: '',
    username: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { roomId } = options;
    this.roomId = roomId;
    this._onMessage = this.onMessage.bind(this);

    this.initRoom(roomId);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.unbind(EVENT_MESSAGE, this._onMessage)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // controller
  initRoom(roomId) {
    if (!roomId) {
      wx.showModal({
        title: '房间未找到',
        content: '进入房间失败，请选择其他房间',
        showCancel: false,
        success: () => {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      })
    }

    app.bind(EVENT_MESSAGE, this._onMessage);
  },

  handleSendMessage(evt) {
    const { message } = evt.detail.value;
    if (!message.trim().length) {
      return;
    }

    fetch('sendMessage', { to: this.roomId, type: 'text', content: message }).then(res => {
      app.onMessage(res);
    });
    this.setData({
      messageContent: '',
    })
  },

  onMessage() {
    const list = app.globalData.groupMessage[this.roomId] || [];
    if (Array.isArray(list)) {
      this.setData({
        username: app.globalData.userInfo.username,
        messageList: list.filter(message => message.type === 'text')
      });
    }

    this.scrollGoBottom();
  },

  // service
  getMessageList() {
    return messageList[0].messages;
  },
  scrollGoBottom() {
    this.setData({
      scrollTop: 9999,
    })
  }
})