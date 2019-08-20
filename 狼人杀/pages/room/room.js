// pages/room/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        url:'/images/cunmin.png',
        num:0,
        name:'村民'
      },
      {
        id:2,
        url:'/images/daozei.png',
        name:'盗贼',
        num:0
      },
      {
        id:3,
        url:'/images/nvwu.png',
        name:'女巫',
        num:0
      },
      {
        id:4,
        url:'/images/qiubite.png',
        name:'丘比特',
        num:0
      },
      {
        id:5,
        url:'/images/lieren.png',
        name:'猎人',
        num:0
      }
    ],
    sum:0,
    num:0
  },
  add(e){
    let id = e.currentTarget.dataset.id;
    let i = this.data.list.findIndex(item=>item.id === id);
    this.data.list.forEach(item=>{
      if(item.id == id){
        if (item.num < 10) {
          this.setData({
            [`list[${i}].num`]: ++this.data.list[i].num,
            sum:++this.data.sum
          });
        }
      }
      
    })
    
    console.log(this.data.list[0].num);
  },
  minus(e){
    let id = e.currentTarget.dataset.id;
    let i = this.data.list.findIndex(item => item.id === id);
    this.data.list.forEach(item => {
      if (item.id == id) {
        if (item.num >= 1) {
          this.setData({
            [`list[${i}].num`]: --this.data.list[i].num,
            sum: --this.data.sum
          });
        }
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})