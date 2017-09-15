import React from 'react';

class DriverSetup extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'DriverSetup' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'DriverSetup' });
  }
}

export default DriverSetup;
