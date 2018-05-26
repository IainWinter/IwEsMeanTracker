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

function start() {
  min = document.getElementById("min").value;
  max = document.getElementById("max").value;
  console.log(min, max);
}

function addN() {
  nums.push(randRange(min, max));
  means.push(average(nums));
}
