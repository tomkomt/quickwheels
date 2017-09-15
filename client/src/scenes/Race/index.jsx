import React from 'react';

class Race extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someRace' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherRace' });
  }
}

export default Race;
