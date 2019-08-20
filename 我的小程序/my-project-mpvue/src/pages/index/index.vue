<template>
  <div>
    <img :src="newimg" alt="">
    <div>
      <div class="box" :style="{ width: len +'%' }">{{len}}</div>
      <button @click="click">使劲敲</button>
      <button style='{background:red}'>重新开始</button>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      img1:'/static/images/1.png',
      img2:'/static/images/2.png',
      img3:'/static/images/3.png',
      newimg:'/static/images/2.png',
      len:100,
      num:1,
      flag:true 
    }
  },

  components: {
    card
  },

  methods: {
    click(){
      this.len -=20;
      if(this.len !=0 ){
        this.newimg = '/static/images/1.png';
        setTimeout(()=>{
          this.newimg = '/static/images/2.png';
        },500)
      }else{
        this.len = 0;
        this.newimg = '/static/images/3.png';
      }
    }

  },
  watch:{
    len(val,old){
     val = old;
    }
  },
  computed:{
      length(){
        console.log(len--);
          console.log(this.len);
          return this.length-=20
      }
  },

  created () {

  },
  computed: {
    
  },
}
</script>

<style scoped>
.box{
  width:100%;
  height:50rpx;
  background: red;
}
</style>
