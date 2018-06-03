import React from "react";


import sliderSun from '../assets/images/home/slider/sun.png';
import sliderBirds from '../assets/images/home/slider/birds1.png';

//import Header from "./components/Header";

//import {WOW} from 'wowjs'

export default function Welcome(props) {

    const {header} = props.parentProps;
  const createNewForm = ()=> {
        props.resetForm(() => {
            props.history.pushState(null, "/builder");
        });
    };


  return (
    <div>
        {header}
        <section id="home-slider">
            <div className="container">
                <div className="row">
                    <div className="main-slider">
                        <div className="slide-text">
                            <h1>Create your perfect CV today</h1>
                            <p>Did you know that on average, HR will spend under five seconds reading your CV to decide whether to give you an interview?</p>
                            <p>That's five seconds to convince them that you meet their criteria!</p>
                            <p>Our state-of-the-art algorithm creates a perfectly formatted CV, specifically tailored for students and graduates applying for internships and full-time roles at investment banks.</p>

                            <p><button type="button" onClick={createNewForm} className="btn btn-primary btn-lg">Start your CV</button></p>
                        </div>
                        <img src={sliderSun} className="slider-sun" alt="slider image" />
                            <img src={sliderBirds} className="slider-birds1" alt="slider image" />
                    </div>
                </div>
            </div>

        </section>

        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="single-service-intro">
                            <h1>A brief intro</h1>
                            <p>Here at CV Space, we have collectively reviewed 1000+ CVs for our uni friends (and their friends) and after evaluating both their strong points and their pitfalls, we decided that we would create a web app to build the <b>perfect CV</b>. </p>
                            <p>Why? Firstly, we don't believe anyone should be disadvantaged because they don't know the right people for good CV advice (uni careers services aren't great - trust us on this one) and plus, we wanted to prove that it can be done!  </p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center padding-bottom wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
                                <img src="images/home/icon1.png" alt="" />
                            </div>
                            <h2>Perfect formatting</h2>
                            <p>We are obsessed with perfect formatting (like seriously obsessed), and rightly so: a lot of banking CVs end up in the bin because HR spot formatting errors. So considering we like formatting so much, we will take this completely off your hands. Simply complete the inputs and we'll handle the rest!</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center padding-bottom wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="600ms">
                                <img src="images/home/icon2.png" alt="" />
                            </div>
                            <h2>Clear, logical layout</h2>
                            <p>When it comes to assessing CVs, there are two types of recruiters; those who start at the top and those who start at the bottom.
                                Our template is desigined to delight both. Our logical layout will showcase the best of you effectively and efficiently!</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center padding-bottom wow fadeIn" data-wow-duration="1000ms" data-wow-delay="900ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="900ms">
                                <img src="images/home/icon3.png" alt="" />
                            </div>
                            <h2>Detailed guidance</h2>
                            <p>Our formatting and layout will ace that first impression. Of course, the actual content is crucial in order to tick all the boxes! As always, we have you covered here too with in-depth guidance throughout the whole CV creation process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="action" className="responsive">
            <div className="vertical-center">
                <div className="container">
                    <div className="row">
                        <div className="action take-tour">
                            <div className="col-sm-7 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                                <h1 className="title">Convinced yet?</h1>
                                <p>Then it's time to get started. If you still want to know more, then read on below. <br/>Make sure to check out our 'About us' &amp 'Top tips' pages too!</p>
                            </div>
                            <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="tour-button">
                                    <button type="button" onClick={createNewForm} className="btn btn-common">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="single-features">
                        <div className="col-sm-5 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                            <img src="images/home/image1.png" className="img-responsive" alt="" />
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                            <h2>Spelling, grammar &amp objectivity checks</h2>
                            <p>Spelling &amp grammar mistakes can be fatal to your application. Thankfully, we'll run a comprehensive check for you.
                                We also give you an objectivity score and highlight areas where you've been too subjective.
                                Good CVs provide the facts and let the reader form the opinions;
                                the magic is in subtly influencing their opinions with impeccable presentation and well written content.
                                We'll guide you through these!</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="col-sm-6 col-sm-offset-1 align-right wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                            <h2>Maximise content quantity whilst ensuring legibility</h2>
                            <p>Cramming your life into one page can be hard. Our carefully coded spacing algorithms allow
                                you to fit as much as possible whilst ensuring perfect legibility.</p>
                        </div>
                        <div className="col-sm-5 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                            <img src="images/home/image2.png" className="img-responsive" alt="" />
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="col-sm-5 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                            <img src="images/home/image3.png" className="img-responsive" alt="" />
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                            <h2>Top tips</h2>
                            <p>The fun doesn't stop after the CV; we want you to get the job! Our top tips section will guide you through creating your cover letter,
                                passing online tests and acing your interviews :D</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="clients">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="clients text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                            <p><img src="images/home/clients.png" className="img-responsive" alt="" /></p>
                            <h1 className="title">Our partners</h1>
                            <p>We are working together with numerous university societies on our shared vision of giving all students a fair opportunity when starting their careers.<br/> We thank our partners for their continued support and collaboration.</p>
                        </div>
                        <div className="clients-logo wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client1.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client2.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client3.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client4.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client5.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client6.png" className="img-responsive" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

  );
}
