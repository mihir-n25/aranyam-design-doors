import React, { useState } from "react";
import "../../components/Styles/ServiceStyles.scss";
import Project from "./Project";
import Model from "./Model";

function Services() {
  const projects = [
    {
      title: "Doors",
      src: "/images/Designer (13).jpeg",
      color: "#272343",
      description: "We provide doors & other related things",
    },
    {
      title: "Handles",
      src: "/images/Designer (17).jpeg",
      color: "#272343",
      description: "All the equipment & hardwares regarding doors",
    },
    {
      title: "WallPanels",
      src: "/images/Designer (29).jpeg",
      color: "#272343",
      description: "Customize wall panels with different shades",
    },
    {
      title: "Repair",
      src: "/images/Designer (15).jpeg",
      color: "#272343",
      description: "Enhance security by renovate your doors",
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
