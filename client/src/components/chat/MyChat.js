import React from 'react'
import Header from '../social/Header'
import Chat from './Chat'
import Sidebar from './Sidebar'
import '../../App.css'

function MyChat() {
    return (
        <div>
            <Header /> 
            <div className="app">
                <div className="app__body">
                <Sidebar />
                <Chat />
                </div>
            </div>
        </div>
    )
}

export default MyChat
