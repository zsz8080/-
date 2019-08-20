import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:0,
        time:100,
        timer:null
    },
    mutations:{
        addd(state){
            state.count ++;
        },
        sub(state){
            state.count --;
        },
        timer(state){
            clearInterval(state.timer);
            state.timer=setInterval(()=>{
                state.time = formatSeconds(state.time -= 1);
            },1000);
            
        }
    }
})
function formatSeconds(value) {

        var theTime = parseInt(value);// 秒
        var middle= 0;// 分
        var hour= 0;// 小时
    
        if(theTime > 60) {
            middle= parseInt(theTime/60);
            theTime = parseInt(theTime%60);
            if(middle> 60) {
                hour= parseInt(middle/60);
                middle= parseInt(middle%60);
            }
        }
        var result = ""+parseInt(theTime)+"秒";
        if(middle > 0) {
            result = ""+parseInt(middle)+"分"+result;
        }
        if(hour> 0) {
            result = ""+parseInt(hour)+"小时"+result;
        }
        return result;
    }

export default store;