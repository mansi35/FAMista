import React, {useState,useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import "../../css/Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(()=>{
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>> ", input);

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Fariyal</span>
                    This is a message.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Fariyal</span>
                    This is a message.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Fariyal</span>
                    This is a message.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Fariyal</span>
                    This is a message.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Fariyal</span>
                    This is a message.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon fontSize="large" />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon fontSize="large"/>
            </div>
        </div>
    )
}

export default Chat
