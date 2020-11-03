import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { repositoryListAction, searchRepositoryAction } from '../actions/repositoryActions';
import Repository from '../components/Repository';
import Message from '../components/Message';
import Loader from '../components/Loader';
import '../css/HomePage.css';

const HomePage = ({ repositoryList, repositoryListAction, searchRepositoryAction }) => {
  const { loading, error, repositories } = repositoryList;

  const [repositoryName, setRepositoryName] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (repositories && repositories.length === 0) {
      repositoryListAction()
    }
  }, [repositoryListAction]);

  const searchRepository = (e) => {
    e.preventDefault();
    if (repositoryName) {
      searchRepositoryAction(repositoryName);
      setMessage("");
    } else {
      setMessage("Input field is empty");
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 mb-5 title"><i className='fab fa-github'></i> Search Repositories</h1>
          <Form onSubmit={searchRepository}>
            <Form.Control
              id="input-search-repositories"
              data-test="input-search-repositories"
              type='text' placeholder='Repository name'
              value={repositoryName}
              onChange={(e) => setRepositoryName(e.target.value)} />
            <Button data-test="submit-button" id="searchButton" type='submit' variant='primary'>Search</Button>
          </Form>
          {message ? <Message variant='danger'>{message}</Message> : null}
        </Col>
      </Row>
      <Row className="mt-5">
        <Col><h3>Popular Repositories</h3></Col>
      </Row>
      <Row className="mt-3">
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
          repositories.map((repository, i) => (
            <Repository
              name={repository.name}
              author={repository.owner.login}
              stars={repository.stargazers_count}
              watchers={repository.watchers}
              image={repository.owner.avatar_url}
              id={repository.id}
              key={i}
            />
          ))}
      </Row>
    </Container>
  )
}

HomePage.propTypes = {
  repositoryList: PropTypes.object,
  repositoryListAction: PropTypes.func,
  searchRepositoryAction: PropTypes.func
};

const mapStateToProps = state => ({
  repositoryList: state.repositoryList
})

export default connect(mapStateToProps, { repositoryListAction, searchRepositoryAction })(HomePage);