const unirest = require('unirest');
const cheerio = require('cheerio');

const { resources } = require('./config');

function parsePost(url, form) {
    return new Promise((resolve, reject) => {
        unirest.get(url).end(( { body } ) => {
    
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
    
            resolve(post);
    
        });
    }) 
}

function parseLinks(url, className, max){
    if (!max) max = 1;
    return new Promise((resolve, reject) => {
        
        let links = [];
        unirest.get(url).end(( { body } ) => {
            const $ = cheerio.load(body);
            $(className).each((index, e) => {
                if (index < max) links.push($(e).attr('href'))
            })
            resolve(links);
            if(!links.length) reject();
        })
    })
}

function getPosts(links){
    return new Promise(async (resolve, reject) => {
        
        let posts = [];
        
        for (let i = 0; i < links.length; i++) {
            await parsePost(links[i], resources.onliner).then(post => posts.push(post));
        }

        if(!posts.length) reject({empty: 'empty'})
        resolve(posts);
    
    })
}

export {
    parseLinks,
    getPosts
};