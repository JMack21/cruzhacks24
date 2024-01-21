import axios from 'axios';
const cheerio = require('cheerio');

async function getArticleTitle(url)
{
	url = 'https://cors-anywhere.herokuapp.com/' + url;

	// Declare articleTitle outside the block
	let articleTitle;

	// Make a GET request to the URL with User-Agent header
	const axiosResponse = await axios.get(url)
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

	return articleTitle;
}

export { getArticleTitle }
