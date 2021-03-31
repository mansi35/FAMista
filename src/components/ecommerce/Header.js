import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import '../../css/Header.css';

function Header({length}) {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleAuthenticaton() {
        try {
            await logout();
            history.push("/login");
        } catch {
            alert("Failed to log out");
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                alt="Amazon logo"
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            
            
            <div className="header_search">
                <input 
                className="header_searchInput"
                type="text" 
                />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!currentUser && '/login'}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header__optionLineOne">Hello {!currentUser ? 'Guest' : currentUser.displayName}</span>
                        <span className="header__optionLineTwo">{currentUser ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>                
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns 
                    </span>
                    <span className="header_optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{length}</span>
                    </div>
                </Link>
                

            </div>
        </div>
    )
}

export default Header
