
async function generateGoogleSearchUrl(siteName, articleTitle)
{
	let newTitleA = '' + articleTitle.replaceAll(' ', '+');
	let newTitleB = '';
	for (let i = 0; i < newTitleA.length; i++)
	{
		if (newTitleA.charAt(i).match(/[a-zA-Z0-9\+]/i))
		{ newTitleB += newTitleA.charAt(i); }
	}

	let ret = 'https://www.bing.com/search?q=';
	ret += siteName;
	ret += '+' + newTitleB;
	return ret;
}

export { generateGoogleSearchUrl };
