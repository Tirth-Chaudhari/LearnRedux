import { LOGIN,LOGOUT } from "./actionType";

const loginReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case LOGIN:
            return [...state,action.payload.username]   
        case LOGOUT:
            return  state.filter((user)=> user != action.payload.username )     
        default:
            return state 
        
    }
}

export default loginReducer;