
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
		onGottenPageUrl(u);
	});

}

async function onGottenPageUrl(theUrl)
{
	await new Promise(r => setTimeout(r, 100));

	const subjArticleTitle = await articlestuff.getArticleTitle(theUrl);
	console.log('Article Title Maybe: ' + subjArticleTitle);

	await new Promise(r => setTimeout(r, 100));

	const farLeft = uistuff.createNewNewsite("Vice News");
	uistuff.addBiasLineToNewsite(farLeft, "images/bias_far_left.png", "Far Left Leaning");

	const slightLeft = uistuff.createNewNewsite("New York Times");
	uistuff.addBiasLineToNewsite(slightLeft, "images/bias_slight_left.png", "Slight Left Leaning");

	const centrist = uistuff.createNewNewsite("BBC");
	uistuff.addBiasLineToNewsite(centrist, "images/bias_centrist.png", "Mainly Centrist");

	const slightRight = uistuff.createNewNewsite("Reason");
	uistuff.addBiasLineToNewsite(slightRight, "images/bias_slight_right.png", "Slight Right Leaning");

	const farRight = uistuff.createNewNewsite("Fox News");
	uistuff.addBiasLineToNewsite(farRight, "images/bias_far_right.png", "Far Right Leaning");

	let sites = [[farLeft, 'vice.com'], [slightLeft, 'nytimes.com'], [centrist, 'bbc.com'], [slightRight, 'reason.com'], [farRight, 'foxnews.com']];

	for (let i = 0; i < sites.length; i++)
	{
		const siteElm = sites[i][0];
		const siteStr = sites[i][1];

		let searchResults = await googlesearch.getGoogleSearchResults(siteStr, subjArticleTitle);
		console.log(searchResults);
		await new Promise(r => setTimeout(r, 500));

		for (let j = 0; j < searchResults.length; j++)
		{
			uistuff.addArticleToNewsite(siteElm, searchResults[j], await articlestuff.getArticleTitle(searchResults[j]), 'Jan 0, 0000');
			await new Promise(r => setTimeout(r, 500));
		}

		await new Promise(r => setTimeout(r, 500));
	}
}

(async () => {
    mainfunc();
})();