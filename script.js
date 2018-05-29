let nums = [];
let means = [];
let minId, maxId, table, i;

$(function() {
    minId = $("#min");
    maxId = $("#max");
    table = $("#table");
    i = 0;
});

function randRange(lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower
}

function average(arr) {
  if(arr.length > 0) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     more_n(1);
   }
});

function more_n(how_many) {
  min = parseInt(minId.val());
  max = parseInt(maxId.val());
  let n;
  for (n = i; n < i + how_many; n++) {
    addN();
    table.append("<tr><td>"+ n + "</td><td>"+ nums[n] + "</td><td>"+ means[n].toFixed(3) + "</td></tr>");
  }
  i = n;

  console.log(nums);
  console.log(means);
}

function addN() {
  nums.push(randRange(min, max));
  means.push(average(nums));
}
