//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        src:'/images/比沙门天.jpg',
        name:'比沙门天',
        id:0
      },
      {
        src: '/images/比沙门天.jpg',
        name: '比沙门天',
        id:1
      },
      {
        src: '/images/比沙门天.jpg',
        name: '比沙门天',
        id:2
      },
      {
        src: '/images/比沙门天.jpg',
        name: '比沙门天',
        id:3
      }
    ]
  },
  click(e){
    wx.navigateTo({
      url: '/pages/self/index?data=' + JSON.stringify(e.currentTarget.dataset.data)
    })
  }
  
})
