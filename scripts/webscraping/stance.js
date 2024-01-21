function PoliticalStance(source) {
    const PoliLean = {
      cnn: "Left Centrist",
      fox: "Right",
      nytimes: "Left Centrist",
      bbc: "Centrist",
      aljazeera: "Left Centrist",
      wsj: "Centrist",
      washingtonpost: "Left Centrist",
      npr: "Left Centrist",
      apnews: "Left Centrist",
      cbs: "Left Centrist",
      abc: "Left Centrist", //check
      vox: "Left",
      vice: "Left",
      cnbc: "Left Centrist",
      sky: "Left Centrists",
      usatoday: "Left Centrists",
      timesofindia: "Right Centric",
      buzzfeednews: "Left",
      bloomberg: "Left Centric",
      forbes: "Centric",
      reuters: "Centric",
      breitbart: "Right",
      dailymail: "Right",
      reason: "Right Centric", //check
      spectator: "Right", //check
      dailywire: "Right",
      //international sides
      palestinechronicle: "Left",
      timesofisrael: "Left Centric",
      ukrainianweek: "Undefined",
      caucasianknot: "Undefined",
      afp: "Left",
      rabwah: "Undefiend",
      newssearch: "Undefined",
      tehrantimes: "Right Centric",
      iraqinews: "Right",
      deutschland: "Centric",
      tokyoreporter: "Undefined",
      koreatimes: "Left Centric",
    };
    if(source != "Undefined"){
      let article = source.toLowerCase();
      article = article.replaceAll(" ", "");
      console.log(article);
      return PoliLean[article];
      //meow
    }
    else{
      return "Undefined";
    }
  }

  function getUrl(name) {
    const siteName = {
      cnn: "cnn.com",
      fox: "foxnews.com",
      nytimes: "nytimes.com",
      bbc: "bbc.com",
      aljazeera: "aljazeera.com",
      wsj: "wsj.com",
      washingtonpost: "washingtonpost.com",
      npr: "npr.org",
      apnews: "apnews.com",
      cbs: "cbs.com",
      abc: "abc.com", //check
      vox: "vox.com",
      vice: "vice.com",
      cnbc: "cnbc.com",
      sky: "sky.com",
      usatoday: "usatoday.com",
      indiatimes: "indiatimes.com",
      buzzfeednews: "buzzfeednews.com",
      bloomberg: "bloomberg.com",
      forbes: "forbes.com",
      reuters: "reuters.com",
      breitbart: "breitbart.com",
      dailymail: "dailymail.co.uk",
      reason: "reason.com", //check
      spectator: "spectator.co.uk", //check
      dailywire: "dailywire.com",
      //international
      palestinechronicle: "palestinechronicle.com",
      timesofisrael: "timesofisrael.com",
      ukrainianweek: "ukrainianweek.com",
      caucasianknot: "eng.kavkaz-uzel.eu",
      afp: "afp.com",
      rabwah: "rabwah.net",
      newssearch: "newssearch.chinadaily.com",
      tehrantimes: "tehrantimes.com",
      iraqinews: "iraqinews.com",
      deutschland: "deutschland.de",
      tokyoreporter: "tokyoreporter.com",
      koreatimes: "koreatimes.co.kr",
    };
    if(name != "Undefined"){
      name = name.toLowerCase();
      name = name.replaceAll(" ", "");
      let addi = siteName[name];
      return addi;
      }
    else{
      return "Undefined";
    }
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