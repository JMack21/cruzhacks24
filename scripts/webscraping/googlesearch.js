import axios from 'axios';
const cheerio = require('cheerio');
const googleSearching = require('./googlesearching');

async function getGoogleSearchResults(siteName, articleTitle) {
    try {

      const response = await axios.get(`https://cors-anywhere.herokuapp.com/`.concat(await googleSearching.generateGoogleSearchUrl(siteName, articleTitle)));
      // Extract links from the search results
      const $ = cheerio.load(response.data);
      const links = [];
	  $('a').each((index, element) => {
		const link = $(element).attr('href');
		if (link && !link.startsWith('#') && (link.includes("https://www.".concat(siteName)) || link.includes("https://".concat(siteName)))) {
		  links.push(link);
		}
	  });
      // Return the first few links
      const numberOfLinks = 3; // Adjust this number as needed
      //console.log("Length of links:", links.length)
      //console.log('First few links from search result:', links[0], links[1], links[2]);
	  let sublist = links.slice(0, numberOfLinks * 2);
	  let everyOtherOne = [];
	  for (let i = 0; i < sublist.length; i+=2)
	  {
		everyOtherOne.push(sublist[i]);
	  }
      return everyOtherOne;
    } catch (error) {
      console.error('Error fetching search results:', error.message);
      //return [];
    }
  }

export { getGoogleSearchResults }