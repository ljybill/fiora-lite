Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ""
    },
    width: {
      type: Number,
      value: 200
    },
    height: {
      type: Number,
      value: 200
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _src: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleError() {
      this.setData({
        _src: "http://iph.href.lu/80x80?text=Avatar"
      });
    },
    resetSrc() {}
  },
  observers: {
    src: function(src) {
      this.setData({
        _src: src
      });
    }
  },
  ready() {
    this.setData({
      _src: this.data.src
    });
  }
});
