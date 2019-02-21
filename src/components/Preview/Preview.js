import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import assets from '../../assets/burger-composition';

export default (props) => {
  const salads = getIngredientsRows(props.salad, assets.salad),
    onions = getIngredientsRows(props.onion, assets.onion),
    jalapenos = getIngredientsRows(props.jalapeno, assets.jalapeno),
    tomatoes = getIngredientsRows(props.tomato, assets.tomato),
    cheese = getIngredientsRows(props.cheese, assets.cheese),
    patties = getIngredientsRows(props.patty, assets.patty);

  return (
    <Container>
      <Row>
        <Col><img className='mx-auto d-block' src={assets.topBun} alt="" /></Col>
      </Row>
      {salads}
      {onions}
      {jalapenos}
      {tomatoes}
      {cheese}
      {patties}
      <Row>
        <Col><img className='mx-auto d-block' src={assets.bottomBun} alt="" /></Col>
      </Row>
    </Container>
  );
};

function getIngredientsRows(iterateLength, assetSrc) {
  const ingredient = [];
  for (let i = 0; i < iterateLength; i++) {
    ingredient.push((
      <Row>
        <Col><img className='mx-auto d-block' src={assetSrc} alt="" /></Col>
      </Row>
    ));
  }
  return ingredient;
}