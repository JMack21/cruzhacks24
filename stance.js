function PoliticalStance(source){
    const PoliLean = {
        cnn: "Left Centrist",
        fox: "Right",
        newyorktimes: "Left Centrist",
        bbc: "Centrist",
        aljazeera: "Left Centrist",
        wallstreet: "Centrist",
        washingtonpost: "Left Centrist",
        npr: "Left Centrist",
        associatedpress: "Left Centrist",
        cbs: "Left Centrist",
        abc: "Left Centrist",
        vox: "Left",
        vice: "Left",
        cnbc: "Left Centrist",
        skynews: "Left Centrists",
        usatoday: "Left Centrists",
        timesofindia: "Right Centric",
        buzzfeed: "Left",
        bloomberg: "Left Centric",
        forbes: "Centric",
        reuters: "Centric",
        breitbartnews: "Right",
        dailymail: "Right",
        reason: "Right Centric",
        theamericanspectator: "Right",
        thedailywire: "Right"
    };
    let article = source.toLowerCase();
    article = article.replaceAll(" ", "");
    console.log(article);
    return PoliLean[article];
}

//console.log(PoliticalStance('Buzz Fee d'));



// Random Stuff

/*
const axios = require('axios');
const cheerio = require('cheerio');


fetch('https://www.nytimes.com/2024/01/20/us/affirmative-action-ban-college-essays.html?unlocked_article_code=1.PE0.qcil.bExfo4awyRa7&smid=url-share')
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        // Load HTML in Cheerio
        const $ = cheerio.load(html);
        
        // Use `title` as a selector and extract
        // the text using the `text()` method
        console.log($('body').text())
    })
    .catch(function (err) {
        console.log('Failed to fetch page: ', err);
    });


----------------------
const url = 'https://www.allsides.com/media-bias/ratings';

const BigData = {};

async function getHTML() {
    const { data: html} = await axios.get(url);
    return html;
};

getHTML().then((res) => {
    const $ = cheerio.load(res);
    $('').each((i, name) => {
        const title = $(name).find('title').text(); 
    })
});

*/