import React from 'react';
import '../../css/SidebarSocial.css';
import SidebarRow from './SidebarRow';
import { useHistory } from 'react-router';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {useAuth} from '../../contexts/AuthContext';
import goToChat from './Header';
import goToDashboard from './Header';
import goToHome from './Header';
import goToMyBasket from './Header';

function Sidebar() {
    const {currentUser} = useAuth();
    const history = useHistory();

    const goToUsers = () => {
        let path = `/users`;
        history.push(path);
    }
    return (
        <div className="sidebar__social">
            <SidebarRow src={currentUser.photoURL} title={currentUser.displayName} onClick={goToDashboard}/>
            {/* <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" /> */}
            <SidebarRow Icon={HomeIcon} title="Home" onClick={goToHome}/>
            <SidebarRow Icon={PeopleIcon} title="Users" onClick={goToUsers}/>
            <SidebarRow Icon={ChatIcon} title="Chat" onClick={goToChat}/>
            {/* <SidebarRow Icon={StorefrontIcon} title="Marketplace" /> */}
            <SidebarRow Icon={ShoppingBasketIcon} title="My Basket" onClick={goToMyBasket}/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
        </div>
    )
}

export default Sidebar
