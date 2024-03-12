import { SEND_MESSAGE } from "./actionType";


export const sendMessage=(sender,message)=>
(
    {
        type:SEND_MESSAGE,
        payload:{sender,message}
    }
)



