import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css"
import {Player,BigPlayButton} from 'video-react'

class Videos extends Component {


    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})





    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="videoMainTitle"> HOW WE DO</h1>

                    <Row>

                                <Col lg={6} md={6} sm={12} >
                                  <div className="videoCard ">
                                 <h2 className="videoSubTitle ">Development Sector</h2>
                                      <p className="videoDes">First we analysis the requirement of project. According to the requirement we make a proper technical analysis, then we build a software architecture. According to the planning we start coding. Testing is also going on with coding and divided our team members their part. Final testing take place after finishing coding part. After successful implementation we provides 3 month free bug fixing service for corresponding project.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen}  className="playBtn" icon={faPlayCircle} /></p>

                                    <Modal show={this.state.show} onHide={this.modalClose}>
                                        <Modal.Body>
                                            <Player>
                                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                                <BigPlayButton position="center"/>
                                            </Player>



                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="info" onClick={this.modalClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                   </div>

                                </Col>
                                    <Col lg={6} md={6} sm={12} >
                                        <div className="videoCard">
                                        <h2 className="videoSubTitle">Academic Sector</h2>
                                        <p className="videoDes"> We admitted maximum 8 students our every specific batch.they get life membership for their admitted courses.All students are must be join our facebook page facebook Group cause we share their daily class lecture in our academic facebook groups.We try to level best to guide our individual student.and we try to solve their practise problems.try to take classes with live project base and give ideas about professional level   </p>
                                        <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                                        <Modal show={this.state.show} onHide={this.modalClose}>

                                            <Modal.Body>
                                                <Player>
                                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                                    <BigPlayButton position="center"/>
                                                </Player>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="info" onClick={this.modalClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                       </div>

                                    </Col>

                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Videos;