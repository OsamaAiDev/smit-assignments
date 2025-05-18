function getUserBirthday() {
  let userBirthday = new Date();
  let birthDay = parseInt(prompt("Please enter your birth day"));
  let birthMonth = null;
  let birthYear = null;
  let birthYearDigits = null;

  while (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
    alert("Please enter a valid birth day must be between 1 and 31");
    birthDay = parseInt(prompt("Please enter your birth day"));
  }
  birthMonth = parseInt(prompt("Please enter your birth month"));

  while (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
    alert("Please enter a valid birth month must be between 1 and 12");
    birthMonth = parseInt(prompt("Please enter your birth month"));
  }

  birthYear = parseInt(prompt("Please enter your birth year"));
  birthYearDigits = birthYear.toString().length;

  while (isNaN(birthYear) || birthYearDigits < 4) {
    alert(
      "Please enter a valid birth year must be in this format YYYY e.g. 1997"
    );
    birthYear = parseInt(prompt("Please enter your birth year"));
    birthYearDigits = birthYear.toString().length;
  }

  userBirthday.setDate(birthDay);
  userBirthday.setMonth(birthMonth - 1);
  userBirthday.setFullYear(birthYear);

  return userBirthday;
}

function getDayOfBirthday(birthDayDate) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (!birthDayDate) {
    return "";
  } else {
    return daysOfWeek[birthDayDate.getDay()];
  }
}

function printBirthDay() {
  let birthDayDate = getUserBirthday();
  let dayOfBirthday = getDayOfBirthday(birthDayDate);
  alert("The day of your birthday is " + dayOfBirthday);
}

printBirthDay();
