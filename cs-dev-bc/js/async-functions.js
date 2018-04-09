/* hasMostFollowers() */
const axios = require('axios');

async function hasMostFollowers(...usernames) {
    const BASE_URL = "https://api.github.com/users/";

    const urls = usernames.map(username => axios.get(BASE_URL + username).then(res => res.data))

    try {
        const results = await Promise.all(urls);
        const max = results.sort((a, b) => a.followers < b.followers)[0];

        console.log(`${max.name} has the most followers with ${max.followers}.`);

    } catch (error) {
        console.log(error);
    }

}

function starWarsString(number) {
    const BASE_URL = 'https://swapi.co/api/people/';

    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + number)
            .then(res => res.data)
            .then(data => {
                resolve(`${data}`)
            })
            .catch(err => reject(err.message))
    })
}

starWarsString(1)
    .then(data => {
        const BASE_URL = 'https://swapi.co/api/';

        axios.get(data.films[0])
            .then(res => ({
                name: data.name,
                title: res.title,
                director: res.director,
                planetURL: res.planets[0]
            }))
            .then(res => {
                return axios.get(res.planetURL)
                    .then(data => {
                        return console.log(`${res.name} is featured in ${res.title}, directed by ${res.director} and it takes place on ${data.name}`)
                    })
            })
    })






























// /* Async Functions */
// const getJSON = require('get-json');

// async function hasMostFollowers(...usernames) {
//     const BASE_URL = "https://api.github.com/users/";
//     const urls = usernames.map(username => getJSON(BASE_URL + username));
//     try {
//         const results = await Promise.all(urls);
//         const max = results.sort((a, b) => a.followers < b.followers)[0];
//         console.log(`${max.name} has the most followers with ${max.followers}`);
//     } catch (err) {
//         console.log(err);
//     }
// }

hasMostFollowers('kevvor', 'laurie', 'jonny')
