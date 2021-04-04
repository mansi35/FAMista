import React, {useEffect, useState} from 'react';
import "../../css/SidebarChat.css";
import {Avatar} from "@material-ui/core";
import db from "../../firebase";
import {Link} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    const {currentUser} = useAuth();

    useEffect(() => {
        if(id) {
            db.collection('users').doc(currentUser.uid).collection('friends').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data())))
            );
        }
    // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");

        if(roomName){
            db.collection("rooms").add({
                name: roomName
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/chat/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2 style={{color: '#440a67'}}>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title" style={{color: '#440a67'}}>Add New Chat</h3>
        </div>
    )
}

export default SidebarChat
