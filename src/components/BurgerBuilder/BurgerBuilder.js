import React, { Component } from 'react';
import Preview from './Preview';
import Controls from './Controls/Controls';
import { Container, Row, Col } from 'reactstrap';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: 0,
      onion: 0,
      jalapeno: 0,
      tomato: 0,
      cheese: 0,
      patty: 0
    };
  }

  handleIngredientChange(event) {
    this.setState({
      [event.target.id]: event.target.value
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
                <Controls onChangeHandler={this.handleIngredientChange.bind(this)} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs='auto'>Column3</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default BurgerBuilder;