(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const exampleAddingSites = require('./scripts/ui/exampleAddingSites')

function mainfunc()
{
	console.log('mainfunc() is working');

	exampleAddingSites.thing();
}

mainfunc();

},{"./scripts/ui/exampleAddingSites":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thing = thing;
const uistuff = require('./uistuff');
function thing() {
  const a = uistuff.createNewNewsite("Site A");
  uistuff.addBiasLineToNewsite(a, "images/bias_left.png", "Left Leaning");
  uistuff.addArticleToNewsite(a, "https://jrgraphix.net/", "JRGraphix Thing", "Jan 1, 2000");
}

},{"./uistuff":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addArticleToNewsite = addArticleToNewsite;
exports.addBiasLineToNewsite = addBiasLineToNewsite;
exports.createNewNewsite = createNewNewsite;
const ARTICLES_DROPDOWN_TEXT = "Articles on this topic";
function createNewNewsite(siteTitle) {
  const site = document.createElement('div');
  site.classList.add('newsite-div');
  const site_titleAndBias = document.createElement('div');
  site_titleAndBias.classList.add('title-and-bias-of-newsite');
  const site_titleAndBias_header = document.createElement('h2');
  site_titleAndBias_header.innerHTML = siteTitle;
  site_titleAndBias.appendChild(site_titleAndBias_header);
  site.appendChild(site_titleAndBias);
  const site_artclsDrpCnt = document.createElement('div');
  site_artclsDrpCnt.classList.add('list-of-articles-dropdown-container');
  const site_artclsDrpCnt_dts = document.createElement('details');
  site_artclsDrpCnt_dts.classList.add('list-of-articles-dropdown');
  site_artclsDrpCnt_dts.open = true;
  const site_artclsDrpCnt_dts_summary = document.createElement('summary');
  site_artclsDrpCnt_dts_summary.innerHTML = ARTICLES_DROPDOWN_TEXT;
  site_artclsDrpCnt_dts.appendChild(site_artclsDrpCnt_dts_summary);
  const site_artclsDrpCnt_dts_lst = document.createElement('div');
  site_artclsDrpCnt_dts_lst.classList.add('list-of-articles-div');
  site_artclsDrpCnt_dts.appendChild(site_artclsDrpCnt_dts_lst);
  site_artclsDrpCnt.appendChild(site_artclsDrpCnt_dts);
  site.appendChild(site_artclsDrpCnt);
  document.getElementById('the-list-of-newsites').appendChild(site);
  return site;
}
function addBiasLineToNewsite(site, imgsrc, text) {
  const biasLine = document.createElement('div');
  biasLine.classList.add('bias-of-newsite-line');
  const biasLine_img = document.createElement('img');
  biasLine_img.setAttribute('src', imgsrc);
  biasLine_img.setAttribute('style', "width:8px;height:8px");
  biasLine.appendChild(biasLine_img);
  const biasLine_text = document.createElement('p');
  biasLine_text.classList.add('bias-text');
  biasLine_text.innerHTML = text;
  biasLine.appendChild(biasLine_text);
  site.querySelector('.title-and-bias-of-newsite').appendChild(biasLine);
}
function addArticleToNewsite(site, articleUrl, articleTitle, articleDate) {
  const article = document.createElement('div');
  const article_a = document.createElement('a');
  article_a.classList.add('article-link');
  article_a.setAttribute('href', articleUrl);
  article_a.setAttribute('target', '_blank');
  article_a.setAttribute('rel', 'noopener noreferrer');
  const article_a_artdiv = document.createElement('div');
  article_a_artdiv.classList.add("article-div");
  const article_a_artdiv_title = document.createElement('h3');
  article_a_artdiv_title.innerHTML = articleTitle;
  article_a_artdiv.appendChild(article_a_artdiv_title);
  const article_a_artdiv_date = document.createElement('p');
  article_a_artdiv_date.classList.add("article-date");
  article_a_artdiv_date.innerHTML = articleDate;
  article_a_artdiv.appendChild(article_a_artdiv_date);
  article_a.appendChild(article_a_artdiv);
  article.appendChild(article_a);
  site.querySelector('.list-of-articles-dropdown-container').querySelector('.list-of-articles-dropdown').querySelector('.list-of-articles-div').appendChild(article);
}

},{}]},{},[1]);
