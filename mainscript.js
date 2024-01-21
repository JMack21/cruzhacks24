
const mainNewsSites = require('./scripts/ui/mainNewsSites')
const googlesearching = require('./scripts/webscraping/googlesearching');

async function mainfunc()
{
	await mainNewsSites.addMainNewsSites();

	console.log("Yourl: " + await googlesearching.generateGoogleSearchUrl('bbc.com', 'Bruh Stinky\n Yep'));
}

(async () => {
	mainfunc();
})();
