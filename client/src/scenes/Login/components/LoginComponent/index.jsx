import React from 'react';
import Immutable from 'immutable';

class LoginComponent extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            currentUser: null
        };
    }

    render() {
        console.log(this.props);
        if(this.state.currentUser) {
            return <p>{this.state.currentUser.get('fullName')}</p>;            
        } else {
            return <p>User not logged in</p>;
        }
    }

    componentDidMount() {
        this.props.onLoad();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentUser != prevProps.currentUser) {
            this.setState({
                currentUser: Immutable.Map(this.props.currentUser[0])
            });
        }
    }
}

export default LoginComponent;
