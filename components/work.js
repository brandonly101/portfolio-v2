// Copyright 2017 Brandon Ly all rights reserved.

// Node package imports.
import React from 'react';

// Custom imports.
import { Container, Row, Col } from './grid.js';
import WorkData from '../data/work.json';
import '../style/_work.scss';

export default class Work extends React.Component {
    render() {

        // Create the work page body content.
        var workJobs = [];
        for (var i = 0; i < WorkData.length; i++) {

            // Create the work image column
            var img = (WorkData[i].shortTitle == "ssc") ?
                    <div className="img-ssc"><img src={WorkData[i].img}></img></div> :
                    <img src={WorkData[i].img}></img>;
            var colImg = (
                <Col xs={12} md={6}>
                    <div className="work-img">
                        {img}
                    </div>
                </Col>
            );

            // Create the work description column.
            var colDescProjects = [];
            for (var a = 0; a < WorkData[i].descList.length; a++) {
                colDescProjects.push(
                    <li key={a}>{WorkData[i].descList[a]}</li>
                );
            }
            var colSkills = [];
            for (var a = 0; a < WorkData[i].skills.length; a++) {
                colSkills.push(
                    <li key={a} className={WorkData[i].skills[a].shortTitle}>
                        {WorkData[i].skills[a].title}
                    </li>
                );
            }
            var colDesc = (
                <Col xs={12} md={6}>
                    <div className="work-title">{WorkData[i].title}</div>
                    <div className="work-subtitle">{WorkData[i].company} <span>{WorkData[i].dateStart} - {WorkData[i].dateEnd}</span></div>
                    <div className="work-description">
                        {WorkData[i].description}
                        <ul>
                            {colDescProjects}
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            {colSkills}
                        </ul>
                    </div>
                </Col>
            );

            // Add the image and description; stagger it based on row even-odd-ness.
            // if (i % 2 == 0) {
                workJobs.push(
                    <Row key={i} className="work-job">
                        {colImg}
                        {colDesc}
                    </Row>
                );
            // } else {
                // workJobs.push(
                //     <Row key={i} className="work-job">
                //         {colDesc}
                //         {colImg}
                //     </Row>
                // );
            // }
        }

        return (
            <div id="work" className="body-content work">
                <Container>
                    <Row>
                        <div className="work-heading">Work Experience</div>
                    </Row>
                    {workJobs}
                    <div id="work-skills" className="work-skills-list">
                        <div className="title">Skills and Technologies</div>
                        <div className="subtitle">
                            These are various programming languages, technologies, programming paradigms and methodologies
                            that I have a knowledge of.
                        </div>
                        <Row>
                            <Col xs={12} sm={12} md={5} className="col-left">Object-oriented Programming</Col>
                            <Col xs={12} sm={12} md={7} className="col-right">C/C++, Java, C#, PHP, JavaScript</Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5} className="col-left">Web Development</Col>
                            <Col xs={12} sm={12} md={7} className="col-right">HTML &amp; CSS, JavaScript, jQuery, React.js, Bootstrap, Sass</Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5} className="col-left">Technologies</Col>
                            <Col xs={12} sm={12} md={7} className="col-right">Unity 3D Engine, Unreal Engine 4, Linux, Git &amp; GitHub</Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={5} className="col-left">Methodologies</Col>
                            <Col xs={12} sm={12} md={7} className="col-right">Agile, Kanban, Waterfall</Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
