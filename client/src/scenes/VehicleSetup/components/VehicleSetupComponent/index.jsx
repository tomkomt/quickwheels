import React from 'react';
import Immutable from 'immutable';
import TextInput from '../../../../components/TextInput';

class VehicleSetupComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            id: 0,
			frontWing: 0,
			rearWing: 0,
			gearbox: 0,
			suspension: 0,
			turbo: 0
		};
	}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div><TextInput label="Front Wing" name="frontWing" value={this.state.frontWing} handleChange={this.handleFrontWingChange.bind(this)}/></div>
                    <div><TextInput label="Rear Wing" name="rearWing" value={this.state.rearWing} handleChange={this.handleRearWingChange.bind(this)}/></div>
                    <div><TextInput label="Gearbox" name="gearbox" value={this.state.gearbox} handleChange={this.handleGearboxChange.bind(this)}/></div>
                    <div><TextInput label="Suspension" name="suspension" value={this.state.suspension} handleChange={this.handleSuspensionChange.bind(this)}/></div>
					<div><TextInput label="Turbo" name="turbo" value={this.state.turbo} handleChange={this.handleTurboChange.bind(this)}/></div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleFrontWingChange(value) {
        let newState = Object.assign({}, this.state);
        newState.frontWing = +value;
        this.setState(newState);
    }

    handleRearWingChange(value) {
        this.setState({
            rearWing: +value
        })
    }

	handleGearboxChange(value) {
        this.setState({
            gearbox: +value
        })
    }

    handleSuspensionChange(value) {
        this.setState({
            suspension: +value
        })
    }

	handleTurboChange(value) {
        this.setState({
            turbo: +value
        })
    }

	handleSubmit(event) {
        event.preventDefault();
        let passState = this.state;
        passState.assignedUserId = this.props.vehicleSetup.get('assignedUserId');
        passState.teamId = this.props.vehicleSetup.get('teamId');
        this.props.onSaveChanges(this.props.vehicleSetup.get('id'), passState);
    }

    componentDidMount() {
        this.props.onLoad(this.props.currentUser.get('assignedUserId'), this.props.currentUser.get('assignerTeamId'));
        this.setState({
            id: this.props.vehicleSetup.get('id'),
            frontWing: this.props.vehicleSetup.get('frontWing'),
            rearWing: this.props.vehicleSetup.get('rearWing'),
            gearbox: this.props.vehicleSetup.get('gearbox'),
			suspension: this.props.vehicleSetup.get('suspension'),
			turbo: this.props.vehicleSetup.get('turbo')
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.vehicleSetup.get('id'),
            frontWing: nextProps.vehicleSetup.get('frontWing'),
            rearWing: nextProps.vehicleSetup.get('rearWing'),
            gearbox: nextProps.vehicleSetup.get('gearbox'),
			suspension: nextProps.vehicleSetup.get('suspension'),
			turbo: nextProps.vehicleSetup.get('turbo')
        });
    }

}

export default VehicleSetupComponent;
