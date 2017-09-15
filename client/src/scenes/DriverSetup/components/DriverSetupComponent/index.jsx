import React from 'react';
import Immutable from 'immutable';

class DriverSetupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pace: 0,
            agresivity: 0,
            consistency: 0,
            startReaction: 0
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Pace: <input type="text" name="pace" value={this.state.pace} onChange={this.handleChangeSetup.bind(this)} /></label>
                    <label>Agresivity: <input type="text" name="agresivity" value={this.state.agresivity} onChange={this.handleChangeSetup.bind(this)} /></label>
                    <label>Consistency: <input type="text" name="consistency" value={this.state.consistency} onChange={this.handleChangeSetup.bind(this)} /></label>
                    <label>Start Reaction: <input type="text" name="startReaction" value={this.state.startReaction} onChange={this.handleChangeSetup.bind(this)} /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleChangeSetup(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        switch(fieldName) {
            case 'pace':
                this.setState({
                    pace: fieldValue
                });
            break;

            case 'agresivity':
                this.setState({
                    agresivity: fieldValue
                });
            break;            

            case 'consistency':
                this.setState({
                    consistency: fieldValue
                });
            break;

            case 'startReaction':
                this.setState({
                    startReaction: fieldValue
                });
            break;
        }
    }

    handleSubmit(event) {

    }

    componentDidMount() {
        this.props.onLoad(this.props.currentUser.get('userId'));
        this.setState({
            pace: this.props.driverSetup.get('pace'),
            agresivity: this.props.driverSetup.get('agresivity'),
            consistency: this.props.driverSetup.get('consistency'),
            startReaction: this.props.driverSetup.get('startReaction')
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pace: nextProps.driverSetup.get('pace'),
            agresivity: nextProps.driverSetup.get('agresivity'),
            consistency: nextProps.driverSetup.get('consistency'),
            startReaction: nextProps.driverSetup.get('startReaction')
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.driverSetup != prevProps.driverSetup) {
            this.setState({
                pace: this.props.driverSetup.get('pace'),
                agresivity: this.props.driverSetup.get('agresivity'),
                consistency: this.props.driverSetup.get('consistency'),
                startReaction: this.props.driverSetup.get('startReaction')
            });
        }
    }

}

export default DriverSetupComponent;
