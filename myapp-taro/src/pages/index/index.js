import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Input,Button,Checkbox} from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.css'

 class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  
  constructor(props){
      super(props)
      this.state={
        value:""
      }
  }

  render () {
    let list=this.props.list;
    console.log(list);
    return (
      <View className='index'>
        <View className="addItem">
           <Input placeholder="请输入" 
            value={this.state.value}
            onInput={this.handleChange.bind(this)}
            ></Input>
            <Button onClick={this.handelClick.bind(this)}>添加</Button>
        </View>
        <View className="allItem">
           <Text>0条任务</Text>
           <Text>全部任务</Text>
           <Text>未完成的任务</Text>
           <Text>完成的任务</Text>
        </View>
        <View className="listItem">
           {
            list?list.map((item,ind)=>{
              return <View key={ind}>
                 <Checkbox checked={item.flag}></Checkbox>
                 <Text key={ind}>{item.name}</Text>
                 <Button onClick={this.handelDel.bind(this,ind)}>删除</Button>
              </View>
             }):null
           }
        </View>
      </View>
    )
  }
  handleChange(e){
    this.setState({
      value:e.detail.value
    });
    
  }
  handelClick(){
    this.setState({
      value:''
    })
    this.props.add(this.state.value)
  }
  handelDel(ind){
    this.props.del(ind)
  }
}

let stateProps=(state)=>{
  return {
    ...state
  }
}
let dispatchProps=(dispatch)=>{
  return {
      add(item){
        dispatch({
          type:'Add',
          item
        })
      },
      del(ind){
        dispatch({
          type:'Del',
          ind
        })
      }

  }
}

export default connect(stateProps,dispatchProps)(Index)