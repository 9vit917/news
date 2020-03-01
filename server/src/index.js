const { getPosts, parseLinks} = require('./parsePost');
const { resources } = require('./config');

const fs = require('fs');

let urls = {
    onliner: 'https://www.onliner.by/',
    sputnic: 'https://sputnik.by/health/20200221/1044000103/Vokrug-mnogo-soldat-s-raznymi-boleznyami-Kak-srochnikov-uvolnyayut-iz-armii.html'
}

const saveResault = (json) => {
    fs.writeFile(__dirname +'../../../src/posts.json', JSON.stringify(json), (err) => {
        if (err) console.log('Not saved');
    })

}

parseLinks(urls.onliner, resources.onliner.link, 25)
.then(async links => getPosts(links).then(data => saveResault(data)))
.catch(e => console.log(e));