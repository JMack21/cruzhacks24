import axios from 'axios';

// const axios = require('axios');
const cheerio = require('cheerio');

// URL of the news article you want to scrape
const url = 'https://cors-anywhere.herokuapp.com/https://www.nytimes.com/2024/01/20/us/politics/trump-new-hampshire-haley.html';

// Declare articleTitle outside the block
let articleTitle;

// Make a GET request to the URL with User-Agent header
axios.get(url)
  .then(response => {
    // Load the HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Find the title from the <title> tag
    articleTitle = $('title').text();

    // Print the article title
    console.log('Article Title:', articleTitle);
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });