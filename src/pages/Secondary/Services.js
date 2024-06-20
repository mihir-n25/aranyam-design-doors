import React, { useState } from "react";
import "../../components/Styles/ServiceStyles.scss";
import Project from "./Project";
import Model from "./Model";

function Services() {
  const projects = [
    {
      title: "Hardware",
      src: "/images/Designer (1).jpeg",
      color: "#000000",
      description: "yes we have hardware",
    },
    {
      title: "Hardware",
      src: "/images/Designer (3).jpeg",
      color: "blue",
      description: "yes we have hardware",
    },
    {
      title: "Hardware",
      src: "/images/Designer (4).jpeg",
      color: "#000000",
      description: "yes we have hardware",
    },
    {
      title: "Hardware",
      src: "/images/Designer (6).jpeg",
      color: "#000000",
      description: "yes we have hardware",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="main">
      <div className="body">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              setModal={setModal} 
            />
          );
        })}
      </div>

      <Model modal={modal} projects={projects}/>
    </main>
  );
}

export default Services;
