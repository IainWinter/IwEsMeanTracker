let nums = [];
let means = [];
let minId, maxId, table, canvas, ctx, i;

$(function() {
    minId = $("#min");
    maxId = $("#max");
    table = $("#table");
    canvas = $("#canvas")[0];
    ctx = canvas.getContext('2d');
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

function start() {
  min = parseInt(minId.val());
  max = parseInt(maxId.val());

  let hehexdCanvas;
  if(i != 0) {
    hehexdCanvas = createCanvas(canvas.width, canvas.height);
    hehexdCanvas.getContext('2d').drawImage(canvas, 0, 0);
  }

  canvas.setAttribute("width", max);
  canvas.setAttribute("height", i + 100);

  if(i != 0) {
    ctx.drawImage(hehexdCanvas, 0, 0);
  }

  canvas.style.width = max + "px";
  canvas.style.height = i + 100 + "px";

  let n;
  for (n = i; n < i + 100; n++) {
    addN();
    table.append("<tr><td>"+ n + "</td><td>"+ nums[n] + "</td><td>"+ means[n].toFixed(3) + "</td></tr>");
    ctx.fillRect(means[n], n, 1, 1);
    ctx.fillRect((min + max) / 2, n, 1, 1)
  }

  i = n;

  console.log(nums);
  console.log(means);
}

function addN() {
  nums.push(randRange(min, max));
  means.push(average(nums));
}


function createCanvas(width, height) {
    var c = document.createElement("canvas");
    c.setAttribute("width", width);
    c.setAttribute("height", height);
    return c;
}