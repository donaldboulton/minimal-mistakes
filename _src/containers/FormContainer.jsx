import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../lib/components/CheckBox';  
import Input from '../lib/components/Input';  
import TextArea from '../lib/components/TextArea';  
import Select from '../lib/components/Select';
import Button from '../lib/components/Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: ''

      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of the user */}
        <Input /> {/* Input for Age */} 
        <Select /> {/* Gender Selection */}
        <CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
        <TextArea /> {/* About you */}
        <Button /> { /*Submit */ }
        <Button /> {/* Clear the form */}
      </form>
    );
  }
}

export default FormContainer;
}
