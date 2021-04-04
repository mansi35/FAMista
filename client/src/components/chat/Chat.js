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
    // eslint-disable-next-line
    var [id, setId] = useState('');

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
        var a = document.createElement('a');
        var link = document.createTextNode("this link");
        a.appendChild(link);
        a.title = "Enter room";
        a.href = `/room/${id}`;
        var customInput = `${currentUser.displayName} is inviting you to shop virtually! Please click on this message to join! ${a}`;
        console.log(customInput.slice(0, customInput.length-36))
        var clickEvent = new Event( 'click' );
        sendMessage(clickEvent, customInput);
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3 style={{color: 'white'}}>{roomName}</h3>
                    <p style={{color: 'white'}}>Last Seen{" "}
                    {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton onClick={create}>
                        <Link to={`/room/${id}`} target="_blank">
                            <SearchOutlined />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <AttachFile  />
                    </IconButton>
                    <IconButton>
                        <MoreVert  />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === currentUser.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {!message.imageUrl? <span className="d-none"></span> : 
                        <Link to="/">
                            <img height="250" src={message.imageUrl} alt="" /><br />
                        </Link>
                        }
                        {message.message.slice(0, message.message.length-36) === `${message.name} is inviting you to shop virtually! Please click on this message to join! http://localhost:3000/room/`? 
                            <span className="d-none">{id = message.message.slice(message.message.length-36)}</span> : 
                            <span></span>
                        }
                        {id !== '' ? 
                            <Link to={`/room/${id}`} target="_blank">
                                {message.message}
                            </Link> 
                            : <span>{message.message}</span>
                        }
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon fontSize="large" style={{color: '#eff2f5'}}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon fontSize="large" style={{color: '#eff2f5'}}/>
            </div>
        </div>
    )
}

export default Chat