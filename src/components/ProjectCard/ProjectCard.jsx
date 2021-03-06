import React from 'react';
import { Button, Card } from 'react-bootstrap';
import DevToolList from '../DevToolList/DevToolList';
import { GoRepo as RepoIcon } from 'react-icons/go';
import { FaRegEye as DemoIcon } from 'react-icons/fa';

import './ProjectCard.css';

const ProjectCard = ({
  title,
  image,
  description,
  url,
  repository,
  frontend,
  backend,
  languages,
  libraries
}) =>
  <Card className='project-card'>
    <div className='project-card-image-clipzone'>
      <Card.Img className='project-card-image' variant='top' src={image} />
    </div>
    <Card.Body className='project-card-body'>
      <Card.Title className='project-card-title'>{title}</Card.Title>
      <Card.Text className='project-card-description'>{description}</Card.Text>
      <Card.Body className='project-card-button-container'>
        {repository
          ? (
            <Button variant='secondary' href={repository}>
              <RepoIcon /> repo
            </Button>
            )
          : <></>}
        {frontend
          ? (
            <Button variant='secondary' href={frontend}>
              <RepoIcon /> frontend
            </Button>
            )
          : <></>}
        {backend
          ? (
            <Button variant='secondary' href={backend}>
              <RepoIcon /> backend
            </Button>
            )
          : <></>}
        {url
          ? (
            <Button variant='secondary' href={url}>
              <DemoIcon /> demo
            </Button>
            )
          : <></>}
      </Card.Body>
      <DevToolList toolNames={languages} />
      <DevToolList toolNames={libraries} />
    </Card.Body>
  </Card>;

export default ProjectCard;
