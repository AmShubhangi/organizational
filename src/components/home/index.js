import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/images/stat.png';
import CountUp from 'react-countup';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import studentimg from 'assets/images/homepage.png';
import photo from 'assets/images/photo-1557804506-669a67965ba0.jpeg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DescriptionIcon from '@material-ui/icons/Description';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BusinessIcon from '@material-ui/icons/Business';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div class="site-navbar-wrap p-0">

          <div class="site-navbar site-navbar-target js-sticky-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-6 col-lg-3">
                  <h1 class="my-0 site-logo"><a href="index.html">WSOne OGs</a></h1>
                </div>
                <div class="col-6 col-lg-9">
                  <nav class="site-navigation text-right" role="navigation">
                    <div class="container">

                      <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3 "><a href="#"
                        class="site-menu-toggle js-menu-toggle text-black">
                        <span class="icon-menu h3"></span>
                      </a></div>

                      <ul class="site-menu main-menu js-clone-nav d-none d-lg-block">
                        <li><a href="#home-section" class="nav-link">Home</a></li>
                        <li><a href="#service" class="nav-link">Service</a></li>
                        <li><a href="#work" class="nav-link">How it works?</a></li>
                        <li><a href="#Statistics" class="nav-link">Statistics</a></li>
                        <li><a href="#home-section" class="nav-link">Contact</a></li>
                        <li><a href="/login" class="nav-link">Login</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-section padding-top-bottom">
          <div class="container pb-5">
            <div class="row">
              <div class="col-md-5 mb-5">
                <h1 class="text-white serif text-uppercase mb-4">What is OG-Tool?</h1>
                <p class="text-white mb-5">OG tool is a simple Workspace One tool to visualize organization groups and
                manipulate them using an interactive UI.</p>
                <div class="two-btn">
                  <p><a href="#service" class="btn btn-white px-4 py-3  btn1">Learn More</a></p>
                  <p><a href="#" class="btn btn-white px-4 py-3">Register Now</a></p>
                </div>
              </div>
              <div class="col-md-5 offset-1">
                <img src={studentimg} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div class="padding-top-bottom bg-light" id="service">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-7">
                <h2 class="heading">How it helps?</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <AccessTimeIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Save time</h3>
                  <p className="item-des">OG tool helps you update and manipulate Workspace One organization
                    groups using a simple interactive UI. OG tool decreases the timeframe needed for such a
                  task.</p>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <VisibilityIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Better visualization</h3>
                  <p className="item-des">OG tool provides you with an easy (drag-and-drop) and
                  interactive diagram to visualize Workspace One groups structure in a better way.</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <DescriptionIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Export OGs</h3>
                  <p className="item-des">with OG tool you can easily export your Workspace One groups structure
                  or specific groups as a format of your choice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="padding-top-bottom" id="work">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-6">
                <h2 class="heading">How it Works?</h2>
                <p className="font-weight-bold">IT Admin of a company enters the company Workspace One tenant API credentials in
                  our OG tool, so the tool fetches the Organization Groups details from Workspace One and
                  display them in a form of a diagram to easily manipulate (Create, Read, Update, Delete),
                visualize and export (Image, PDF, other types if possible) OGs.</p>
              </div>
              <div class="owl-carousel slide-one-item col-md-6">
                <img src={photo} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light" id="Statistics">
          <div class="container padding-top-bottom">
            <div class="row mb-5">
              <div class="col-12">
                <h2 class="heading">Statistics</h2>
                <p className="font-weight-bold">IT Admin of a company enters the company Workspace One tenant API credentials in our OG tool.
              </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <SupervisorAccountIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Clients</h3>
                  <h1 className="text-primary  mt-2"><p className="item-des  font-size"><CountUp end={10000} duration={5} />
                  </p>
                  </h1>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <AccountTreeIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Diagram Generated</h3>
                  <h1 className="text-primary  mt-2"><p className="item-des font-size"><CountUp end={23999} duration={5} /> </p></h1>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 mb-4">
                <div class="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span class="wrap-icon">
                      <BusinessIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Organisation Group</h3>
                  <h1 className="text-primary  mt-2 "><p className="item-des font-size"><CountUp end={23448} duration={5} /></p></h1>
                </div>
              </div>
            </div>
          </div>

          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 mb-5 mb-lg-0">
                  <div class="row mb-5">
                    <div class="col-12">
                      <h3 class="footer-heading mb-4">About Us</h3>
                      <p>OG tool is a simple Workspace One tool to visualize organization groups and manipulate them using
                      an interactive UI.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 ml-auto">

                  <div class="row mb-7">
                    <div class="col-md-12">
                      <h3 class="footer-heading mb-4">Navigation</h3>
                    </div>
                    <div class="col-md-12">

                      <ul class="list-unstyled row">
                        <div class="col-md-4">
                          <li><a href="#home-section" class="nav-link">Home</a></li>
                          <li><a href="#service" class="nav-link">service</a></li>
                        </div>
                        <div class="col-md-4">
                          <li><a href="#work" class="nav-link">How it works?</a></li>
                          <li><a href="#Statistics" class="nav-link">Statistics</a></li>
                        </div>
                        <div class="col-md-4">
                          <li><a href="#service" class="nav-link">Contact</a></li>
                          <li><a href="/login" class="nav-link">Login</a></li>
                        </div>
                      </ul>

                    </div>

                  </div>

                </div>


                <div class="col-lg-3 mb-5 mb-lg-0" id="contact-section">

                  <div class="mb-5">
                    <h3 class="footer-heading mb-4">Quick Contact</h3>
                    <div class="Address">
                      <span class="address">Phone:+33600000000</span>
                      <span class="address">Email:ogwsone@gmail.com</span>
                      <span class="address"> Address:7 Rue de Test, 75000 Paris</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="row text-center">
                <div class="col-md-12">
                  <div class="mb-4">
                    <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                    <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
                  </div>
                  <p>
                    Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All rights reserved
                </p>
                </div>

              </div>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}
export default HomeComponent;

