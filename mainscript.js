
const exampleAddingSites = require('./scripts/ui/exampleAddingSites')

async function mainfunc()
{
	console.log('mainfunc() is working');
	await exampleAddingSites.thing();
	console.log('mainfunc() after got');
}

(async () => {
	mainfunc();
})();
