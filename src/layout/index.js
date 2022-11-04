import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Sidebar } from '../components'

const Layout = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} lg={2} className="px-0"> <Sidebar /></Col>
          <Col xs={10} md={10} lg={10} className="px-0">{props.children}</Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout