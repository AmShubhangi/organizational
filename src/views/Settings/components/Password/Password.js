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
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
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
          <TextField
            fullWidth
            label="UEM Host (E.G. Cn801.Awmdm.Com)"
            name="password"
            // onChange={handleChange}
            type="text"
            // value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="UEM Username"
            name="confirm"
            // onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="text"
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="UEM Password"
            name="password"
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="UEM API Key"
            name="password"
            // onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="text"
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="UEM Global OG Identifier (E.G. 77)"
            name="password"
            // onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="text"
            // value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <CardActions className="button-section" >
          <div className="save-button">
            <Button
              color="primary"
              variant="outlined"
            >
              Save
          </Button>
          </div>
        </CardActions>
      </form>
    </Card>
    
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
