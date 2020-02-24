const unirest = require('unirest');
const cheerio = require('cheerio');

async function parsePost(url, form){
    await unirest.get(url).end(( { body } ) => {
     
    const $ = cheerio.load(body);

    let title = $(form.title).text().trim();
    let description = $(form.description).text().trim();
    let image = $(form.image).attr('src') || $(form.image).css("background-image").replace(/url\(|\)/gi, '');
    let views = $(form.views).text().trim();
    
    let post = {
        title: title,
        description: description,
        image: image,
        views: views
    }
    console.log(post)
    });
}

module.exports =  parsePost;