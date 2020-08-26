import React from "react";
import { Button, Card, Figure } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <Card className="project-card">
            <div className="project-card-image-clipzone" >
                <Card.Img variant="top" src={project.image} className="project-card-image" />
            </div>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.url ? <Button variant="primary" href={project.url}>live demo</Button> : <></> }
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;