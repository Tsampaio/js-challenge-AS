import React from 'react'
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PageNotFound = () => {
  return (
    <Container>
      <Row>
        <Jumbotron fluid className="mt-5 mb-5 w-100">
          <Container>
            <h1>404 Page Not Found</h1>
            <LinkContainer to="/">
              <Button variant="dark" className="mt-3">Search for repositories</Button>
            </LinkContainer>
          </Container>
        </Jumbotron>
      </Row>
    </Container>
  )
}

export default PageNotFound;