const request = require('request');
const cheerio = require('cheerio');

// Making request
request('https://prafullthakur.netlify.app/', (err, response, html) => {
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const siteHeading = $('.main-txt');
        //const output = siteHeading.find('p').text();
        //const output = siteHeading.children('p').text();
        //const output = siteHeading.children('p').next().text();
        //const output = siteHeading.children('p').parent().text();
        $('.Menu-container a').each((i, lists) => {
            const list = $(lists).text();
            const link = $(lists).attr('href');
            console.log(link);
        })

    } else {
        console.log(err);
    }
})