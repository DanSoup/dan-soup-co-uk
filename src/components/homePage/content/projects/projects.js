import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

let projects;

if (process.env.NODE_ENV === 'development') {
  projects = require('../../../offline-data/projects')
} else {

}

const Projects = (props) => {

  const ProjectPreview = ({project}) => {
    return <section>
      <img height="150" width="300" src={project.previewImg}></img>
      <div className="spacer"></div>
      <h1>{project.title}</h1>
      <div className="spacer"></div>
      <h2>Published 10/2019</h2>
    </section>
  };

  return <div className="projects">
    {projects.map(project => {
      return <ProjectPreview project={project}></ProjectPreview>
    })}
  </div>

}

Projects.propTypes = {

};

export default Projects;