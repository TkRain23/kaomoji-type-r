const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// loads the page into cheerio
axios.get('http://kaomoji.ru/en/')
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            parseHtml($)
        }
    }, (err) => console.log(err));

const parseHtml = ($) => {
    const h3 = $('div#content br + h3')
    const p = $('div#content h3 + p') // select every p right after an h3 where located in content div
    const spans = $('div#content div.mobile_friendly table.table_kaomoji tbody tr td span')
    console.log(h3.text())
    console.log(p.text())
    console.log(spans.children())
    for(let i = 0; i < h3.length; i += 1) {
        console.log(h3.children())
        if(h3[i].children[0].data) {

        
        console.log(h3[i].children[0].data)
        console.log(p[i].children[0].data)
        spans.each((span) => {
            const currentSpan = spans[span].children;

            if (currentSpan.length !== 0) {
                currentSpan.forEach((text) => console.log(text.data))
            }
        })
    }
}
    // spans.each((span) => {
    //     const currentSpan = spans[span].children
    //     if(currentSpan.length !== 0) {
    //         console.log(currentSpan)
    //        // currentSpan.forEach((text) => console.log(text.data))
    //     }
    // })

}