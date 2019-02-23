import React from 'react';
import { Badge, Row, Col, Button } from 'reactstrap';

export default (props) => {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <Row className="justify-content-center">
        <Col md='6'>
          <h5 align="center">Total Price: <Badge color="secondary">${props.totalPrice}</Badge></h5>
        </Col>
        <Col md='6'>
          <Button color="success" block>Checkout</Button>
        </Col>
      </Row>
      
    </div>
  );
}