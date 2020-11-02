const express = require('express');
const router = express.Router();

const { 
  getRepositories, 
  getSearchedRepositories,
  getRepositoryById
} = require ('../controllers/repositoryController.js');

router.get('/repositories', getRepositories);
router.post('/search/repositories', getSearchedRepositories);
router.get('/repository/:id', getRepositoryById);

module.exports = router;