import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import fb from "../../asset/images/fb.svg"
import Youtube from "../../asset/images/Youtubef.png"

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=" footerSection">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3 pl-5 text-justify">
                            <h1 className="footerName ">Follow Me</h1>
                            <hr  className="hr "/>
                            <a className="footerDescription" target="_blank"  href="//www.facebook.com/infinity.flame.soft.7/?ref=br_rs"><img className="socialLink" src={fb} />  Facebook Page</a><br/>
                            <a className="footerDescription" target="_blank" href="//www.facebook.com/groups/1189323821148135/"><img className="socialLink" src={fb} />  Facebook Group</a><br/>
                            <a className="footerDescription"  href="#"><img className="socialLink" src={Youtube}/> YouTube</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerName">Address</h1>
                            <hr  className="hr "/>
                            <p className="footerDescription" > # 417-420, Rangmohol Tower,Bandor Bazar,Sylhet</p>
                            <p className="footerDescription" > <FontAwesomeIcon  icon={faEnvelope} /> wall.mate@gmail.com</p>
                            <p className="footerDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801675-870047, +8801710-903032</p>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3 pl-5  text-justify ">
                            <h1 className="footerNameLast ">Legal</h1>
                            <hr  className="hrLast "/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <hr  className="hrCopy w-100"/>
                    <a className="copyrightLink" href="#">All Right Reserved by Infinity Flame Soft &copy; 2016</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;