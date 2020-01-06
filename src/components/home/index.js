import React, { Component } from 'react';
import CountUp from 'react-countup';
import studentimg from 'assets/images/homepage.png';
import photo from 'assets/images/photo-1557804506-669a67965ba0.jpeg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DescriptionIcon from '@material-ui/icons/Description';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BusinessIcon from '@material-ui/icons/Business';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
 
class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse collapsed ' : 'collapse navbar-collapse show  ';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right  ' : 'navbar-toggler navbar-toggler-right';
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <h2 className=""><a className="site-logo" href="index.html">WSOne OGs</a></h2>
            <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbar-Collapse" aria-controls="navbar-Collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbar-Collapse">
              <ul className="navbar-nav ml-auto "> 
                <li><a href="#home-section" className="nav-link  ">Home</a></li>
                <li><a href="#service" className="nav-link  ">Service</a></li>
                <li><a href="#work" className="nav-link  ">How it works?</a></li>
                <li><a href="#Statistics" className="nav-link  ">Statistics</a></li>
                <li><a href="#home-section" className="nav-link  ">Contact</a></li>
                <li><a href="/login" className="nav-link  ">Login</a></li>
              </ul>
            </div>
          </div>
        </nav> 
        <div className="home-section padding-top-bottom">
          <div className="container pb-5">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-12 mb-5">
                <h1 className="text-white serif text-uppercase mb-4">What is OG-Tool?</h1>
                <p className="text-white mb-5">OG tool is a simple Workspace One tool to visualize organization groups and
                manipulate them using an interactive UI.</p>
                <div className="two-btn">
                  <p><a href="#service" className="btn btn-white px-4 py-3  btn1">Learn More</a></p>
                  <p><a href="#demo" className="btn btn-white px-4 py-3">Register Now</a></p>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-12">
                <img src={studentimg} className="img-fluid" alt="studentimg" />
              </div>
            </div>
          </div>
        </div>

        <div className="padding-top-bottom bg-light" id="service">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7">
                <h2 className="heading">How it helps?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100">
                  <div className="icon-section">
                    <span className="wrap-icon">
                      <AccessTimeIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Save time</h3>
                  <p className="item-des">OG tool helps you update and manipulate Workspace One organization
                    groups using a simple interactive UI. OG tool decreases the timeframe needed for such a
                  task.</p>
                </div>

              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100">
                  <div className="icon-section">
                    <span className="wrap-icon">
                      <VisibilityIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Better visualization</h3>
                  <p className="item-des">OG tool provides you with an easy (drag-and-drop) and
                  interactive diagram to visualize Workspace One groups structure in a better way.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100">
                  <div className="icon-section">
                    <span className="wrap-icon">
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

        <div className="padding-top-bottom" id="work">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2 className="heading">How it Works?</h2>
                <p className="font-weight-bold">IT Admin of a company enters the company Workspace One tenant API credentials in
                  our OG tool, so the tool fetches the Organization Groups details from Workspace One and
                  display them in a form of a diagram to easily manipulate (Create, Read, Update, Delete),
                visualize and export (Image, PDF, other types if possible) OGs.</p>
              </div>
              <div className="owl-carousel slide-one-item col-md-6">
                <img src={photo} className="img-fluid" alt="Service" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light" id="Statistics">
          <div className="container padding-top-bottom">
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="heading">Statistics</h2>
                <p className="font-weight-bold">IT Admin of a company enters the company Workspace One tenant API credentials in our OG tool.
              </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span className="wrap-icon">
                      <SupervisorAccountIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Clients</h3>
                  <h1 className="text-primary  mt-2"><p className="item-des  font-size"><CountUp end={10000} duration={5} />
                  </p>
                  </h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span className="wrap-icon">
                      <AccountTreeIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Diagram Generated</h3>
                  <h1 className="text-primary  mt-2"><p className="item-des font-size"><CountUp end={23999} duration={5} /> </p></h1>
                </div>

              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="service h-100 Statistics-item">
                  <div className="icon-section">
                    <span className="wrap-icon">
                      <BusinessIcon className="services-icon" />
                    </span>
                  </div>
                  <h3>Organisation Group</h3>
                  <h1 className="text-primary  mt-2 "><p className="item-des font-size"><CountUp end={23448} duration={5} /></p></h1>
                </div>
              </div>
            </div>
          </div>

          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="row mb-5">
                    <div className="col-12">
                      <h3 className="footer-heading mb-4">About Us</h3>
                      <p>OG tool is a simple Workspace One tool to visualize organization groups and manipulate them using
                      an interactive UI.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 ml-auto">

                  <div className="row mb-7">
                    <div className="col-md-12">
                      <h3 className="footer-heading mb-4">Navigation</h3>
                    </div>
                    <div className="col-md-12">

                      <ul className="list-unstyled row">
                        <div className="col-md-4">
                          <li><a href="#home-section" className="footer-nav-link">Home</a></li>
                          <li><a href="#service" className="footer-nav-link">service</a></li>
                        </div>
                        <div className="col-md-4">
                          <li><a href="#work" className="footer-nav-link">How it works?</a></li>
                          <li><a href="#Statistics" className="footer-nav-link">Statistics</a></li>
                        </div>
                        <div className="col-md-4">
                          <li><a href="#service" className="footer-nav-link">Contact</a></li>
                          <li><a href="/login" className="footer-nav-link">Login</a></li>
                        </div>
                      </ul>

                    </div>

                  </div>

                </div>


                <div className="col-lg-3 mb-5 mb-lg-0" id="contact-section">

                  <div className="mb-5">
                    <h3 className="footer-heading mb-4">Quick Contact</h3>
                    <div className="Address">
                      <span className="address">Phone:+33600000000</span>
                      <span className="address">Email:ogwsone@gmail.com</span>
                      <span className="address"> Address:7 Rue de Test, 75000 Paris</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <div className="mb-4">
                    <a href="#demo" className="pl-0 pr-3"><span className="icon-facebook"><FacebookIcon /></span></a>
                    <a href="#demo" className="pl-3 pr-3"><span className="icon-twitter"><TwitterIcon /></span></a>
                    <a href="#demo" className="pl-3 pr-3"><span className="icon-instagram"><InstagramIcon /></span></a>
                    <a href="#demo" className="pl-3 pr-3"><span className="icon-linkedin"><LinkedInIcon /></span></a>
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

