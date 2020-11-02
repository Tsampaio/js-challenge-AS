const axios = require('axios');

describe('requests to /api/repositories', () => {
  test('requests return with 200 status code', () => {
    axios.get('https://api.github.com/search/repositories?q=go&per_page=6&sort=stars')
      .then( response => {
        expect(response.statusCode).toEqual(200);
    });
  });

  test('requests return with 6 results', () => {
    axios.get('https://api.github.com/search/repositories?q=go&per_page=6&sort=stars')
      .then( response => {
        expect(response.data.items.length).toBe(6);
    });
  });

});