function clock() {
  // The querySelector() method returns the first
  // element that matches a specified CSS selector(s)
  // in the document.
  const clockNode = document.querySelector("#clock");

  // This is new feature that introduced in ES6 (JavaScript)
  // and is called arrow function. The left part denotes
  // the input of a function and the right part the output
  // of that function.
  return setInterval(() => {
    let date = new Date();
    // The toLocaleTimeString() method returns a string
    // with a language-sensitive representation of the
    // time portion of the date.
    let tick = date.toLocaleTimeString();
    // Set the clock to update every second
    clockNode.textContent = tick;
  }, 1000);
}
clock();
