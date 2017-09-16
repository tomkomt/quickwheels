import React from 'react';
import Immutable from 'immutable';
import TextInput from '../../../../components/TextInput';

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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextInput label="Pace" name="pace" value={this.state.pace} handleChange={this.handlePaceChange.bind(this)}/>
                    <TextInput label="Agresivity" name="agresivity" value={this.state.agresivity} handleChange={this.handleAgresivityChange.bind(this)}/>
                    <TextInput label="Consistency" name="consistency" value={this.state.consistency} handleChange={this.handleConsistencyChange.bind(this)}/>
                    <TextInput label="Start Reaction" name="startReaction" value={this.state.startReaction} handleChange={this.handleStartReactionChange.bind(this)}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handlePaceChange(value) {
        this.setState({
            pace: +value
        })
    }

    handleAgresivityChange(value) {
        this.setState({
            agresivity: +value
        })
    }

    handleConsistencyChange(value) {
        this.setState({
            consistency: +value
        })
    }

    handleStartReactionChange(value) {
        this.setState({
            startReaction: +value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let passState = this.state;
        passState.userId = this.props.driverSetup.get('userId');
        this.props.onSaveChanges(this.props.driverSetup.get('id'), passState);
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
