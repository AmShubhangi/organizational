import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
  // const pages = [
  //   {
  //     title: 'Dashboard',
  //     href: '/dashboard',
  //     icon: <DashboardIcon />
  //   },
  //   {
  //     title: 'WSOne API Settings',
  //     href: '/ws1-setting',
  //     icon: <SettingsIcon />
  //   },
  //   {
  //     title: 'OG Gesture',
  //     href: '/og-map',
  //     icon: <AccountTreeIcon />
  //   },
  //   {
  //     title: 'Account',
  //     href: '/account',
  //     icon: <AccountBoxIcon />
  //   }
  // ];

  return (
    <div>
      {/* {window.location.pathname !== '/dashboard' || window.location.pathname !== '/login' ?
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          onClose={onClose}
          open={open}
          variant={variant}
        >
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            <Profile />
            <Divider className={classes.divider} />
            <SidebarNav
              className={classes.nav}
              pages={pages}
            />
          </div>
        </Drawer> : ''} */}
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
