 export default function RouteReducer(state="Signin", action){
switch(action.type){
    case "page":
        state = action.data
        return state
    default:
        return state   
}
}
//action is dictionary  action = {"type": "page", "data" : "Signin"}
//export{fun1, fun2}