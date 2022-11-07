import React from 'react'
import { Link } from 'react-router-dom';
// import assets 
import styles from "./header.module.css";
import user from '../../assets/images/header-footer/user.jpg';
import Dropdown from 'react-bootstrap/Dropdown';


const HeaderTop = () => {
  return (
    <div className={styles.header_top_main_wrap}>
        <div className={styles.header_dropdown}>
              <Dropdown align="end">
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={user} alt="User Logo" /> <span> Jason Walter</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.main_dropdown_wrap}>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/order">Orders</Link>
                    <Link to="/address">Address</Link>
                    <Link to="/account-detail">Account Detail</Link>
                    <Link to="/change-password">Change Password</Link>
                    <Link to="/Logout">Logout</Link>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  )
}

export default HeaderTop