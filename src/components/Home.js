import React from 'react';
import Preview from './Preview/Preview';
import { Container, Row, Col } from 'reactstrap';

export default (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col><Preview /></Col>
      </Row>
      <Row className="justify-content-center">
        <Col>Column2</Col>
      </Row>
      <Row className="justify-content-center">
        <Col>Column3</Col>
      </Row>
    </Container>
  );
};