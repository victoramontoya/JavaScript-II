// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
  }

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
// console.log(result);
/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  const match = passwordToCompare === this.password; // when we run it will return undefined
  // because there is no binding to the this. It is in the global scope.
  // We neeed implicit binding:
  return match;
};

checkPassword('correcthorsebatterystaple');
// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
  // call's first argument is the context (the obj in many cases, & takes infinate ...args)
console.log(checkPassword.call(me, 'correcthorsebatterystaple'));
// .apply
  // .apply works like call in that it takes the contexts, but then only an array
console.log(checkPassword.apply(me, ['correcthorsebatterystaple']));
// .bind
  // bind takes only one argument,the context.
  // Doesnt call, it creates a new reference to that function with a new context
const newPasswordFuct = checkPassword.bind(me);
newPasswordFuct('correcthorsebatterystaple');
