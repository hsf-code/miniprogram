// app.js
App({
  onLaunch(options) {
    console.log('程序加载了!', wx);
    // console.log('env', wx.canIUse('console.log'),
    // wx.canIUse('CameraContext.onCameraFrame'),
    // wx.canIUse('CameraFrameListener.start'),
    // wx.canIUse('Image.src'));
    // const base64 = 'CxYh'
    // const arrayBuffer = wx.base64ToArrayBuffer(base64)
    // console.log('base64', arrayBuffer);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // wx.previewImage({
    //   current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //   urls: [ // 所有图片的URL列表，数组格式
    //     'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    //   ],
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 获取经度纬度
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     var latitude = res.latitude // 纬度
    //     var longitude = res.longitude // 经度
    //     // console.log('经度纬度', latitude, longitude);
    //   }
    // })
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取系统信息
    // wx.getSystemInfo({
    //   success (res) {
    //     console.log('系统信息', res);
    //     // console.log(res.model)
    //     // console.log(res.pixelRatio)
    //     // console.log(res.windowWidth)
    //     // console.log(res.windowHeight)
    //     // console.log(res.language)
    //     // console.log(res.version)
    //     // console.log(res.platform)
    //   }
    // })
    // wx.updateWeChatApp({
    //   success(res){
    //     console.log('成功的回调!');
    //   }
    // })
  },
  onShow(options){
    // console.log('小程序展现!', options);
  },
  onHide(){
    // console.log('隐藏!');
  },
  onError(error){
    console.log('error!', error);
  },
  globalData: {
    userInfo: null
  }
})