
const mainNewsSites = require('./scripts/ui/mainNewsSites')
const nyt = require('./scripts/webscraping/nyt');

async function mainfunc()
{
	await mainNewsSites.addMainNewsSites();
}

(async () => {
	mainfunc();
})();
