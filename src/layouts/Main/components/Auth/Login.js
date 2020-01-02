import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/scss/index1.css';
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button,
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
    submitted: false,
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
      <div className="padding" >
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <Grid
            container
            spacing={4}
          >

            <Grid
              item
              md={2}
              xs={2}
            >
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
            >
              <Card
              >
                <form>
                  <div className="my-top-header-login">
                    <h3 className="my-top-name-login">Login</h3>
                  </div>
                  <Divider />
                  <CardContent>
                    <TextValidator
                      fullWidth
                      label="Email"
                      name="email"
                      onChange={this.handleChange}
                      type="text"
                      value={formData.email}
                      variant="outlined"
                      validators={['required', 'isEmail']}
                      errorMessages={['This field is required', 'email is not valid']}
                    />
                    <TextValidator
                      fullWidth
                      label="Password"
                      name="password"
                      onChange={this.handleChange}
                      style={{ marginTop: '1rem' }}
                      type="password"
                      value={formData.password}
                      variant="outlined"
                      validators={['required']}
                      errorMessages={['This field is required']}
                    />
                  </CardContent>
                  <Divider />
                  <CardActions >
                    <div style={{ margin: '0 auto' }}>
                      <Button
                        color="primary"
                        variant="outlined"
                        type="submit"
                      >
                        {submitted ? <Redirect to='/ws1-setting' /> : 'Login'}
                      </Button>
                    </div>
                  </CardActions>
                  <div className="newuser">
                    <Link to='/register' >Request Login!</Link>
                  </div>
                </form>
              </Card>
            </Grid>

            <Grid
              item
              md={3}
              xs={2}
            >
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    );
  }
};

Login.propTypes = {
  className: PropTypes.string
};

export default Login;
