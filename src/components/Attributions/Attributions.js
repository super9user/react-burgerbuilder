import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Attributions.css';

export default (props) => {
  return (
    <div className="attributions-container">
      <h5 className="text-msg">Attributions for this app:</h5>
      <ListGroup>
        <ListGroupItem tag="a" href="https://pngtree.com/">Graphics from pngtree.com</ListGroupItem>
      </ListGroup>
    </div>
  );
};