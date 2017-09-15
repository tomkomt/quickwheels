import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from "../../scenes/Login";
import DriverSetup from "../../scenes/DriverSetup";
import VehicleSetup from "../../scenes/VehicleSetup";
import Qualification from "../../scenes/Qualification";
import Race from "../../scenes/Race";
import Standings from "../../scenes/Standings";

class SceneContainer extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'SceneContainer' };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/driverSetup">Driver Setup</Link></li>
            <li><Link to="/vehicleSetup">Car Setup</Link></li>
            <li><Link to="/qualification">Qualification</Link></li>
            <li><Link to="/race">Race</Link></li>
            <li><Link to="/standings">Standings</Link></li>
          </ul>

          <Route exact path="/" component={Login}/>
          <Route exact path="/driverSetup" component={DriverSetup}/>
          <Route exact path="/vehicleSetup" component={VehicleSetup}/>
          <Route exact path="/qualification" component={Qualification}/>
          <Route exact path="/race" component={Race}/>
          <Route exact path="/standings" component={Standings}/>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'SceneContainer' });
  }
}

export default SceneContainer;
