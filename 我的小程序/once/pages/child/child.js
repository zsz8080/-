// pages/child/child.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    flag:true,
    lists:[
      {
        name:'张一',
        age:20
      },
      {
        name: '张二',
        age: 21
      },
      {
        name: '张三',
        age: 22
      },
      {
        name: '张四',
        age: 23
      },
      
    ],
    data:[
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1852421770,500738956&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3217748220,1394355567&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2342861551,2637732696&fm=26&gp=0.jpg"
    ],
    title:'',
    list: [
      {
        "urlid": 45,
        "movid": 3,
        "title": "荒漠甘泉 1月1日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0101.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0101.mp3",
        "sort_title": "第1集"
      },
      {
        "urlid": 46,
        "movid": 3,
        "title": "荒漠甘泉 1月2日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0102.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0102.mp3",
        "sort_title": "第2集"
      },
      {
        "urlid": 47,
        "movid": 3,
        "title": "荒漠甘泉 1月3日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0103.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0103.mp3",
        "sort_title": "第3集"
      },
      {
        "urlid": 48,
        "movid": 3,
        "title": "荒漠甘泉 1月4日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0104.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0104.mp3",
        "sort_title": "第4集"
      },
      {
        "urlid": 49,
        "movid": 3,
        "title": "荒漠甘泉 1月5日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0105.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0105.mp3",
        "sort_title": "第5集"
      },
      {
        "urlid": 50,
        "movid": 3,
        "title": "荒漠甘泉 1月6日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0106.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0106.mp3",
        "sort_title": "第6集"
      },
      {
        "urlid": 51,
        "movid": 3,
        "title": "荒漠甘泉 1月7日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0107.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0107.mp3",
        "sort_title": "第7集"
      },
      {
        "urlid": 52,
        "movid": 3,
        "title": "荒漠甘泉 1月8日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0108.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0108.mp3",
        "sort_title": "第8集"
      },
      {
        "urlid": 53,
        "movid": 3,
        "title": "荒漠甘泉 1月9日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0109.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0109.mp3",
        "sort_title": "第9集"
      },
      {
        "urlid": 54,
        "movid": 3,
        "title": "荒漠甘泉 1月10日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0110.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0110.mp3",
        "sort_title": "第10集"
      },
      {
        "urlid": 55,
        "movid": 3,
        "title": "荒漠甘泉 1月11日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0111.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0111.mp3",
        "sort_title": "第11集"
      },
      {
        "urlid": 56,
        "movid": 3,
        "title": "荒漠甘泉 1月12日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0112.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0112.mp3",
        "sort_title": "第12集"
      },
      {
        "urlid": 57,
        "movid": 3,
        "title": "荒漠甘泉 1月13日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0113.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0113.mp3",
        "sort_title": "第13集"
      },
      {
        "urlid": 58,
        "movid": 3,
        "title": "荒漠甘泉 1月14日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0114.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0114.mp3",
        "sort_title": "第14集"
      },
      {
        "urlid": 59,
        "movid": 3,
        "title": "荒漠甘泉 1月15日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0115.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0115.mp3",
        "sort_title": "第15集"
      },
      {
        "urlid": 60,
        "movid": 3,
        "title": "荒漠甘泉 1月16日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0116.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0116.mp3",
        "sort_title": "第16集"
      },
      {
        "urlid": 61,
        "movid": 3,
        "title": "荒漠甘泉 1月17日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0117.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0117.mp3",
        "sort_title": "第17集"
      },
      {
        "urlid": 62,
        "movid": 3,
        "title": "荒漠甘泉 1月18日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0118.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0118.mp3",
        "sort_title": "第18集"
      },
      {
        "urlid": 63,
        "movid": 3,
        "title": "荒漠甘泉 1月19日",
        "url_1": "http://downs.fuyin.fm/xz/从心得力/每日一篇/荒漠甘泉/hmgq0119.mp3",
        "url_5": "http://db.fuyin.fm/db/从心得力/每日一篇/荒漠甘泉/hmgq0119.mp3",
        "sort_title": "第19集"
      }
    ],
    arr:[]
    
  },
  click(ev){
    this.setData({
      name: ev.currentTarget.dataset.name.name
    })
    console.log(ev.currentTarget.dataset.name)
  },
  input(e){
    
    
    let arr=this.data.list.filter(item=>item.title.includes(this.data.title))
    this.setData({
      title: e.detail.value,
      arr
    })
    console.log(this.data.arr)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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