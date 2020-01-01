import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import logo from '../../assets/images/\ logo.png';
import CountUp from 'react-countup';


class HomeComponent extends Component {

  render() {


    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div className=" justify-content-between">
              <Button color="inherit">Home</Button>
              <Button color="inherit"><a className="text-dark" style={{ textDecoration: 'none' }} href="#service">service</a></Button>
              <Button color="inherit"><a className="text-dark" style={{ textDecoration: 'none' }} href="#work">How it works?</a></Button>
              <Button color="inherit"><a className="text-dark" style={{ textDecoration: 'none' }} href="#Statistics">Statistics</a></Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-5 home-bg home-min-height">


              <h1 className="display-4 font-weight-bolder home-top-margin">What is OG-Tool?</h1>
              <p>OG tool is a simple Workspace One tool to visualize organization groups and
manipulate them using an interactive UI.</p>

              <div className=" ">
                <button className="btn btn-primary">Sign Up for Execution</button>
                <button className="btn btn-outline-light    ml-2">Learn More</button>
              </div>

            </div>
            <div className="col-lg-6 home-top-bg">
            </div>
          </div>
          <div className="row bg-white">
            <div id="service" className="col-lg-12 ">
              <h1 className=" text-center mt-4 ">Service</h1>
              <div className="stat-underline"></div>
              <div className="d-flex col-lg-9 ml-auto mr-auto mt-4">
                <div className="col-lg-4 text-center">
                  < h5>Save time</ h5>
                </div>
                <div className="col-lg-4 text-center">
                  < h5>Better visualization</ h5>
                </div>
                <div className="col-lg-4 text-center">
                  < h5>Export OGs</ h5>
                </div>
              </div>
            </div>
            <div id="Statistics" className="col-lg-12 ">
              <h1 className=" text-center mt-4 ">Statistics</h1>
              <div className="stat-underline"></div>
              <p className="text-secondary text-center mt-4">IT Admin of a company enters the company Workspace One tenant API credentials in
  our OG tool.</p>
              <div className="d-flex col-lg-9 ml-auto mr-auto mt-4">
                <div className="col-lg-3 text-center">
                  <div className="icon-border" >
                    <AccountCircleOutlinedIcon style={{ fontSize: '53px' }} />
                  </div>
                  <h1 className="text-primary  mt-2"><CountUp end={156} duration={5} /></h1>
                  <div className="underline"></div>
                  <div className="">
                    <p>Professors</p>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <div className="icon-border" >
                    <PeopleOutlinedIcon style={{ fontSize: '53px' }} />
                  </div>
                  <h1 className="text-primary  mt-2"><CountUp end={12} duration={5} /></h1>
                  <div className="underline"></div>
                  <div className="">
                    <p>Campuses</p>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <div className="icon-border" >
                    <HomeOutlinedIcon style={{ fontSize: '53px' }} />
                  </div>
                  <h1 className="text-primary  mt-2"><CountUp end={3257} duration={5} /></h1>
                  <div className="underline"></div>
                  <div className="">
                    <p>Students</p>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <div className="icon-border" >
                    <DescriptionOutlinedIcon style={{ fontSize: '53px' }} />
                  </div>
                  <h1 className="text-primary  mt-2"><CountUp end={346} duration={5} /></h1>
                  <div className="underline"></div>
                  <div className="">
                    <p>Courses</p>
                  </div>
                </div>
              </div>
              <div id="work" className="d-flex col-lg-9 ml-auto mr-auto mt-4">
                <div className="col-lg-9 p-4">
                  <h1 className="font-weight-bolder "> How it Works?</h1>
                  <div className="underline-about"></div>
                  <div className="mt-4 pr-4">
                    <p>IT Admin of a company enters the company Workspace One tenant API credentials in
    our OG tool, so the tool fetches the Organization Groups details from Workspace One and
    display them in a form of a diagram to easily manipulate (Create, Read, Update, Delete),
visualize and export (Image, PDF, other types if possible) OGs.</p>
                  </div>
                  <div className='mt-4'>
                    <button className="btn btn-outline-dark">Learn More <ArrowForwardOutlinedIcon /></button>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className=" mt-4">
                    <img src={logo} width="300" height="300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 ml-auto mr-auto mt-5 d-flex">
              <div className="col-lg-6 p-5">
                <h1 className="font-weight-bolder text-center ">Our Featurs</h1>
                <p className="text-center">IT Admin of a company enters the company Workspace One tenant API credentials in
                   our OG tool</p>
                <div className="d-flex">
                  <div className="col-lg-6 d-flex">
                    <div className="feature-icon">
                      <AccountCircleOutlinedIcon style={{ fontSize: '53px' }} />
                    </div>
                    <div>
                      <h1 className="text-primary  mt-2"><CountUp end={156} duration={5} /></h1>
                      <p>Professors</p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex">
                    <div className="feature-icon">
                      <PeopleOutlinedIcon style={{ fontSize: '53px' }} />
                    </div>
                    <div>
                      <h1 className="text-primary  mt-2"><CountUp end={12} duration={5} /></h1>
                      <p>Campuses</p>
                    </div>
                  </div>

                </div>
                <div className="d-flex">
                  <div className="col-lg-6 d-flex">
                    <div className="feature-icon">
                      <HomeOutlinedIcon style={{ fontSize: '53px' }} />
                    </div>
                    <div>
                      <h1 className="text-primary  mt-2"><CountUp end={3257} duration={5} /></h1>
                      <p>Students</p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex">
                    <div className="feature-icon">
                      <DescriptionOutlinedIcon style={{ fontSize: '53px' }} />
                    </div>
                    <div>
                      <h1 className="text-primary  mt-2"><CountUp end={346} duration={5} /></h1>
                      <p>Courses</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6 featur-bg">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeComponent;

