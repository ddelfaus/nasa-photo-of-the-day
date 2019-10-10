import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">previous</Button>{' '}
        <Button outline color="secondary">Next</Button>{' '}
        
      </div>
    );
  }
}