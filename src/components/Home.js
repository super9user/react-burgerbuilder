import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default (props) => {
  return (
      <Jumbotron className="m-auto" style={{ width: '80%'}}>
        <h1 className="display-4">Welcome to Burger Mania!</h1>
        <p className="lead">The ultimate shop for build your own burger.</p>
        <hr className="my-2" />
        <p>Add as many patties, salads, cheese as you want. We are no one to judge.</p>
        <p className="lead">
        <Button color="primary" onClick={() => { props.history.push('/burger-builder') }}>Build your Burger</Button>{' '}
        <Button color="primary" onClick={() => { props.history.push('/orders') }}>Past Orders</Button>
        </p>
      </Jumbotron>
  );
};