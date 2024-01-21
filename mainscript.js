
const mainNewsSites = require('./scripts/ui/mainNewsSites')

async function mainfunc()
{
	await mainNewsSites.addMainNewsSites();
}

(async () => {
	mainfunc();
})();
