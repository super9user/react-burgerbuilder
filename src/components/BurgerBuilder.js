import React from 'react';
import Preview from './Preview/Preview';
import { Container, Row, Col } from 'reactstrap';

export default (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm='6'>
          <Preview />
        </Col>
        <Col sm='6'>
          <Row className="justify-content-center">
            <Col xs='auto'>Column2</Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs='auto'>Column3</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};