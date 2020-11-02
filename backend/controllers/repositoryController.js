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