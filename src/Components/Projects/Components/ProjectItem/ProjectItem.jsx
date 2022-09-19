import * as React from 'react';
import './ProjectItem.scss';
import GitIcon from '../../Assets/Git';
import EyeIcon from '../../Assets/Eye';

import eye from '../../Assets/eye.svg';
import git from '../../Assets/git.svg';

export default function ProjectItem({ item }) {
  const { name, description, gitLink, urlLink, img, skills } = item;
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={img} />
        <div className="mask">
          <a href={urlLink}>
            <div className="eye">
              <EyeIcon fill="#FFFFFF" />
            </div>
          </a>
          <a href={gitLink}>
            <div className="git">
              <GitIcon fill="#FFFFFF" />
            </div>
          </a>
        </div>
      </div>
      <div className="project-content">
        <h4 className="name">{name}</h4>
        <p className="description">
          {description}
          <div className="links">
            <a href={urlLink}>
              <div className="eye">
                <EyeIcon fill="#FFFFFF" />
              </div>
            </a>
            <a href={gitLink}>
              <div className="git">
                <GitIcon fill="#FFFFFF" />
              </div>
            </a>
          </div>
        </p>

        <div className="skills">
          {skills.map((skill, index) => {
            return (
              <span className="skill-name" key={index}>
                #{skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
