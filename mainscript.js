
const mainNewsSites = require('./scripts/ui/mainNewsSites');
const articlestuff = require('./scripts/webscraping/articlestuff');
const googlesearching = require('./scripts/webscraping/googlesearching');

async function mainfunc()
{
	await mainNewsSites.addMainNewsSites();

	console.log("weeeeeeeeee");
	googlesearching.generateGoogleSearchUrl();

	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>
	{
		let u = tabs[0].url;
		console.log("bronk: " + u);
		onGottenPageUrl(u);
	});

	// console.log("Yourl: " + await googlesearching.generateGoogleSearchUrl('bbc.com', 'Bruh Stinky\n Yep'));
}

async function onGottenPageUrl(theUrl)
{
	console.log("weyEah: " + theUrl);
}

(async () => {
	mainfunc();
})();
