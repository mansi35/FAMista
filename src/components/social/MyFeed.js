import React from 'react'
import Feed from './Feed'
import Header from './Header'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import '../../App.css';

function MyFeed() {
    return (
        <div>
        <Header />
        <div className="app__bodySocial">
          <Sidebar />
          <Feed />
          <Widgets />
        </div> 
        </div>
    )
}

export default MyFeed
