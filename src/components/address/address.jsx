import React from 'react'
import styles from "./address.module.css";
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AddressInner = () => {
  return (
      <section className={styles.Main_wrap}>
          <Container fluid>
              <Row>
                  <Col xs={11} md={11} className="mx-auto">
                      <div className={styles.inner_Content}>
                          {/* <h1><FaMapMarkerAlt />  Address</h1> */}
                          <form className={styles.form_main_wrap}>
                              <h3>Billing address</h3>

                                <Row>
                                <Col xs={12} md={6} className="px-1">
                                    <input className="form-control" type="text" placeholder="First Name" />
                                </Col>
                                <Col xs={12} md={6} className="px-1">
                                    <input className="form-control" type="text" placeholder="Last Name" />
                                </Col>
                                  <Col xs={12} md={6} className="px-1">
                                      <input className="form-control" type="email" placeholder="Email" />
                                  </Col>
                                  <Col xs={12} md={6} className="px-1">
                                      <input className="form-control" type="number" placeholder="Phone" />
                                  </Col>
                                  <Col xs={12} md={12} className="px-1">
                                      <input className="form-control" type="text" placeholder="Company Name" />
                                  </Col>
                                  <Col xs={12} md={12} className="px-1">
                                      <input className="form-control" type="text" placeholder="Country / Region" />
                                  </Col>
                                  <Col xs={12} md={6} className="px-1">
                                      <input className="form-control" type="text" placeholder="State" />
                                  </Col>
                                  <Col xs={12} md={6} className="px-1">
                                      <input className="form-control" type="text" placeholder="Zip" />
                                  </Col>
                                  <Col xs={12} md={12} className="px-1">
                                      <input className="form-control" type="text" placeholder="Street Address" />
                                  </Col>

                                  <Col xs={12} md={12} className="px-1">
                                      <button className={styles.submit_btn}> Save Changes</button>
                                  </Col>




                                </Row>
                            
                          </form>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default AddressInner