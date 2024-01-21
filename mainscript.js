const mainNewsSites = require('./scripts/webscraping/googlesearch.js')

async function mainfunc()
{
    await mainNewsSites.getGoogleSearchResults();
}

(async () => {
    mainfunc();
})();