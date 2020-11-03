import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/Repository.css';

const Repository = ({ name, author, stars, watchers, image, id }) => {
  
  const repositoryUrl = `/repository/${id}`
  
  return (
    <Col md={6} lg={4} className="mb-5 repository">
      <Card>
        <Card.Header>
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </Card.Header>
        
        <Card.Body>
          <p className="card-text">
            <i className="fas fa-user-circle"></i>
            <span>Author:</span> {author}
          </p>
          <p className="card-text">
            <i className="fas fa-star"></i>
            <span>Stars:</span> {stars}
          </p>
          <p className="card-text">
            <i className="far fa-eye"></i>
            <span>Watchers:</span> {watchers}
          </p>
          
          <LinkContainer to={repositoryUrl}>
            <Button variant="dark">More details</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

Repository.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  stars: PropTypes.number,
  watchers: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number
};

export default Repository;