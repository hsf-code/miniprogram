const test = require('../../utils/common/test');
const app = getApp();
// 获取全局唯一的应用实例
Page({
  data: {
    text: "This is page data.",
    test: '测试'
  },
  onLoad: function(options) {
    console.log("1、page load.", this);
    // 页面函数的初始化的回调（此时页面还没有显示）
    // Do some initialize when page load.
  },
  onShow: function() {
    console.log("2、page show.");
    // 当页面显示的时候
    // Do something when page show.
  },
  onReady: function() {
    // Do something when page ready.
    // 相当于页面已经渲染完成了，（类似于vue的mounted）
    console.log("3、page ready.");
  },
  onHide: function() {
    // Do something when page hide.
    // 当前页面被隐藏的时候
    console.log("4、page hide.");
  },
  onUnload: function() {
    // Do something when page close.
    // 当页面卸载时触发。
    console.log("5、page close.");
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    // 页面下拉刷新的回调函数
    console.log("6、page pull down.");
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log("7、page reach bottom");
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    // 用户分享转发
    console.log('用户转发了!');
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '自定义转发标题'
        })
      }, 2000)
    })
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      promise
    }
  },
  onShareTimeline(){
    console.log('分享到朋友圈!');
  },
  onPageScroll: function() {
    // Do something when page scroll
    // 监听用户的滑动事件
    console.log('用户滑动了!');
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  },
  clickMe(){
    console.log('demo click', test.sum(1, 3));
  }
})