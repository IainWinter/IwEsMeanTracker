nums = [];
means = [];

function randRange(lower, upper) { // inclusive - uninclusive
  return Math.floor(Math.random() * (upper - lower)) + lower
}

function avergae(arr) {
  if(arr.length > 0) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
}
