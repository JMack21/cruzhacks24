
const mainNewsSites = require('./scripts/ui/mainNewsSites');
const articlestuff = require('./scripts/webscraping/articlestuff');
const googlesearching = require('./scripts/webscraping/googlesearching');
const uistuff = require('./scripts/ui/uistuff');
const googlesearch = require('./scripts/webscraping/googlesearch');

async function mainfunc()
{
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>
	{
		let u = tabs[0].url;
		console.log("bronk: " + u);
		onGottenPageUrl(u);
	});

}

async function onGottenPageUrl(theUrl)
{
	const subjArticleTitle = await articlestuff.getArticleTitle(theUrl);

	const a = uistuff.createNewNewsite("ExampleSiteA");
	uistuff.addBiasLineToNewsite(a, "images/bias_far_left.png", "Far Left Leaning");
	uistuff.addArticleToNewsite(a, "https://jrgraphix.net/", "TestArticle", "Jan 1, 2000");

	let searchResults = await googlesearch.getGoogleSearchResults('bbc.com', 'obama');
	console.log(searchResults);
}

(async () => {
    mainfunc();
})();