import './App.css';
import React from 'react';
import Form from './form';
import { validationRules } from './validation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      errors: {},
      isFormValid: false
    };
  }

  checkField = (fieldName, value) => {
    const { pattern, message } = validationRules[fieldName];

    if (pattern && !pattern.test(value)) return message;

    return '';
  }

  checkForm = () => {
    const errors = {};

    for (const fieldName in validationRules) {
      const value = this.state[fieldName];
      errors[fieldName] = this.checkField(fieldName, value);
    }

    this.setState({ errors });
    return Object.values(errors).every((error) => error === '');
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.setState({ isFormValid: this.checkForm() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email ||
      prevState.password !== this.state.password ||
      prevState.firstname !== this.state.firstname ||
      prevState.lastname !== this.state.lastname
    ) {
      this.setState({ isFormValid: this.checkForm() });
    }
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <Form
            email={this.state.email}
            password={this.state.password}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            errors={this.state.errors}
            handleChange={this.handleChange}
          />
          <button type='sumbit' disabled={!this.state.isFormValid}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;