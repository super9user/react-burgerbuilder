import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import assets from '../../assets/burger-composition';

export default (props) => {
  const salads = getIngredientsRows(props, "salad"),
    onions = getIngredientsRows(props, "onion"),
    jalapenos = getIngredientsRows(props, "jalapeno"),
    tomatoes = getIngredientsRows(props, "tomato"),
    cheese = getIngredientsRows(props, "cheese"),
    patties = getIngredientsRows(props, "patty");

  return (
    <Container className="shadow p-3 mb-5 bg-white rounded">
      <Row key="bun-top">
        <Col><img className='mx-auto d-block' src={assets.topBun} alt="" /></Col>
      </Row>
      {salads}
      {onions}
      {jalapenos}
      {tomatoes}
      {cheese}
      {patties}
      <Row key="bun-bottom">
        <Col><img className='mx-auto d-block' src={assets.bottomBun} alt="" /></Col>
      </Row>
    </Container>
  );
};

function getIngredientsRows(props, type) {
  const ingredient = [];
  for (let i = 0; i < props[type]; i++) {
    ingredient.push((
      <Row key={`${type}${i}`}>
        <Col><img className='mx-auto d-block' src={assets[type]} alt="" /></Col>
      </Row>
    ));
  }
  return ingredient;
}