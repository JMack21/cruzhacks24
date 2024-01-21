
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

	const farLeft = uistuff.createNewNewsite("FarLeftSite");
	uistuff.addBiasLineToNewsite(farLeft, "images/bias_far_left.png", "Far Left Leaning");

	const slightLeft = uistuff.createNewNewsite("SlightLeftSite");
	uistuff.addBiasLineToNewsite(slightLeft, "images/bias_slight_left.png", "Slight Left Leaning");

	const centrist = uistuff.createNewNewsite("Big British Company");
	uistuff.addBiasLineToNewsite(centrist, "images/bias_centrist.png", "Mainly Centrist");

	const slightRight = uistuff.createNewNewsite("SlightRightSite");
	uistuff.addBiasLineToNewsite(slightRight, "images/bias_slight_right.png", "Slight Right Leaning");

	const farRight = uistuff.createNewNewsite("FarRightSite");
	uistuff.addBiasLineToNewsite(farRight, "images/bias_far_right.png", "Far Right Leaning");

	let sites = [[farLeft, 'bbc.com'], [slightLeft, 'bbc.com'], [centrist, 'bbc.com'], [slightRight, 'bbc.com'], [farRight, 'bbc.com']];

	for (let i = 0; i < sites.length; i++)
	{
		const siteElm = sites[i][0];
		const siteStr = sites[i][1];

		console.log('SHe: ' + siteStr);

		let searchResults = await googlesearch.getGoogleSearchResults(siteStr, 'obama');
		console.log(searchResults);
		for (let j = 0; j < searchResults.length; j++)
		{
			uistuff.addArticleToNewsite(siteElm, searchResults[j], await articlestuff.getArticleTitle(searchResults[j]), 'Jan 0, 0000');
		}
	}
}

(async () => {
    mainfunc();
})();