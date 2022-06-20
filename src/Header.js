import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "./StateProvider"

function Header() {
    const[{basket}]=useStateValue();
  return (
    <nav className="header">
        <Link to="/">
            <img className="header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
        </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchOutlinedIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            <Link to="/login" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello man</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header__optionLineTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            
            </Link>
        </div>
    </nav>
  )
}

export default Header