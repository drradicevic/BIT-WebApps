let figlet = require("figlet");
let funnyWords = require("funny-words");
let cowsay = require("cowsay");
let oneLinerJoke = require("one-liner-joke");
let randomWords = require("random-words");

console.log(
  figlet.textSync("Hello World!", {
    font: "slant",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

console.log(
  figlet.textSync("Hello World!", {
    font: "3D-ASCII",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
  })
);
//figlet

console.log(funnyWords("Don't worry, be happy!"));
// Output could be something "D'not wrory, be hppay!"

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
// or cowsay.think()

const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);

// The variable getRandomJoke will contain a random joke

console.log(randomWords());

console.log(randomWords(5));

console.log(randomWords({ min: 3, max: 10 }));
//randomWords
