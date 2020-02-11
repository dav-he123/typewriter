const sentence = "hello there from lighthouse labs\n";

const delay = num => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      // <= 1s delay to make it noticeable. Can dial it down later.
    }, num);
    num += 100;
  }
};

delay(0);
