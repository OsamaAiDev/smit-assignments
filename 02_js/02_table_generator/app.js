let table = prompt("Which table you want to generate");

if (!isNaN(table))
  for (let i = 1; i <= 10; i++) {
    console.log(table, "*", i, "=", table * i);
  }
else {
  alert("Please enter a valid number e.g. 2");
}
