import React, { Component } from 'react';

const Resume = ({ data }) => {

  if (data) {
    var education = data.education.map((edu) => (
      <div key={edu.school} className="row item">
        <div className="twelve columns">
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree}
            {' '}
            <span>&bull;</span>
            {' '}
            <em className="date">{edu.graduated}</em>
          </p>
          <p>
            {edu.description}
          </p>
        </div>
      </div>
    ));

    var work = data.work.map((job) => (
      <div key={job.company} className="row item">
        <div className="twelve columns">
          <h3>{job.company}</h3>
          <p className="info">
            {job.title}
            <span>&bull;</span>
            {' '}
            <em className="date">{job.years}</em>
          </p>

          <p>
            {job.description}
          </p>
        </div>
      </div>
    ));

    var skills = data.skills.map((skill) => {
      const className = `bar-expand ${skill.name.toLowerCase()}`;
      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={className} />
          <em>{skill.name}</em>
        </li>
      );
    });
  }
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          {education}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>
            The main skill sets below outline the variety of skills performed within my current role as Senior Photographer at Block Media in Paris, France..
          </p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
