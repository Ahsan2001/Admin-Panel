import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillCartFill } from "react-icons/bs";

import styles from "./order.module.css";


const OrderTable = () => {
  return (
      <section className={styles.Main_wrap}>
          <Container fluid>
              <Row>
                  <Col xs={11} md={11} className="mx-auto">
                      <div className={styles.inner_Content}>
                          <h1> <BsFillCartFill /> Order</h1>
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th>Order ID</th>
                                      <th>Order Date</th>
                                      <th>Price</th>
                                      <th>Status</th>
                                      <th>Detail</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>614</td>
                                      <td>05/09/2022</td>
                                      <td>$210</td>
                                      <td>Pending  /<button className={styles.cancel_button}>Cancel Order</button></td>
                                      <td><Link to="/view-orders" className={styles.view_order}>View Orders</Link></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default OrderTable