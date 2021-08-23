import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/images/web.jpg'
import softLogo from '../../asset/images/software.jpg'
import mobileLogo from '../../asset/images/mobileApp.jpg'
import Graphics from '../../asset/images/Graphic-_Design.jpg'
import online from '../../asset/images/online.jpg'
import hosting from '../../asset/images/web-hosting.jpg'


class Services extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="mt-0">
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={softLogo}/>
                                <h2 className="serviceName">SOFTWARE DEVELOPMENT</h2>
                                <p className="serviceDescription ">Today companies need to be constantly reevaluating their business and systems looking for enhancements and cost benefts. Our expertise in custom software Development can ease out of any business and can build a more convenient environment of business growth</p>

                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">

                                <img className="serviceImg" src={ webLogo}/>
                                <h2 className="serviceName">WEB DEVELOPMENT</h2>
                                <p className="serviceDescription">Websites have been a specialty of our team for over 5 years. We have developed over many sites since we have been offering these services. We are able to deliver gorgeous custom websites at a very convenient price.</p>

                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={mobileLogo}/>
                                <h2 className="serviceName">Mobile App Development</h2>
                                <p className="serviceDescription">We build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>


                            </div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={Graphics}/>
                                <h2 className="serviceName">GRAPHICS DESIGN & BRANDING</h2>
                                <p className="serviceDescription">Branding is important because not only is it what makes a memorable impression on consumers but it allows your customers and clients to know what to expect from your company. Our expert team can design the brand for you..</p>


                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center " >
                                <img className="serviceImg" src={online}/>
                                <h2 className="serviceName">ONLINE MARKETING</h2>
                                <p className="serviceDescription">Now a days, most popular marketing method is Online marketing. It is extremely impactful for marketing your product within your budget. We provide the best deal of Online marketing..</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={hosting}/>
                                <h2 className="serviceName">WEB HOSTING</h2>
                                <p  className="serviceDescription"> We provide most secure and smooth hosting service for professionals.</p>
                            </div>
                        </Col>


                    </Row>






                </Container>

            </Fragment>
        );
    }
}

export default Services;