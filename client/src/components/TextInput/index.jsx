import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return <label>{this.props.label}<input type="text" name={this.props.name} value={this.state.value} onChange={this.handleChange.bind(this)} /></label>;
  }

  handleChange(event) {
      this.setState({
          value: event.target.value
      });

      if(this.props.handleChange) {
          this.props.handleChange(event.target.value);
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  componentDidMount() {
    this.setState({ value: this.props.value });
  }
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func
}

export default TextInput;
