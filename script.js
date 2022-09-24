console.log("test" === "Test");
let str = ''
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    str += String.fromCodePoint(i * 8 + j + 128512)
  }
  console.log(str); str = ''
}