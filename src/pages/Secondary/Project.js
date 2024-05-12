import React from "react";
import '../../components/Styles/ProjectStyles.scss'


const Project = ({ index, title, setModal, description }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className='project'
    >

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;
