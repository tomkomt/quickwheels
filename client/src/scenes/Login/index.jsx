import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Login' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Login' });
  }
}

export default Login;
