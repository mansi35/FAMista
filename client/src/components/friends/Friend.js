import { Avatar } from '@material-ui/core';
import React from 'react'
import '../../css/Users.css';
import likeIcon from '../../resources/like-16x16(1).png';
import emailIcon from '../../resources/email.png';

function Friend({key, id, emailAdd, name, profilePic}) {
    return (
        // <div className="checkoutProduct">
        //     <div className="checkoutProduct_info">
        //     <Avatar src={profilePic} />
        //         <p className="checkoutProduct_title">
        //             {name}
        //         </p>
        //         <p className="checkoutProduct_price">
        //             <strong>Email ID: {emailAdd}</strong>
        //         </p>
        //     </div>
        // </div>

    <div class="card" style={{height: 300}}>
        <div class="card-header">
            <h1>Image</h1>
        </div>
        <div class="card-body">
            <div className='card-inline'><Avatar src={profilePic} />&nbsp;&nbsp;
                <h3>{name}</h3>
            </div>
            {/* <p><span><img src={likeIcon} alt="like" style={{height:16, width:16, marginRight:10}} /></span>{gender}</p> */}
            <br/>
            <p style={{marginLeft:-30}}><span><img src={emailIcon} alt="like" style={{height:22, width:22, marginRight:5}} /></span>{emailAdd}</p>
        </div>
    </div>
    )
}

export default Friend
