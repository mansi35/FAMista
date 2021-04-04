import React, {useState, useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Link, useParams } from 'react-router-dom';
import db from '../../firebase';
import "../../css/Chat.css";
import firebase from "firebase";
import {useAuth} from "../../contexts/AuthContext";
import { v1 as uuid } from "uuid";

function Chat() {
    var [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const {currentUser} = useAuth();
    const [id, setId] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection('users').doc(currentUser.uid).collection('friends').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().friendName);
            });

            db.collection('users').doc(currentUser.uid).collection('friends').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    // eslint-disable-next-line
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, [roomId]);

    const sendMessage = (e, customInput) => {
        e.preventDefault();
        if (customInput) {
            input = customInput;
        }
        console.log("You typed >>>> ", input);
        db.collection('users').doc(currentUser.uid).collection('friends').doc(roomId).collection('messages').add({
            message: input,
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        db.collection('users').doc(roomId).collection('friends').doc(currentUser.uid).collection('messages').add({
            message: input,
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    function create() {
        const id = uuid(); 
        setId(id); 
        var a = document.createElement('a');
        var link = document.createTextNode("this link");
        a.appendChild(link);
        a.title = "Enter room";
        a.href = `/room/${id}`;
        var customInput = `${currentUser.displayName} is inviting you to shop virtually! Please follow ${a}`;
        var clickEvent = new Event( 'click' );
        sendMessage(clickEvent, customInput);
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
                    <IconButton onClick={create}>
                        <Link to={`/room/${id}`} target="_blank">
                            <SearchOutlined />
                        </Link>
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
                        <img src={message.imageUrl} alt="" /> <br></br>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

                {/* <p className="chat__message">
                        <span className="chat__name">{message.name}</span>
                        <img src={message.image} alt="" />
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
