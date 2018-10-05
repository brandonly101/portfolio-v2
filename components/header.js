// Copyright 2017-2018 Brandon Ly all rights reserved.

// Node package imports.
import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

// Custom imports.
import { Container, Row, Col } from './grid.js';
import styles from '../style/_header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isScrolled: (document.documentElement.scrollTop > 0) };
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(e) {
        if (document.documentElement.scrollTop > 0) {
            this.setState({ isScrolled: true });
        } else {
            this.setState({ isScrolled: false });
        }
    }

    render() {
        var headerClass = classnames({ 'header': true, 'header-scrolled': this.state.isScrolled });

        return (
            <div id="header">
                <div className={headerClass}>
                    <Container>
                        <Row>
                            <Col xs={12} md={5} className="logo">
                                <a href="/">
                                    <div className="title">
                                        <div className="main">Brandon Ly</div>
                                        <div className="sub">Game Developer and Software Engineer</div>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={12} md={7} className="menu">
                                <div className="elem">
                                    <Link to="/">Work</Link>
                                </div>
                                <div className="elem">
                                    <Link to="/projects/">Projects</Link>
                                </div>
                                <div className="elem">
                                    <a href="https://www.dropbox.com/s/gr6tw5nf7dvrwg1/LyBrandonResume.pdf?dl=0" target="_blank">Resume</a>
                                </div>
                                <div className="elem">
                                    <Link to="/about/">About</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
