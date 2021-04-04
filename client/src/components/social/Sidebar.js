import React from 'react';
import '../../css/SidebarSocial.css';
import SidebarRow from './SidebarRow';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {useAuth} from '../../contexts/AuthContext';

function Sidebar() {
    const {currentUser} = useAuth();
    return (
        <div className="sidebar__social">
            <SidebarRow src={currentUser.photoURL} title={currentUser.displayName} />
            {/* <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" /> */}
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Chat" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
        </div>
    )
}

export default Sidebar
