// const person = {
//   name: "Prithvi",
//   age: 30,
//   location: {
//     city: "Chennai",
//     temp: 31,
//   },
// };

// const { name: firstName = "Anon", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp } = person.location;

// console.log(`${city} is ${temp}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = ["India", "Tamil Nadu", "Chennai"];

const [country, state, city] = address;

console.log(`Your are in ${country}`);
