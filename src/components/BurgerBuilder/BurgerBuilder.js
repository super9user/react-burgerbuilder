import React, { Component } from 'react';
import Preview from './Preview';
import Controls from './Controls/Controls';
import Order from './Order';
import { Container, Row, Col } from 'reactstrap';
import prices from '../../prices';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: 0,
      onion: 0,
      jalapeno: 0,
      tomato: 0,
      cheese: 0,
      patty: 0,
      totalPrice: prices.base
    };
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState(state => {
      const changedValue = (value - state[id]) * prices[id];
      return {
        [id]: value,
        totalPrice: state.totalPrice + changedValue
      }
    });
  }

  render() {
    return (
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col lg='6'>
            <Preview salad={this.state.salad} onion={this.state.onion} 
            jalapeno={this.state.jalapeno} tomato={this.state.tomato}
            cheese={this.state.cheese} patty={this.state.patty} />
          </Col>
          <Col lg='6'>
            <Row className="justify-content-center">
              <Col xs='12'>
                <Controls onChangeHandler={this.handleIngredientChange} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs='12'>
                <Order totalPrice={this.state.totalPrice} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default BurgerBuilder;