function randRange(lower, upper) { // inclusive - uninclusive
  return Math.floor(Math.random() * (upper - lower)) + lower
}

for(let i = 0; i < 100; i++) {
  console.log(randRange(1, 10));
}
