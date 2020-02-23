const parsePost = require('./parsePost');
const { resources } = require('./config');

let urls = {
    onliner: 'https://people.onliner.by/2020/02/22/army-25',
    sputnic: 'https://sputnik.by/health/20200221/1044000103/Vokrug-mnogo-soldat-s-raznymi-boleznyami-Kak-srochnikov-uvolnyayut-iz-armii.html'
}

parsePost(urls.sputnic, resources.sputnic);
console.log(1);