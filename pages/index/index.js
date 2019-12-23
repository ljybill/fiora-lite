const app = getApp();

Page({
  data: {
    socketMessage: '',
    messageList: [
      {
        _id: '123',
        avatar: 'http://iph.href.lu/160x160?text=fiora',
        name: 'fiora',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      },
      {
        _id: '1234',
        avatar: 'http://iph.href.lu/160x160?text=车',
        name: 'fiora造反群',
        lastMessage: '这是最近的一条消息'
      }
    ],
  },
  onLoad(query) {

  },

  handleLogin() {
    app.socket.emit('login', {
      username: '12345678',
      password: '12345678',
      os: 'os',
      browser: 'browser',
      environment: 'environment',
    }).then(res => {
      console.log(res);
      this.setData({
        messageList: res.friends.concat(res.groups).slice(),
      });
    });
  },
});
