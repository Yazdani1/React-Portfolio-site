import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Video-Streaming-Platform (MERN Stack)",
      des: "This is a video streaming platform project, where user can register to this site and they can create video posts. This is a complete MERN Stack project with Typescript and AWS S3",
      projectlink: "https://video-streaming-platform.vercel.app/",
      techused: [
        {
          techname: "MERN Stack",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },
        {
          techname: "Redux-Toolkit",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "AWS S3",
        },
        {
          techname: "AWS SES",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Vercel",
        },
      ],
    },

    {
      name: "Multi-User-Portal (MERN Stack)",
      des: "This is a Multi-User-Portal project. This is a complete MERN Stack project with Typescript and AWS S3",
      projectlink: "https://multi-user-portal.vercel.app/",
      techused: [
        {
          techname: "MERN Stack",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },
        {
          techname: "Redux-Toolkit",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "AWS S3",
        },
        {
          techname: "AWS SES",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Vercel",
        },
      ],
    },

    {
      name: "Job Portal (MERN Stack)",
      des: "This is a job portal web app. Where company can publish their jobs and employees can apply for the job. It's a complete MERN stack project",
      projectlink: "https://mern-job-portal.herokuapp.com/",
      techused: [
        {
          techname: "MERN Stack",
        },

        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },

        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },

        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Heroku",
        },
      ],
    },
    {
      name: "Single Page Company Portfolio",
      des: "This is a complete single page company portfolio web application using React JS",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
       
        {
          techname: "Javascript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Netlify",
        },
      ],
    },


  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
