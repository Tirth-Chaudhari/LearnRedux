import { useState } from "react";
import loginReducer from "../../store/login/reducer";

import { sendMessage } from "../../store/chat/actions";
import { connect } from "react-redux";

const Chats = ({ loggedInUsers, chatMessages, sendMessage }) => {
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message && loggedInUsers && loggedInUsers.includes(sender) > 0) {
            sendMessage(sender, message);
            setMessage(''); 
        }   
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Sender"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                    onClick={() => handleSendMessage()}
                    disabled={!sender || !message   }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-md"
                >
                    Send
                </button>
            </div>
            <div>
                {chatMessages && chatMessages.map((msg, index) => (
                    <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
                ))}
            </div>
        </div>
    );
};


const mapStateToProps=(state)=>
(
    {   loggedInUsers:state.loggedInUsers,
        chatMessages:state.chatMessages

    }
)
const mapDispatchToProps=(dispatch)=>
(
    {
        sendMessage:(sender,message)=>dispatch(sendMessage(sender,message))

    }
)


export default connect(mapStateToProps,mapDispatchToProps)(Chats);
