// A RegEx is just a 'pattern'. 

const text = 'Hello there!';

// Two ways of creating a RegEx in JavaScript
// const regex = new RegExp('ll');
const regex = /ll/;

console.log(text.match(regex))
