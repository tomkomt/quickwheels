import React from 'react';

class Standings extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someStandings' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherStandings' });
  }
}

export default Standings;
