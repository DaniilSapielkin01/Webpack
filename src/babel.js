async function start() {
  await Promise.resolve("Async is working ...");
}
const unused = 42;

start().then(console.log);

class Util {
  static id = Date.now();
}
console.log("Util id ", Util.id);

import("lodash").then((_) => {
  console.log("lodash", _.random(0, 42, true));
});
