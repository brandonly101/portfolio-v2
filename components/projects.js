// Copyright 2017 Brandon Ly all rights reserved.

// Node package imports.
import React from 'react';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

// Custom imports.
import { Container, Row, Col } from './grid.js';
import ProjectsData from '../data/projects.json';
import '../style/_projects.scss';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        var visibleProject = [];
        for (var i = 0; i < 9; i++) {
            visibleProject.push(false);
        }
        this.state = {
            visibleRow: [ false, false, false ],
            visibleProject: visibleProject,
            projectToShow: [ ProjectsData[0], ProjectsData[0], ProjectsData[0] ]
        };
    }

    // Handler for change of state whenever any of the 3x3 grid projects are clicked on.
    handleClick(ptr, row, col) {
        return function(e) {
            e.preventDefault();
            var tempState = ptr.state;

            if (tempState.visibleProject[row * 3 + col]) {
                tempState.visibleProject[row * 3] = false;
                tempState.visibleProject[row * 3 + 1] = false;
                tempState.visibleProject[row * 3 + 2] = false;
            } else {
                tempState.visibleProject[row * 3] = false;
                tempState.visibleProject[row * 3 + 1] = false;
                tempState.visibleProject[row * 3 + 2] = false;
                tempState.visibleProject[row * 3 + col] = true;
                tempState.projectToShow[row] = ProjectsData[row * 3 + col];
            }
            tempState.visibleRow[row] = (
                tempState.visibleProject[row * 3] ||
                tempState.visibleProject[row * 3 + 1] ||
                tempState.visibleProject[row * 3 + 2]
            );

            ptr.setState(tempState);
        }
    }

    render() {
        // Create the three rows of the 3x3 grid of projects, including the description dropdown.
        var projectsGrid = [];
        for (var row = 0; row < 3; row++) {
            var projectsList = [];
            var projectsDescList = [];
            var projectsSkills = [];

            // Create each of the three columns of the 3x3 grid of projects.
            for (var col = 0; col < 3; col++) {
                var image = { backgroundImage: 'url("/assets/images/projects/' + ProjectsData[row * 3 + col].img + '")' };
                var projectClassNames = classnames({
                    "projects-box": true,
                    "projects-img": true,
                    "projects-box-selected": this.state.visibleProject[row * 3 + col]
                });
                var project = (
                    <div key={row * 3 + col} className={projectClassNames} style={image} onClick={this.handleClick(this, row, col)}>
                        <div className="projects-img-info">
                            <div className="title">{ProjectsData[row * 3 + col].title}</div>
                            <div className="subtitle">{ProjectsData[row * 3 + col].projectType}</div>
                            { this.state.visibleProject[row * 3 + col] ?
                                <FontAwesome name="angle-up" size="lg"/> :
                                <FontAwesome name="angle-down" size="lg"/>
                            }
                        </div>
                    </div>
                );
                projectsList.push(project);
            }
            var projectsRow = <div key={row * 2} className="projects-grid">{projectsList}</div>;
            var descriptionClassName = classnames({
                'body-content': true,
                'projects-description': true,
                'projects-description-active': this.state.visibleRow[row]
            });

            // Create the project description column.
            var colDescProjects = [];
            for (var a = 0; a < this.state.projectToShow[row].descList.length; a++) {
                colDescProjects.push(
                    <li key={a}>{this.state.projectToShow[row].descList[a]}</li>
                );
            }
            var colSkills = [];
            for (var a = 0; a < this.state.projectToShow[row].skills.length; a++) {
                colSkills.push(
                    <li key={a} className={this.state.projectToShow[row].skills[a].shortTitle}>
                        {this.state.projectToShow[row].skills[a].title}
                    </li>
                );
            }

            // Create the project description that will drop down.
            var footage = this.state.projectToShow[row].footage;
            var descriptionRow = (<div key={row * 2 + 1} className={descriptionClassName}>
                <Container>
                    <Row className="project-description-content">
                        <Col xs={12} md={6}>
                            <div className="project-img">
                                { (footage.type == "embeddedYoutube") ?
                                    <iframe
                                        src={footage.src}
                                        frameBorder={0}
                                        allowFullScreen="allowfullscreen"/> :
                                    <img src={"/assets/images/projects/" + this.state.projectToShow[row].img}/>
                                }
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="project-description">
                            <div className="project-info">
                                <div className="title">{this.state.projectToShow[row].title}</div>
                                <div className="subtitle">
                                    {this.state.projectToShow[row].projectType}
                                    <span>{this.state.projectToShow[row].dateStart} - {this.state.projectToShow[row].dateEnd}</span>
                                </div>
                                <div className="description">
                                    {this.state.projectToShow[row].description} {footage.type == "liveSite" ?
                                        <a href={footage.src} className="live-site" target="_blank">Live site</a> :
                                        null} {footage.type == "paper" ?
                                        <a href={footage.src} className="live-site" target="_blank">Research paper</a> :
                                        null} {this.state.projectToShow[row].src != "" ?
                                        <a href={this.state.projectToShow[row].src} className="src" target="_blank">Source code</a> :
                                        null}
                                    <ul>
                                        {colDescProjects}
                                    </ul>
                                </div>
                                <div className="skills">
                                    <ul>
                                        {colSkills}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>);

            projectsGrid.push(projectsRow);
            projectsGrid.push(descriptionRow);
        }

        // Create the list of other, smaller projects.
        var projectsOther = [];
        for (var i = 9; i < ProjectsData.length; i++) {

            // Create the work description column.
            var colDescProjects = [];
            for (var a = 0; a < ProjectsData[i].descList.length; a++) {
                colDescProjects.push(
                    <li key={a}>{ProjectsData[i].descList[a]}</li>
                );
            }
            var colSkills = [];
            for (var a = 0; a < ProjectsData[i].skills.length; a++) {
                colSkills.push(
                    <li key={a} className={ProjectsData[i].skills[a].shortTitle}>
                        {ProjectsData[i].skills[a].title}
                    </li>
                );
            }
            var colDesc = (
                <div key={i} className="project-info projects-other-project">
                    <div className="title">{ProjectsData[i].title}</div>
                    <div className="subtitle">
                        {ProjectsData[i].projectType}
                        <span>{ProjectsData[i].dateStart} - {ProjectsData[i].dateEnd}</span></div>
                    <div className="description">
                        {ProjectsData[i].description} {ProjectsData[i].footage.type == "liveSite" ?
                            <a href={ProjectsData[i].footage.src} className="live-site" target="_blank">Live site</a> :
                            null} {ProjectsData[i].footage.type == "paper" ?
                            <a href={ProjectsData[i].footage.src} className="live-site" target="_blank">Research paper</a> :
                            null} {ProjectsData[i].src != "" ?
                            <a href={ProjectsData[i].src} className="src" target="_blank">Source code</a> :
                            null}
                        <ul>
                            {colDescProjects}
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            {colSkills}
                        </ul>
                    </div>
                </div>
            );
            projectsOther.push(colDesc);
        }

        return (
            <div id="projects" className="projects">
                {projectsGrid}
                <div className="projects-other">
                    <Container fluid={true}>
                        <div className="projects-heading">Other Projects</div>
                        {projectsOther}
                    </Container>
                </div>
            </div>
        );
    }
}
