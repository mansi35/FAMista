import React from 'react'
import Header from '../social/Header'
import Sidebar from './Sidebar'
import ChatEmpty from './ChatEmpty'
import '../../App.css'

function MyChatEmpty() {
    return (
        <div>
            <Header />
            <div className="app">
            <div className="app__body">
                <Sidebar />
                <ChatEmpty />
            </div>
            </div>
        </div>
    )
}

export default MyChatEmpty
