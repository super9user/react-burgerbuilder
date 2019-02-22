import React from 'react';
import { Form, Alert } from 'reactstrap';
import IngredientControl from './IngredientControl';

export default (props) => {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <Form>
        <Alert color="info">Select your Burger ingredients</Alert>
        <IngredientControl ingredient="salad" onChangeHandler={props.onChangeHandler} />
        <IngredientControl ingredient="onion" onChangeHandler={props.onChangeHandler} />
        <IngredientControl ingredient="jalapeno" displayName="jalapenos" onChangeHandler={props.onChangeHandler} />
        <IngredientControl ingredient="tomato" displayName="tomatoes" onChangeHandler={props.onChangeHandler} />
        <IngredientControl ingredient="cheese" onChangeHandler={props.onChangeHandler} />
        <IngredientControl ingredient="patty" displayName="patties" onChangeHandler={props.onChangeHandler} />
      </Form>
    </div>
  )
};
