import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './login.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiMail, CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <section className={styles.Login_Main_Wrap}>
      <Container>
        <Row>
          <Col xs={10} md={6} className="mx-auto" > 
                <form className={styles.form_main_wrap}>
                  <h2>Log in to Dashboard</h2>
                  <div className={styles.form_group}>
                    <input type="email" placeholder="Enter email" /> 
                    <span><CiMail /></span>
                  </div>
                  <div className={styles.form_group}>
                    <input type="password" placeholder="Enter password" />
                    <span><CiLock /></span>
                  </div>
                  <button type="submit">Login</button>
                </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Login