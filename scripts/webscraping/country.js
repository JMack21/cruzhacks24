function CountryKeyWord(head){
    const nationality = {
        american: "america",
        palestinian: "palestine",
        israeli: "israel",
        ukraine: "ukrainian",
        russian: "russia",
        english: "england",
        british: "england",
        french: "france",
        indian: "india",
        pakistani: "pakistan",
        chinese: "china",
        iranian: "iran",
        iraqi: "iraq",
        german: "germany",
        japanese: "japan",
        korean: "korea",
      };
    
    let country = {
        america: false,
        palestine: false,
        israel: false,
        ukraine: false,
        russia: false,
        england: false,
        france: false,
        india: false,
        pakistan: false,
        china: false,
        iran: false,
        iraq: false,
        germany: false,
        japan: false,
        korea: false
    };
    
    const websites = {
        america: "https://www.nytimes.com/search?query=",
        palestine: "https://www.palestinechronicle.com/?s=",
        israel: "https://www.timesofisrael.com/search/?q=",
        ukraine: "https://ukrainianweek.com/?s=",
        russia: "https://eng.kavkaz-uzel.eu/search?context=article&keywords=",
        england: "https://www.bbc.com/search?q=",
        france: "https://www.afp.com/en/search/results/",
        india: "https://timesofindia.indiatimes.com/topic/",
        pakistan: "https://www.rabwah.net/?s=",
        china: "https://newssearch.chinadaily.com.cn/en/search?query=",
        iran: "https://www.tehrantimes.com/search?lang=en&l=&a=0&q=",
        iraq: "https://www.iraqinews.com/?s=",
        germany: "https://www.deutschland.de/en/search?keys=",
        japan: "https://www.tokyoreporter.com/?s=",
        korea: "https://www.koreatimes.co.kr/www2/common/search.asp?kwd="
    };

    let title = head.toLowerCase();

    for (key in nationality) {
        if (title.includes(key)) {
            country[nationality[key]] = true;
        }
    }

    for (key in country) {
    //console.log(key);
        if (title.includes(key)) {
            country[key] = true;
            //console.log(key);
        }
    }

    //array
    const links = [];
    let count = 0;
    for (key in country) {
        if (country[key] == true) {
            console.log(key);
            links[count] = key;
            count = count + 1;
            links[count] = websites[key];
            count = count + 1;
        }
    }

    if (count == 0) {
        return "Undefined";
    }

    console.log(links);
    return links;
    //country['america'] = true;
}
