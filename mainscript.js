
const exampleAddingSites = require('./scripts/ui/exampleAddingSites')

const axios = require('axios');
const cheerio = require('cheerio');

function mainfunc()
{
	console.log('mainfunc() is working');

	exampleAddingSites.thing();
}

mainfunc();
