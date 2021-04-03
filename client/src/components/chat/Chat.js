import React, {useState, useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import "../../css/Chat.css";
import firebase from "firebase";
import {useAuth} from "../../contexts/AuthContext";
// import User from '../friends/User';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        if (roomId) {
            db.collection('users').doc(currentUser.uid).collection('friendRooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().friendName);
            });

            db.collection('users').doc(currentUser.uid).collection('friendRooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>> ", input);

        db.collection('users').doc(currentUser.uid).collection('friendRooms').doc(roomId).collection('messages').add({
            message: input,
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        if (currentUser.uid === roomId.slice(28)) {
            db.collection('users').doc(roomId.slice(0, 28)).collection('friendRooms').doc(roomId).collection('messages').add({
                message: input,
                name: currentUser.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
        else {
            db.collection('users').doc(roomId.slice(28)).collection('friendRooms').doc(roomId).collection('messages').add({
                message: input,
                name: currentUser.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen{" "}
                    {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
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
                {messages.map(message => (
                    <p className={`chat__message ${message.name === currentUser.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

                {/* <p className="chat__message">
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p> */}
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
