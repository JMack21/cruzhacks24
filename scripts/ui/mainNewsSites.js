
const uistuff = require('./uistuff')
const articlestuff = require('./../webscraping/articlestuff')

async function addMainNewsSites()
{
	const farLeft = uistuff.createNewNewsite("FarLeftSite");
	uistuff.addBiasLineToNewsite(farLeft, "images/bias_far_left.png", "Far Left Leaning");

	const slightLeft = uistuff.createNewNewsite("SlightLeftSite");
	uistuff.addBiasLineToNewsite(slightLeft, "images/bias_slight_left.png", "Slight Left Leaning");

	const centrist = uistuff.createNewNewsite("CentristSite");
	uistuff.addBiasLineToNewsite(centrist, "images/bias_centrist.png", "Mainly Centrist");

	const slightRight = uistuff.createNewNewsite("SlightRightSite");
	uistuff.addBiasLineToNewsite(slightRight, "images/bias_slight_right.png", "Slight Right Leaning");

	const farRight = uistuff.createNewNewsite("FarRightSite");
	uistuff.addBiasLineToNewsite(farRight, "images/bias_far_right.png", "Far Right Leaning");
}

export { addMainNewsSites };
