
const uistuff = require('./uistuff')
const articlestuff = require('./../webscraping/articlestuff')

async function thing()
{
	const a = uistuff.createNewNewsite("Site A");
	uistuff.addBiasLineToNewsite(a, "images/bias_far_left.png", "Far Left Leaning");
	uistuff.addArticleToNewsite(a, "https://jrgraphix.net/", "JRGraphix Thing", "Jan 1, 2000");

	const nyt = uistuff.createNewNewsite("New York Times");
	uistuff.addBiasLineToNewsite(nyt, "images/bias_slight_left.png", "Slight Left Leaning");
	const hampshire = 'https://www.nytimes.com/2024/01/20/us/politics/trump-new-hampshire-haley.html';

	uistuff.addArticleToNewsite(nyt, hampshire, await articlestuff.getArticleTitle(hampshire), "Jho 52, 3099");
}

export { thing };
