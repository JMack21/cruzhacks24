
const uistuff = require('./uistuff')
const articlestuff = require('./../webscraping/articlestuff')

async function thing()
{
	const a = uistuff.createNewNewsite("Site A");
	uistuff.addBiasLineToNewsite(a, "images/bias_left.png", "Left Leaning");
	uistuff.addArticleToNewsite(a, "https://jrgraphix.net/", "JRGraphix Thing", "Jan 1, 2000");

	const nyt = uistuff.createNewNewsite("New York Times");
	uistuff.addBiasLineToNewsite(nyt, "images/bias_left.png", "Slight Left Leaning");
	const hampshire = 'https://www.nytimes.com/2024/01/20/us/politics/trump-new-hampshire-haley.html';

	const hmpTitle = await articlestuff.getArticleTitle(hampshire);
	console.log('fsdljkkldjfakldjafs');
	console.log('Hampshir Titl: ' + hmpTitle);

	uistuff.addArticleToNewsite(nyt, hampshire, hmpTitle, "Jho 52, 3099");
}

export { thing };
