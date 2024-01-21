
import axios from 'axios';
const cheerio = require('cheerio');

async function getFirstArticleTitle(url)
{
	url = 'https://cors-anywhere.herokuapp.com/' + url;

	let firstArticleTitle;

	const axiosResponse = await axios.get(url)
	.then(response =>
	{
		const $ = cheerio.load(response.data);
		firstArticleTitle = $('div.app').toString();
	})
	.catch(error =>
	{
		console.error('Error fetching the page:', error);
	});

	return firstArticleTitle;
}

export { getFirstArticleTitle };
