import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import ReviewOne from '../../asset/images/naahian.jpg'
import ReviewTwo from '../../asset/images/mak.jpg'
import ReviewThree from '../../asset/images/crown.jpg'


class ClientReview extends Component {

    render() {
        var settings= {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>

                <Container fluid={true} className=" ClientSection text-center">
                    <h1 className="ClientMainTitle">Client Testimonials</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center mt-5">
                                <Col lg={4} md={12} sm={12}>

                                    <img className="circleImg " src={ReviewOne}/>
                                    <h1 className="clientName">Shafi Mohammed Nahiyan</h1>
                                    <h4 className="clientTitle">Director Noorjahan Group</h4>
                                    <p className="ClientDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>

                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center mt-5">
                                <Col lg={4} md={12} sm={12}>

                                    <img className="circleImg" src={ReviewTwo}/>
                                    <h1 className="clientName">Md. Asaduzzaman Khan</h1>
                                    <h4 className="clientTitle">Assistant Professor & Head CSE, Leading University</h4>
                                    <p className="ClientDescription">"Infinity Flame Software compnay knows what they are doing and they proved to us several times."</p>

                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center mt-5">
                                <Col lg={6} md={12} sm={12}>
                                    <img className="circleImg" src={ReviewThree}/>
                                    <h1 className="clientName">Abu Naser Salauddin</h1>
                                    <h4 className="clientTitle">General Manager – Crown
                                        Cotton Ltd (Crown Group)</h4>
                                    <p className="ClientDescription">"They are humble, generous, passionate, dedicated, creative and talented."</p>

                                </Col>
                            </Row>
                        </div>

                    </Slider>



                </Container>


            </Fragment>
        );
    }
}

export default ClientReview;