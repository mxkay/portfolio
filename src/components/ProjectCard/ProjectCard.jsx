import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProjectCard.css";
import DevToolList from "../DevToolList/DevToolList";

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
            <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
                <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>
                <Card.Body>
                    {url ? <Button variant="primary" href={url}>live demo</Button> : <></> }
                </Card.Body>
                <DevToolList toolNames={languages} />
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;