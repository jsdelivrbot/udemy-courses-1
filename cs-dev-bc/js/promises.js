function getMostFollowers(...usernames) {
    const BASE_URL = 'https://api.github.com/users';
    const urls = usernames.map(username => $.getJSON(`${BASE_URL}/${username}`));

    return Promise.all(urls)
        .then(data => {
            const max = data.sort((a, b) => a.followers < b.followers)[0];
            return `${max.name} has the most followers with ${max.followers}.`;
        })

}

getMostFollowers('kevvor', 'elie', 'tigarcia')

function starWarsString(id) {
    let str = '';
    return $.getJSON(`https://swapi.co/api/people/${id}/`)
        .then(data => {
            str += `${data.name} is featured in `;
            const filmData = data.films[0];
            return $.getJSON(filmData);
        })
        .then(res => {
            str += `${res.title}, directed by ${res.director} `
            let planetData = res.planets[0];
            return $.getJSON(planetData);
        })
        .then(res => {
            str += `and it takes place on ${res.name}`;
            return str;
        })
        .then(finalString => finalString)
}
