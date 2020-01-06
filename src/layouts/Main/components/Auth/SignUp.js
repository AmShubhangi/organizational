import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/scss/index1.css';
import {
    Card,
    CardContent,
    CardActions,
    Button,
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        formData: {
            companyname: '',
            workemail: '',
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
                    onSubmit={this.handleSubmit}>
                    <Grid
                        container
                        spacing={6}>
                        <Grid
                            item
                            md={3}
                            xs={2}>
                        </Grid>
                        <Grid
                            item
                            md={5}
                            xs={12}>
                            <Card>
                                <div className="my-top-header-login">
                                    <h3 className="my-top-name-login">Request Login</h3>
                                    <h5 className="my-sub-text">Register your first account to Sign in</h5>
                                </div>
                                <CardContent>
                                    <TextValidator
                                        fullWidth
                                        label="Company Name"
                                        name="companyname"
                                        onChange={this.handleChange}
                                        style={{ marginTop: '1rem' }}
                                        type="text"
                                        value={formData.companyname}
                                        variant="outlined"
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                    <TextValidator
                                        fullWidth
                                        label="Work Email"
                                        name="workemail"
                                        style={{ marginTop: '1rem' }}
                                        onChange={this.handleChange}
                                        type="text"
                                        value={formData.workemail}
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
                                <CardActions className="my-parent-button">
                                    <div className="login">
                                        <Button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block">
                                            {
                                                (submitted && 'Your form is submitted!')
                                                || (!submitted && 'Request')
                                            }
                                        </Button>
                                    </div>
                                </CardActions>
                                <div className="newuser">
                                    <p className="reg-text text-center"> Already have an account?</p> <Link to='/login' className="reg-text-color"> Login</Link>
                                </div>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={2}>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>);
    }
};

SignUp.propTypes = {
    className: PropTypes.string
};

export default SignUp;
