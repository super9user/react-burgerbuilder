import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default (props) => {
  const displayName = props.displayName ? props.displayName : props.ingredient;
  const capitalizedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
  return (
    <FormGroup>
      <Label for={props.ingredient}>{capitalizedName}</Label>
      <Input type="number" id={props.ingredient} placeholder={0} min="0" max={props.max} onChange={props.onChangeHandler} />
    </FormGroup>
  );
};