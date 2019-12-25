const app = getApp();
import { EVENT_LOGIN } from '../../event';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatar: '',
      username: '您的昵称',
      tag: '暂无tag'
    },
    menuList: [
      // {
      //   text: "修改密码",
      //   url: "method:changePass"
      // },
      // {
      //   text: "申请tag",
      //   url: "method:tag"
      // },
      {
        text: "退出登录",
        url: "method:logout"
      }
    ],
    isLogin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initBind();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },

  initBind() {
    app.bind(EVENT_LOGIN, this.onLogin.bind(this))
  },

  onLogin() {
    if (app.globalData.isLogin) {
      this.setData({
        isLogin: true,
        userInfo: app.globalData.userInfo
      })
    }
  },

  handleLogin(evt) {
    const { username, password } = evt.detail
    app.loginByPass(username, password);
  },

  handleItemTap(evt) {
    const { url } = evt.currentTarget.dataset
    if (url.startsWith('method:')) {
      this[url.split('method:').pop()]();
    }
  },

  handleRegister() { },

  logout() {
    wx.setStorageSync('token', '');
    app.disposs();

    setTimeout(() => {
      app.init();
    }, 200)
  }
});
