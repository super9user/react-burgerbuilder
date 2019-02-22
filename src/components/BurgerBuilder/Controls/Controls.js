import React, { PureComponent } from 'react';
import { Form, Alert } from 'reactstrap';
import IngredientControl from './IngredientControl';

class Controls extends PureComponent {

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
        <Form>
          <Alert color="info">Select your Burger ingredients</Alert>
          <IngredientControl ingredient="salad" onChangeHandler={this.props.onChangeHandler} />
          <IngredientControl ingredient="onion" onChangeHandler={this.props.onChangeHandler} />
          <IngredientControl ingredient="jalapeno" displayName="jalapenos" onChangeHandler={this.props.onChangeHandler} />
          <IngredientControl ingredient="tomato" displayName="tomatoes" onChangeHandler={this.props.onChangeHandler} />
          <IngredientControl ingredient="cheese" onChangeHandler={this.props.onChangeHandler} />
          <IngredientControl ingredient="patty" displayName="patties" onChangeHandler={this.props.onChangeHandler} />
        </Form>
      </div>
    )
  }
}

export default Controls;
