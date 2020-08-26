import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectPortfolio.css";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectPortfolio = () => {
    const [projects, updateProjects] = useState([]);

    // ON MOUNT
    useEffect( () => {
        // const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit?usp=sharing';
        const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/od6/public/values?alt=json'

        // FETCH project data
        axios(sheetAsJSON)
        // STORE project data to state
        .then( response => {
            // console.log("response.data", response.data);
            updateProjects( response.data.feed.entry.map( project => {
                return {
                    title: project.gsx$title.$t,
                    image: project.gsx$image.$t,
                    description: project.gsx$description.$t,
                    url: project.gsx$url.$t
                }
            }));
        })
        .catch( err => console.log('error loading ajax'));
    },[]);

    return (
        <div className="projects-container">
            {projects[0] ? projects.map( project => <ProjectCard project={project} /> ) : <></>}
        </div>
    );
}

export default ProjectPortfolio;