// components/modal-login/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(evt) {
      const { current } = evt.detail;
      this.setData({
        currentIdx: current
      });
    },
    handleTabTap(evt) {
      const { tabIdx } = evt.currentTarget.dataset;
      if (this.data.currentIdx !== tabIdx) {
        this.setData({
          currentIdx: tabIdx
        });
      }
    },
    _checkFormValidity(value) {
      const { username, password } = value;
      return username && password;
    },
    handleLoginSubmit(evt) {
      if (!this._checkFormValidity(evt.detail.value)) {
        wx.showToast({
          title: '用户名或密码不可为空',
          icon: 'none',
        })
        return;
      }
    },
    handleRegisterSubmit(evt) {
      if (!this._checkFormValidity(evt.detail.value)) {
        wx.showToast({
          title: '用户名或密码不可为空',
          icon: 'none',
        })
        return;
      }
    }
  }
});
