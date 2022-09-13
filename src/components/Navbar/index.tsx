import React from 'react';
import './index.css';
import Logo from '../../assets/logo.svg';


const Navbar = () => {

    return(
        <div className='navbar'>
        <div className="logo">
            <img src={Logo} width={100}/>
        </div>

        </div>
    )
}

export default Navbar;