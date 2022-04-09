// console.log(minValue);
// console.log(maxValue);
const generateButton = document.getElementById("button__generate");
const finalNumber = document.getElementById("number__display");
generateButton.addEventListener("click", motherFunction);

function getValueMin() {
  const minValue = document.getElementById("min-number").value;
  if (minValue === "") {
    return 0;
  } else {
    return parseInt(minValue, 10);
  }
}

function getValueMax() {
  const maxValue = document.getElementById("max-number").value;
  if (maxValue === "") {
    return 1000;
  } else {
    return parseInt(maxValue, 10);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function motherFunction() {
  const minimum = getValueMin();
  const maximum = getValueMax();
  const final = randomNumber(minimum, maximum);
  finalNumber.innerHTML = `${final}`;
}

// function numberAnimation () {
//   finalNumber.innerHTML = "100001";
//   finalNumber.innerHTML = "110011";
//   finalNumber.innerHTML = "120031";
//   finalNumber.innerHTML = "123456";
//   finalNumber.innerHTML = "654321";
//   finalNumber.innerHTML = "132721";
//   finalNumber.innerHTML = "195683";
// }
