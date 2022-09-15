const generateButton = document.getElementById("button__generate");
const finalNumber = document.getElementById("number__display");
generateButton.addEventListener("click", displayRandomNumber);

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

function displayRandomNumber() {
  const minimum = getValueMin();
  const maximum = getValueMax();
  const final = randomNumber(minimum, maximum);
  const animationArray = [
    10001,
    256,
    9,
    58533,
    4538,
    3679,
    11,
    733,
    25020,
    `${final}`,
  ];

  animationArray.forEach((element, index) => {
    setTimeout(() => {
      finalNumber.innerHTML = `${element}`;
    }, 100 * (index + 1));
  });
}
