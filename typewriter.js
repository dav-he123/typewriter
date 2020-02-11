const sentence = "hello there from lighthouse labs\n";

const delay = num => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, num);
    num += 100;
  }
};

delay(0);
