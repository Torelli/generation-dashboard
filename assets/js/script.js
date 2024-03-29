function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

document.addEventListener("DOMContentLoaded", () => {
  const charts = document.querySelectorAll(".progress");

  console.log("oi");

  for (let chart of charts) {
    chart.style.height = `${generateRandom(30, 80)}%`;
  }
});
