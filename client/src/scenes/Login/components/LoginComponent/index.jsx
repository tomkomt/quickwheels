import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
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
        if(currentUserObj) {
            this.setState({
                currentUser: currentUserObj
            });
        }        
    }
}

export default LoginComponent;
