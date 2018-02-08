const arr = [1,2,3,4,5,6]

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]), i, arr) {
      return i;
    }
  }

  return -1;
}

function countDown(seconds) {
  let intervalID = setInterval(function() {
    if (seconds === 0) {
      console.log('Ring Ring Ring!!!');
      clearInterval(intervalID)
    } else {
      console.log(seconds);
      seconds--;
    }
  }, 1000)
}

// countDown(4);

// setTimeout(() => {
//   console.log('Hello, from the timeout');
// }, 0);

// console.log('Beginning loop');

// for (let i = 0; i < 1000000000; i++) {
//   let x = i * 2;
// }
// console.log('Done with loop')

// let p1 = new Promise(function(resolve, reject) {
//   let num = Math.random();
//   if (num < 0.5) {
//     resolve(num)
//   } else {
//     reject(num);
//   }
// });

// p1.then(function(result) {
//   console.log('Success:', result);
// }).catch(function(err) {
//   console.log('Error:', err);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 4000)
// });

// promise.then(data => {
//   console.log('Random int passed to resolve:', data);
// }).catch(err => {
//     console.log(err)
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 500);
// });

// promise.then(data => {
//   console.log('Random int passed to resolve:', data);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(Math.floor(Math.random() * 10));
//     }, 3000);
//   });
// }).then(data => {
//   console.log('Second random int passed to resolve:', data);
// });

// let promise = new Promise((resolve, reject) => {
//   resolve(5);
// });

// promise.then(data => {
//   return data * 2;
// }).then(data => {
//   return data + 20;
// }).then(data => {
//   console.log(data);
// });

let counter = 0;

function incCounter() {
  counter++;
  console.log('Counter:', counter);
}

function runLater(callback, timeInMs) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then(() => {
  return runLater(incCounter, 2000);
}).then(() => {
  return runLater(incCounter, 3000);
}).then(() => {});

//  Fetch API examples
const url = 'https://api.github.com/users/colt';

fetch(url)
  .then(function(request) {
    if (!request.ok) {
      throw Error('CUSTOM ERROR!!');
    }
    return request;
  })
  .then(function(response) {
    console.log('EVERYTHING IS FINE!');
    console.log(response)
  })
  .catch(function(err) {
    console.log(err);
});
