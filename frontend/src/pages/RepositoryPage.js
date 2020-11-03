import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { repositoryDetailsAction } from '../actions/repositoryActions';
import {Card, Button, Jumbotron, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';

const RepositoryPage = ({ match, repositoryDetailsAction, repositoryDetails }) => {
  const { loading, error, repository } = repositoryDetails;
  const { id } = match.params;

  useEffect(() => {
    repositoryDetailsAction(id);
  }, [repositoryDetailsAction, id]);

  const convertDateFormat = (dateToFormat) => {
    const date = new Date(dateToFormat);

    return date.getDate() + "/"
      + (date.getMonth() + 1) + "/"
      + date.getFullYear();
  }

  return (
    <div>
      <LinkContainer to="/">
        <Button variant="dark">Go back</Button>
      </LinkContainer>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        <>
          <Jumbotron fluid className="mt-5 mb-5">
            <Container>
              <h1>{repository.name}</h1>
              <p className="mt-3">{repository.description}</p>
            </Container>
          </Jumbotron>

          <Card>
            <Card.Header>Details</Card.Header>
            <Card.Body>
              <Card.Text>
                <i className="fas fa-user-circle"></i>
                <span>Author:
                <img className="ml-2 mr-2" src={repository.owner && repository.owner.avatar_url} alt={repository.owner && repository.owner.login} style={{ height: "15px" }} />
                  {repository.owner && repository.owner.login}
                </span>
              </Card.Text>
              <Card.Text>
                <i className="fas fa-home"></i>
                <span>Home Page: {repository.homepage ? repository.homepage : "Not provided"}</span>
              </Card.Text>
              <Card.Text>
                <i className="far fa-calendar-alt"></i>
                <span>Created at: {convertDateFormat(repository.created_at)}</span>
              </Card.Text>
              <Card.Text>
                <i className="fas fa-star"></i>
                <span>Stars:</span> {repository.stargazers_count}
              </Card.Text>
              <Card.Text>
                <i className="far fa-eye"></i>
                <span>Watchers:</span> {repository.watchers}
              </Card.Text>
              <Card.Text>
                <i className="fas fa-code"></i>
                <span>Language:</span> {repository.language}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated at: {convertDateFormat(repository.updated_at)}</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      }
    </div>
  )
}

RepositoryPage.propTypes = {
  match: PropTypes.object,
  repositoryDetailsAction: PropTypes.func,
  repositoryDetails: PropTypes.object
};

const mapStateToProps = state => ({
  repositoryDetails: state.repositoryDetails
})

export default connect(mapStateToProps, {repositoryDetailsAction})(RepositoryPage);
