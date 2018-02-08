/* an example on how to use axios to make a request */

const axios = require('axios');

const url = 'https://opentdb.com/api.php?amount=1';

axios.get(url)
  .then(function(res) {
    console.log(res.data.results[0].question);
    setTimeout(function() {
      console.log(res.data.results[0])
    }, 10000)
  })
  .catch(function (err) {
    console.log(err);
  });

// let quote = document.querySelector('#quote');

// let xhr = document.querySelector('#xhr');
// let fetch = document.querySelector('#fetch');
// let jquery = document.querySelector('#xjquery');
// let axios = document.querySelector('#axios');

// xhr.addEventListener('click', function() {
//   let XHR = new XMLHttpRequest();

//   XHR.open('GET', url);

//   XHR.onreadystatechange = function() {
//     if (XHR.readyState === 4 && XHR.status === 200) {
//       // quote.innerText = XHR.responseText
//       const data = JSON.parse(XHR.responseText)
//       console.log(data)
//     }
//   }

//   XHR.send();
// });
