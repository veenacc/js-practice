// // 1. Wait 2 seconds
// // 2. Print out “First task done!”
// // 3. Wait another 2 seconds
// // 4. Print out “Second task done!”
// // 5. Wait another 2 seconds
// // 6. Print out “Third task done!”


// // setTimeout(function() {
// //   console.log('First task done!');
// // }, 2000);

// // console.log('Second task done!');

// function firstTask()
// {
//   console.log("first task done");
// }
// function secondTask()
// {
//   console.log("second task done");
// }
// function thirdTask()
// {
//   console.log("third task done");
// }

// setTimeout(firstTask,2000);
// setTimeout(secondTask,4000);
// setTimeout(thirdTask,6000);

// nested settimeout

setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
  console.log('second task done!');
  setTimeout(function() {
  console.log('third task done!');
}, 2000);

}, 2000);

}, 2000);
