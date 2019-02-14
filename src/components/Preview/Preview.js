import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import assets from '../../assets/burger-composition';

export default (props) => {
  return (
    <Container>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.topBun} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.salad} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.onion} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.jalapeno} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.tomato} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.cheese} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.patty} alt="" /></Col>
      </Row>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.bottomBun} alt="" /></Col>
      </Row>
    </Container>
  );
};