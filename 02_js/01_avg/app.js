let metricPer = prompt("Please enter your matric percentage");
let test_per = prompt("Please enter your entry test percentage");
let avgPercentage = (parseFloat(metricPer) + parseFloat(test_per)) / 2;
console.log(avgPercentage);

if (avgPercentage < 70) {
  alert("you are not eligible");
} else {
  alert("you are eligible");
}
