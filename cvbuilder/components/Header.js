import React from "react";
import { Link } from "react-router";


import logo from '../assets/images/logo.png';

export default function Header(props) {


  return (
      <header id="header">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 overflow">
                      <div className="social-icons pull-right">
                          <ul className="nav nav-pills">
                              <li><a href=""><i className="fa fa-facebook"></i></a></li>
                              <li><a href=""><i className="fa fa-twitter"></i></a></li>
                              <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="navbar navbar-inverse" role="banner">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>

                      <a className="navbar-brand" href="index.html">
                          <h1><img src={logo} alt="logo" /></h1>
                      </a>

                  </div>
                  <div className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
                          <li><Link to="/builder" activeClassName="active">CV Builder</Link></li>
                      </ul>
                  </div>

              </div>
          </div>
      </header>
  );

/*

                  <div className="search">
                      <form role="form">
                          <i className="fa fa-search"></i>
                          <div className="field-toggle">
                              <input type="text" className="search-form" autocomplete="off" placeholder="Search" />
                          </div>
                      </form>
                  </div>

  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">CV Builder</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </div>
    </div>
  </div>);*/
}
