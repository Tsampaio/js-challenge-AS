const axios = require('axios');
const  asyncHandler = require('express-async-handler');
const saveData = require('../utils/saveLogsData');

exports.getRepositories = asyncHandler(async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=go&per_page=6&sort=stars`);
    res.status(200).json({
      repositoryList: data.items
    })

  } catch(error) {
    res.status(404).json({
      message: 'Error connecting the API'
    })
  }
});

exports.getSearchedRepositories = asyncHandler(async (req, res) => {
  const { repositoryName } = req.body;
  const { data } = await axios.get(`https://api.github.com/search/repositories?q=${repositoryName}&per_page=6&sort=stars`);
  console.log(data);
  saveData.logs(repositoryName);

  if (data.total_count === 0) {
    res.status(404).json({
      message: 'No repositories found'
    })
  } else {
    res.status(200).json({
      repositoryList: data.items
    })
  }
});

exports.getRepositoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`https://api.github.com/repositories/${id}`);
    
    res.status(200).json({
      repository: data
    })
  } catch(error) {
    res.status(404).json({
      message: "No repository found with ID " + id
    })
  }
  
});
