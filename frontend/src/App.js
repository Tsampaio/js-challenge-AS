import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import PageNotFound from './components/PageNotFound';
import RepositoryPage from './pages/RepositoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/repository/:id" component={RepositoryPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
}

export default App;