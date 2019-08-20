import { createStore, applyMiddleware } from 'redux'
let preState={
    list:[]
}
let reducer=(state=preState,action)=>{
    //let newState = JSON.parse(JSON.stringify(state));
    let list=[...state.list];
    switch(action.type){
        case 'Add':
            // newState.list.push({
            //     name:action.item,
            //     flag:false
            // })
            list.push({
                name:action.item,
                flag:false
            })
            console.log([...state.list,list]);
            return {...state,list:[...list]}
        case 'Del':
            list.splice(action.ind,1);
            //newState.list.splice(action.ind,1);
           return {...state,list:[...list]}  
        default:
          return state 
    }
}

let store=createStore(reducer)

export default store