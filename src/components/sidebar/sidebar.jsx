import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import assets 
import styles from './sidebar.module.css';
import logo from '../../assets/images/header-footer/logo.png';
import user from '../../assets/images/header-footer/user.jpg';
import { AiFillHome, AiFillExclamationCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Sidebar = () => {


  let activeStyle = {
    background: "#807957",
    color: "#fff",
    border: "1px solid #807957"
  }

  return (
      <div className={styles.sidebar_main_wrap} >

          <div className={styles.sidebar_top_image}>
              <img src={logo} alt="Aumana Logo" />
          </div>

          <div className={styles.sidebar_user_info}>
             <img src={user} alt="User Logo" />
             <h4>Jason Walter <span>Lead Developer</span></h4>
          </div>
          <div className={styles.sidebar_menu_links}>  
            <ul>
              <li> <NavLink to="/dashboard" style={({ isActive }) => isActive ? activeStyle : undefined}>Dashboard <span> <AiFillHome /> </span> </NavLink></li>
              <li> <NavLink to="/order" style={({ isActive }) => isActive ? activeStyle : undefined}>Orders <span> <BsFillCartFill /></span></NavLink></li>
              <li> <NavLink to="/address" style={({ isActive }) => isActive ? activeStyle : undefined}>Address <span> <FaMapMarkerAlt />  </span></NavLink></li>
              <li> <NavLink to="/account-detail" style={({ isActive }) => isActive ? activeStyle : undefined}>Account Detail <span> <AiFillExclamationCircle />  </span></NavLink></li>
              <li> <NavLink to="/change-password" style={({ isActive }) => isActive ? activeStyle : undefined}>Change Password   <span> <AiFillExclamationCircle />  </span></NavLink></li>
              <li> <Link to="/">Logout <span> <AiFillExclamationCircle />  </span></Link></li>
            </ul>
          </div>
      
      
      </div>
  )
}

export default Sidebar