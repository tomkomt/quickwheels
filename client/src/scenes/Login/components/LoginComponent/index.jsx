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
        if(this.state.currentUser) {
            return <p>{this.state.currentUser.get('fullName')}</p>;            
        } else {
            return <p>User not logged in</p>;
        }
    }

    componentDidMount() {
        this.props.onLoad();
        this.setCurrentUser(this.props.currentUser);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentUser != prevProps.currentUser) {
            this.setCurrentUser(this.props.currentUser);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setCurrentUser(nextProps.currentUser);
    }

    setCurrentUser(currentUserObj) {
        if(currentUserObj.length > 0) {
            this.setState({
                currentUser: Immutable.Map(currentUserObj[0])
            });
        }        
    }
}

export default LoginComponent;
