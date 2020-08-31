import React from "react";
import { Button, Card, Figure } from "react-bootstrap";
import "./ProjectCard.css";
import LanguageList from "../LanguageList/LanguageList";

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
                <Card.Title>{title}</Card.Title>
                <LanguageList languages={languages} />
                <Card.Text>{description}</Card.Text>
                {url ? <Button variant="primary" href={url}>live demo</Button> : <></> }
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;