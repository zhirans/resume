/* eslint-disable react/prop-types */

import React from 'react';

const About = ({ data }) => {
  const {
    name, image, bio, address, phone, email, resumeDownload,
  } = data;
  const { street, city, state, zip } = address;
  const imageUrl = 'images/' + image;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={imageUrl} alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            {bio}
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city}
                  ,
                  {state}
                  {' '}
                  {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
