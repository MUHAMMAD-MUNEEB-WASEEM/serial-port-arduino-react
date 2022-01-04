import { useEffect, useState } from "react";
import io from 'socket.io-client';

function App() {
    var socket = null;
    const [settings, setSettings] = useState([]);
    const [port, setPorts] = useState([])
  
  
    useEffect(()=> {
        socket = io('http://localhost:8888', {transports: ['websocket', 'polling', 'flashsocket']});

        
         socket.on('serialdata', (data) => {
            // we get settings data and can do something with it
            setSettings(data)
            setPorts(data.portConn)
            // console.log(data)
          });


    },[])

    return (
        <div>
            {settings.data}
            {/* {port} */}
        </div>
    )
}

export default App
