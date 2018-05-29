let nums = [];
let means = [];
let minId, maxId, table, tableWrap, canvas, ctx, i;


$(function() {
    minId = $("#min");
    maxId = $("#max");
    table = $("#table");
    tableWrap = $("#tableWrap");
    canvas = $("#canvas")[0];
    ctx = canvas.getContext('2d');
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
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     more_n(1);
   }
});

function start() {
  min = parseInt(minId.val());
  max = parseInt(maxId.val());
  canvas.height = 0;
  canvas.width = max - min;
  more_n(Math.floor((window.innerHeight - 157) / 22 + 1));
}

function more_n(how_many) {
  min = parseInt(minId.val());
  max = parseInt(maxId.val());
  canvas.height += how_many * 22;
  table.html("<tr><th>N</th><th>Random</th><th>Mean</th></tr>");
  for (i = 0; i < how_many; i++) {
    addN();
  }
  console.log(means.length);
  for (i = 0; i < means.length; i++) {
    table.append("<tr><td>"+ i + "</td><td>"+ nums[i] + "</td><td>"+ means[i].toFixed(3) + "</td></tr>");
    ctx.fillStyle = "#808080";
    ctx.fillRect(Math.floor((min + max) / 2 - min) + 7, i * 22, 1, 22);
    ctx.fillStyle = "#000000";

    ctx.fillRect(Math.floor(means[i] - min), i * 22, 14, 14);
  }

  i += how_many;

}

function addN() {
  min = parseInt(minId.val());
  max = parseInt(maxId.val());
  nums.push(randRange(min, max));
  means.push(average(nums));
}


function createCanvas(width, height) {
    var c = document.createElement("canvas");
    c.setAttribute("width", width);
    c.setAttribute("height", height);
    return c;
}
