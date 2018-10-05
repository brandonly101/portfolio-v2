// Copyright 2017 Brandon Ly all rights reserved.

// Node package imports
import React from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import FontAwesome from 'react-fontawesome';

// Custom imports
import { Container } from './grid.js';
import Work from './work.js';
import Projects from './projects.js';
import About from './about.js';
import styles from '../style/_body.scss';

export default class BodyLanding extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        var bodyLandingClassNames = "body-landing ";
        var bodyLandingImage = "";
        var bodyLandingParagraph;
        var bodyLandingLinks;
        var bodyContent;

        if (this.props.page == "work") {
            // Work page properties.
            bodyLandingClassNames += "body-landing-work";
            bodyLandingImage = <img src="assets/images/selfportraitcircle.png"/>;
            bodyLandingParagraph = "I am a recent Computer Science graduate from UCLA who loves to build software for people. " +
                    "I like things full-stack web development, web design, game development, computer graphics and data visualizations.";
            bodyLandingLinks = [
                <li key={0}><Scroll.Link href="" to="work" smooth={true} duration={350} offset={-100}>Work</Scroll.Link></li>,
                <li key={1}><Scroll.Link href="" to="work-skills" smooth={true} duration={350} offset={-100}>Skills</Scroll.Link></li>,
                <li key={2}><Link to="/projects">Projects</Link></li>,
                <li key={3}><a href="https://www.dropbox.com/s/gr6tw5nf7dvrwg1/LyBrandonResume.pdf?dl=0" target="_blank">Resume</a></li>
            ];
            bodyContent = <Work/>;
        } else if (this.props.page == "projects") {
            // Projects page properties.
            bodyLandingClassNames += "body-landing-projects";
            bodyLandingParagraph = "A collection of cool projects I have worked on, whether academic, personal or professional.";
            bodyLandingLinks = [
                <li key={0}>
                    <Scroll.Link href="" to="projects" smooth={true} duration={350} offset={-100}>
                        See Projects<br/>
                        <FontAwesome name="angle-down"/>
                    </Scroll.Link>
                </li>
            ];
            bodyContent = <Projects/>;
        } else if (this.props.page == "about") {
            // About page properties.
            bodyLandingClassNames += "body-landing-about";
            bodyLandingParagraph = "";
            bodyContent = <About/>;
        }

        return (
            <div id="body">
                <div className={bodyLandingClassNames}>
                    <div className="content">
                        <div className="image">
                            {bodyLandingImage}
                        </div>
                        <div className="paragraph">
                            {bodyLandingParagraph}
                        </div>
                        <div className="links">
                            <ul>
                                {bodyLandingLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                {bodyContent}
            </div>
        );
    }
}
