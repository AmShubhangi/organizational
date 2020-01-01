import React from 'react';
import '../../../../assets/scss/index1.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Password extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        host: '',
        username: '',
        password: '',
        apiKey: '',
        identifier: ''
      },
      submitted: false,
    }
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  render() {
    const { formData, submitted } = this.state;

    return (
      <Card>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <CardHeader
            className="blue-background"
            subheader="This information will let our application communicate with your WS1 server"
          // title="Password"
          />
          <div className="my-top-header">
            <h3 className="my-top-name">WSOne API Settings</h3>
          </div>
          <Divider />
          <CardContent>
            <TextValidator
              fullWidth
              label="UEM Host (E.G. Cn801.Awmdm.Com)"
              name="host"
              onChange={this.handleChange}
              value={formData.host}
              type="text"
              validators={['required']}
              errorMessages={['This field is required']}
              variant="outlined"
            />
            <TextValidator
              fullWidth
              label="UEM Username"
              name="username"
              style={{ marginTop: '1rem' }}
              type="text"
              onChange={this.handleChange}
              value={formData.username}
              validators={['required']}
              errorMessages={['This field is required']}
              variant="outlined"
            />
            <TextValidator
              fullWidth
              label="UEM Password"
              name="password"
              style={{ marginTop: '1rem' }}
              type="password"
              onChange={this.handleChange}
              value={formData.password}
              validators={['required']}
              errorMessages={['This field is required']}
              variant="outlined"
            />
            <TextValidator
              fullWidth
              label="UEM API Key"
              name="apiKey"
              style={{ marginTop: '1rem' }}
              type="text"
              onChange={this.handleChange}
              value={formData.apiKey}
              validators={['required']}
              errorMessages={['This field is required']}
              variant="outlined"
            />
            <TextValidator
              fullWidth
              label="UEM Global OG Identifier (E.G. 77)"
              name="identifier"
              style={{ marginTop: '1rem' }}
              type="text"
              onChange={this.handleChange}
              value={formData.identifier}
              validators={['required']}
              errorMessages={['This field is required']}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions className="button-section" >
            <div className="save-button">
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                disabled={submitted}
              >
                {submitted ? <Redirect to='/og-map' /> : 'Save'}
              </Button>
            </div>
          </CardActions>
        </ValidatorForm>
      </Card>
    );
  }
}


export default Password;
