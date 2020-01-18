export const asyncThing = function (callback) {
  return new Promise((resolve) => { // don't forget to return!
    setTimeout(() => {
      callback(); // looks like we will need a spy
      resolve(7);
    }, 1000); // will this block the test for a full second??
  });
}