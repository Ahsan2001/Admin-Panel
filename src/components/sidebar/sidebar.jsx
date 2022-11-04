import React from 'react';
import {Link} from 'react-router-dom';
// import assets 
import styles from './sidebar.module.css';
import logo from '../../assets/images/header-footer/logo.png';
import user from '../../assets/images/header-footer/user.jpg';
import { AiFillHome, AiFillSetting, AiFillAppstore, AiFillExclamationCircle, AiFillMail } from "react-icons/ai";


const Sidebar = () => {
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
              <li> <Link to="" >Dashboard <span> <AiFillHome /> </span> </Link></li>
              <li> <Link to="" >Profile <span> <AiFillSetting /></span></Link></li>
              <li> <Link to="" >Account <span> <AiFillAppstore />  </span></Link></li>
          <li> <Link to="" >Notifications  <span> <AiFillMail />  </span></Link></li>
          <li> <Link to="" >Logout  <span> <AiFillExclamationCircle />  </span></Link></li>
            </ul>
          </div>
      
      
      </div>
  )
}

export default Sidebar