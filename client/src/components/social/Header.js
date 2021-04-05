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
import logo from '../../resources/FAMista.png'


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

    const goToHome = () => {
        let path = `/`;
        history.push(path);
    }

    const goToSocial = () => {
        let path = `/`;
        history.push(path);
    }

    const goToUsers = () => {
        let path = `/`;
        history.push(path);
    }

    if (currentUser)
    return (
        <div className='header__social'>
            <div className="header__left">
                <img src={logo} alt="famista-logo"></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search FAMista" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" onClick={goToHome} />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" onClick={goToHome} />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" onClick={goToHome} />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" onClick={goToSocial} />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" onClick={goToUsers} />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={currentUser.photoURL} />
                    <h4>{currentUser.displayName}</h4>
                </div>
                <IconButton>
                    <div className="header__option2">
                        <AddIcon />
                    </div>
                </IconButton>
                <IconButton>
                    <div className="header__option2">
                        <ForumIcon />
                    </div>
                </IconButton>
                <IconButton>
                    <div className="header__option2">
                        <NotificationsActiveIcon />
                    </div>
                </IconButton>
                <IconButton onClick={handleSubmit}>
                    <div className="header__option2">
                        <ExitToAppIcon />
                    </div>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
