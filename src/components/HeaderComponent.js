import React, { use, useState } from 'react';
import { icon, HomeComponentURL } from '../Utils/Constants';
import HomeComponent from './Home';
import { useNavigate } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState('Login');
    const navigate = useNavigate();

    const isOnline = useOnlineStatus();

    const navigation = (label) => {
        switch(label){
            case 'image' : navigate('/');
                           break;
            case 'home' : navigate('/home');
                          break;

            case 'about' : navigate('/about');
                           break;
        
            case 'contact': navigate('/contact');
                            break;

            case 'cart':navigate('/cart');
                        break;
            case 'profile':navigate('/home/profile');
                        break;
            case 'settings':navigate('/home/settings');
                        break;

            case 'default' : navigate('page');
                             break;
        }   
    }

    return (<div className="header">
        <div className="logo">
            <img src={icon} alt="logo" className="logo-image" onClick={()=>navigation('image')}/>
        </div>
        <div className="nav-bar">
            <ul className="nav-items">
                <li>Online Status: {isOnline === true ? "🟢" : "🔴"} {isOnline}</li>
                <li onClick={() => navigation('home')}>Home</li>
                <li onClick={()=>navigation('about')}>About Us</li>
                <li onClick={()=>navigation('contact')}>Contact Us</li>
                <li onClick={()=>navigation('cart')}>Cart</li>
                <li onClick={() => navigation('profile')}>Profile</li>
                <li onClick={() => navigation('settings')}>Settings</li>
                <button className='login' onClick={()=>{
                    btnName == 'Login' ? setBtnName("LogOut") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
};

export default HeaderComponent;