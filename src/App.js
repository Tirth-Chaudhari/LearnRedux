import Logins from './Components/Login/Logins.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import React from 'react';
import Chats from './Components/Chat/Chats.js';
const App=()=>
{
    return(
      <Provider store={store}>
    
    
      <div>
         <Logins/>
         <Chats/>
      </div>
        

      </Provider>

     )
}

export default App;
