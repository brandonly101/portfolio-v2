// Copyright 2017 Brandon Ly all rights reserved.

// Node package imports.
import React from 'react';
import FontAwesome from 'react-fontawesome';

// Custom imports.
import { Container, Row, Col } from './grid.js';
import '../style/_about.scss';

export default class About extends React.Component {
    render() {
        var contactInfo = (
            <div className="about-contact">
                <div className="list">
                        <Row>
                            <Col className="col" xs={4}>
                                Email - <a href="mailto:brandonly@live.com" target="_blank"><FontAwesome name="envelope"/></a>
                            </Col>
                            <Col className="col" xs={4}>
                                LinkedIn - <a href="https://www.linkedin.com/in/brandon-ly-1a412b73" target="_blank">
                                    <FontAwesome name="linkedin"/>
                                </a>
                            </Col>
                            <Col className="col" xs={4}>
                                GitHub - <a href="https://www.github.com/brandonly101" target="_blank">
                                    <FontAwesome name="github"/>
                                </a>
                            </Col>
                        </Row>
                </div>
            </div>
        );

        return (
            <div>
                <div className="about-description">
                    <img src="/assets/images/about/me.png"/>
                    <div className="paragraph">
                            Hello! I'm Brandon Ly! I am a game developer and software engineer at Blind Squirrel Games.
                            I really enjoy the following:
                            <ul>
                                <li>Full-stack Web Development and Design</li>
                                <li>3D Computer Graphics</li>
                                <li>Data Visualizations</li>
                                <li>Video Games and Video Game Development</li>
                                <li>VR and AR Gaming and Experiences</li>
                            </ul>
                            I was born and raised near Los Angeles, and still find joy
                            in exploring the large city through new events. In my spare time I
                            play video games, listen to music, and dance.<br/>
                            <br/>
                            If you want to get in touch, feel free to reach out to me:
                    </div>
                </div>
                {contactInfo}
            </div>
        );
    }
}
