// var firstName="vee";
// var lastName="cc";
// // console.log(firstName  + " " +lastName);
// console.log(`${firstName} ${lastName}`);

// var word = prompt("enter a word:");
// console.log(word);
// if (word.toLowerCase() === "marco")
// {
//   consolelog("polo");
// }

// var color1 ="red";
// var color2="orange";
// var color3="pink";
// // console.log(color1 + " " + color2 + " " + color3);
// console.log(`${color1}, ${color2}, ${color3}`);

// var name = "banta";
// if (name === "santa")
// {
//   console.log(name);
// }
// else
// {
//   console.log("you are not santa");
// }

var pwd = ["joshu", "joshua"];
const random = Math.floor(Math.random() * pwd.length);
console.log(random)

var author ="erle stanley gardner";
var title = "perry mason";
var city ="chicago";

if (pwd[random] === "joshua")
{
  console.log(`${author}, lived in ${city} and wrote ${title} books.`);
}
else
{
  console.log(author + ", did not live in " + city );
}