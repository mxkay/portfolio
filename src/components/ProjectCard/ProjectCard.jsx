import React from "react";
import { Button, Card } from "react-bootstrap";
import DevToolList from "../DevToolList/DevToolList";
import { GoRepo } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

import "./ProjectCard.css";

const ProjectCard = ({
    title,
    image,
    description,
    url,
    repository,
    languages,
    libraries
}) => {
    return (
        <Card className="project-card">
            <div className="project-card-image-clipzone" >
                <Card.Img variant="top" src={image} className="project-card-image" />
            </div>
            <Card.Body className="project-card-body">
                <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
                <Card.Text style={{ textAlign: "left", flexGrow: 1 }}>{description}</Card.Text>
                <Card.Body className="project-card-button-container">
                    {repository ?
                        <Button variant="secondary" href={repository}>
                            <GoRepo /> repo
                        </Button>
                    : <></> }
                    {url ?
                        <Button variant="secondary" href={url}>
                            <FaRegEye /> demo
                        </Button>
                    : <></> }
                </Card.Body>
                <DevToolList toolNames={languages} />
                <DevToolList toolNames={libraries} />
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;