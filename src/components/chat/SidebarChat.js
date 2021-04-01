import React, {useEffect, useState} from 'react';
import "../../css/SidebarChat.css";
import {Avatar} from "@material-ui/core";
import db from "../../firebase";
import {Link} from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");

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
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )
}

export default SidebarChat
