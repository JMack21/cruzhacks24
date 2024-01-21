
const uistuff = require('./uistuff')

function thing()
{
	const a = uistuff.createNewNewsite("Site A");
	uistuff.addBiasLineToNewsite(a, "images/bias_left.png", "Left Leaning");
	uistuff.addArticleToNewsite(a, "https://jrgraphix.net/", "JRGraphix Thing", "Jan 1, 2000");
}

export { thing };
