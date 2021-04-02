import React from 'react'
import '../../css/HeaderSocial.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, IconButton } from '@material-ui/core';
import {useAuth} from '../../contexts/AuthContext';
import { useHistory } from 'react-router';


function Header() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleSubmit() {
        try {
            await logout();
            history.push("/login");
        } catch {
            alert("Failed to log out");
        }
    }

    return (
        <div className='header__social'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="fb-logo"></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={currentUser.photoURL} />
                    <h4>{currentUser.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton onClick={handleSubmit}>
                    <ExitToAppIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
