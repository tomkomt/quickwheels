import React from 'react';

class Qualification extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someQualification' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherQualification' });
  }
}

export default Qualification;
