import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { Sidebar, Topbar } from './components';
import HomeComponent from 'components/home';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div>
      {window.location.pathname !== '/home' ? <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop
        })}
      >
        {window.location.pathname !== '/login' && window.location.pathname !== '/register' ? <Topbar onSidebarOpen={handleSidebarOpen} /> : ''}

        {window.location.pathname !== '/login' && window.location.pathname !== '/register' ? <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? 'persistent' : 'temporary'}
        /> : ''}
        <main className={classes.content}>
          {children}
          {/* <Footer /> */}
        </main>
      </div> : <HomeComponent />}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
