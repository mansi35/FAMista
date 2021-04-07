import React from 'react'
import '../../css/HeaderSocial.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, IconButton } from '@material-ui/core';
import {useAuth} from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import logo_Famista from '../../resources/logo_Famista.png'
import AssignmentIcon from '@material-ui/icons/Assignment';

function Header({length}) {
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
    };

    const goToSurveyResults = () => {
        let path = `/surveyResults`;
        history.push(path);
    };

    const goToSocial = () => {
        let path = `/social`;
        history.push(path);
    }

    const goToFriends = () => {
        let path = `/users`;
        history.push(path);
    }

    const goToDashboard = () => {
        let path = `/dashboard`;
        history.push(path);
    }

    const goToSharedBaskets = () => {
        let path = `/baskets`;
        history.push(path);
    }

    const goToMyBasket = () => {
        let path = `/checkout`;
        history.push(path);
    }

    const goToChat = () => {
        let path = `/chat`;
        history.push(path);
    }

    const goToRequests = () => {
        let path = `/requests`;
        history.push(path);
    }

    if (currentUser)
    return (
        <div className='header__social'>
            <div className="header__left">
            <img src={logo_Famista} alt="famista-logo" onClick = {goToHome}></img>
                {/* <Link to = "\" >
                
                </Link> */}
                
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search FAMista" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" onClick={goToHome} />
                </div>
                <div className="header__option header__option--active">
                    <AssignmentIcon fontSize="large" onClick={goToSurveyResults} />
                </div>
                <div className="header__option">
                    <ShoppingBasketIcon fontSize="large" onClick={goToMyBasket} />
                    <span className="header_optionLineTwo header_basketCount">{length}</span>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" onClick={goToSocial} />
                </div>
                <div className="header__option">
                    <img src="https://img.icons8.com/material/80/000000/favorite-cart.png" onClick={goToSharedBaskets} 
                        style={{height: 32, width: 32, filter: "brightness(0) invert(1)"}} alt="shared basket icon"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" onClick={goToFriends} />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={currentUser.photoURL} />
                    <a onClick={goToDashboard} style={{color: "white", cursor:"pointer"}}>{currentUser.displayName}</a>
                </div>
                <IconButton>
                    <div className="header__option2">
                        <AddIcon />
                    </div>
                </IconButton>
                <IconButton>
                    <div className="header__option2">
                        <ForumIcon onClick={goToChat} />
                    </div>
                </IconButton>
                <IconButton>
                    <div className="header__option2">
                        <NotificationsActiveIcon onClick={goToRequests}/>
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
