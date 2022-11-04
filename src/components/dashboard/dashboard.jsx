import React from 'react';
import styles from './dashboard.module.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillHome } from "react-icons/ai";

const DashboardInner = () => {
  return (
    <section className={styles.Main_wrap}>
        <Container fluid>
            <Row>
                <Col xs={11} md={11} className="mx-auto">
                    <div className={styles.inner_Content}>
                        <h1> <AiFillHome /> Dashboard</h1>
                        <h5>Hello Jason (not Jason? <Link to="/"> Log out </Link>) </h5>
                        <h5>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h5>  
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default DashboardInner