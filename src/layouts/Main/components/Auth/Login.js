import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import '../../../../assets/scss/index1.css';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField
} from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Password = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="padding" >
      <Grid
        container
        spacing={4}
      >

        <Grid
          item
          md={3}
          xs={2}
        >
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <Card
            {...rest}
            className={clsx(classes.root, className)}
          >
            <form>
              <div className="my-top-header-login">
                <h3 className="my-top-name-login">Login</h3>
              </div>
              <Divider />
              <CardContent>
                <TextField
                  fullWidth
                  label="Email"
                  name="Email"
                  // onChange={handleChange}
                  type="text"
                  // value={values.password}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  // onChange={handleChange}
                  style={{ marginTop: '1rem' }}
                  type="password"
                  // value={values.confirm}
                  variant="outlined"
                />
              </CardContent>
              <Divider />
              <CardActions >
                <div style={{ margin: '0 auto' }}>
                  <Button
                    color="primary"
                    variant="outlined"
                  >
                    Login
          </Button>
                </div>
              </CardActions>
              <div className="newuser">
                <a href="">Create Account?</a>
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
    </div>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
