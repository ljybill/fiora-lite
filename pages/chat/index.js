import { messageList } from '../../model/mock';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    messageList: [],
    scrollTop: 0,
    // 用于重置input内容
    messageContent: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { roomId } = options;
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

    const historyList = this.getMessageList();
    this.setData({
      messageList: historyList,
    })
    this.scrollGoBottom();
  },

  handleSendMessage(evt) {
    const { message } = evt.detail.value;
    if (!message.trim().length) {
      return;
    }

    this.data.messageList.push({
      content: message,
    })
    this.setData({
      messageList: this.data.messageList,
      messageContent: '',
    })
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