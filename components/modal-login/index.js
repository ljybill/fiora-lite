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
    handleLoginSubmit(evt) {
      console.log(evt);
    },
    handleRegisterSubmit(evt) {
      console.log(evt);
    }
  }
});
