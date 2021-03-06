import React from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InputIcon from '@material-ui/icons/Input';
import logo from '../../../../assets/images/home-logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    color:'#257cfa'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const logOut = () => {
    return null;
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <h2 className="my-0 site-logo text-white">
            <img src={logo} width="150" height="35"  alt="ad"></img>
          </h2>
        </RouterLink>
        <div className={classes.flexGrow} />
        <div>
          {window.location.pathname !== '/login' && window.location.pathname !== '/register' ? <div>
            <NavLink activeClassName='is-active' className="my-top-nave-links" to='/ws1-setting'><SettingsIcon /> &nbsp;WSOne API Settings</NavLink>
            <NavLink activeClassName='is-active' className="my-top-nave-links" to='/og-map'  > <AccountTreeIcon /> &nbsp;OG Gesture</NavLink>
            <NavLink activeClassName='is-active' className="my-top-nave-links" to='/account'><AccountBoxIcon /> &nbsp;Account</NavLink>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
              onClick={logOut}
            >
              <InputIcon />
            </IconButton>
          </div>
            : ''}
        </div>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
