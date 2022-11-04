import React from 'react'
import { Link } from 'react-router-dom';

// import assets 
import styles from "./header.module.css";
import user from '../../assets/images/header-footer/user.jpg';
import Accordion from 'react-bootstrap/Accordion';



const HeaderTop = () => {
  return (
    <div className={styles.header_top_main_wrap}>
          <Accordion>
              <Accordion.Item eventKey="0">
                  <Accordion.Header>    <img src={user} alt="User Logo" /> Jason Walter</Accordion.Header>
                  <Accordion.Body>
                        <ul>
                            <li><Link to="">Logout</Link></li>
                        </ul>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
    </div>
  )
}

export default HeaderTop