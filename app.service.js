import service from './service/user';
import { EVENT_LOGIN } from './event';

export default {
  loginByGuest() {
    service.loginByGuest().then((res) => {
      this.globalData.groupList = [
        {
          _id: res._id,
          name: res.name,
          avatar: res.avatar,
          creator: res.creator,
          createTime: res.createTime,
        }
      ];
      this.globalData.groupMessage[res._id] = res.messages;

      this.exec(EVENT_LOGIN);
    });
  },

  loginByPass(username, password) {
    service.loginByPass(username, password).then((res) => {
      if (typeof res !== 'object') {
        //  服务端返回了错误信息
        wx.showToast({
          title: res,
          icon: 'none',
        })
        return
      }

      this.globalData.groupList = res.groups;
      this.globalData.isLogin = true;
      this.globalData.userInfo = {
        _id: res._id,
        avatar: res.avatar,
        username: res.username,
        tag: res.tag,
        isAdmin: false,
      }
      if (res.token) {
        wx.setStorageSync('token', res.token);
      }
      this.exec(EVENT_LOGIN);
    });
  },

  loginByToken(token) {
    service.loginByToken(token).then((res) => {
      if (typeof res !== 'object') {
        //  服务端返回了错误信息
        wx.showToast({
          title: res,
          icon: 'none',
        })
        return
      }

      this.globalData.groupList = res.groups;
      this.globalData.isLogin = true;
      this.globalData.userInfo = {
        _id: res._id,
        avatar: res.avatar,
        username: res.username,
        tag: res.tag,
        isAdmin: false,
      }
      if (res.token) {
        wx.setStorageSync('token', res.token);
      }
      this.exec(EVENT_LOGIN);
    })
  }
}