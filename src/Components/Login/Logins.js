import { connect } from "react-redux";
import loginReducer from "../../store/login/reducer";
import { useState } from "react";
import { login,logout } from "../../store/login/actions";



const Logins=({loggedInUsers,login,logout})=>
{
    const [username,setUsername]=useState('');
   
    const handleLogin=()=>
    {
        if(username && !loggedInUsers.includes(username))
        {
            login(username);
            setUsername('');
        }
    }

    const handleLogout=()=>
    {
            if(loggedInUsers.includes(username))
            {
                logout(username);
                setUsername('');
            }
    }
    
    return (
        <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-between">
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Login
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                    Logout
                </button>
            </div>
        </div>
        <ul>
            {
            loggedInUsers.map((user,index)=>
            (
                <li key={index}>{user}</li>
            ))
            }
         </ul>
        
        </>

    )
   

}

const mapStateToProps=(state)=>
(
    {
        loggedInUsers:state.loggedInUsers,

    }
)
const mapDispatchToProps=(dispatch)=>
(
    {
        login:(username)=>dispatch(login(username)),
        logout:(username)=>dispatch(logout(username))

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Logins);