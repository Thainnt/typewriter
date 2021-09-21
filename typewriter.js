const sentence = "hello there from lighthouse labs";

for (let i = 0; i <= sentence.length; i++) {

  setTimeout(() => {
    process.stdout.write(sentence.charAt(i));
    
    if (i === sentence.length) {
      process.stdout.write("\n");
    }
  }, 50 * i);

};