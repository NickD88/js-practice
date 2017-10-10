var today = new Date();

// console.log(today);

// console.log('Today\'s day is ' + String(today.getDay()));

function dateSuffix(date) {
  var lastDigit = date % 10;
  var day = date.getDate();
  suffix = "th";

  if (lastDigit === 1 && day !== 11) {
    suffix = "st";
  } else if (lastDigit === 2 && day !== 12) {
    suffix = "nd";
  } else if (lastDigit === 3 && day !== 13) {
    suffix = "rd";
  }

  return String(day + suffix);
}

function formattedMonth(date) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  return "Today's date is " + day + ", " + month + " " + dateSuffix(date);
}

// console.log(formattedDate(today));

// console.log(today.getFullYear());

// console.log(today.getTime());

// var tomorrow = new Date(today.getTime());

// console.log(tomorrow);

// tomorrow.setDate(today.getDate() + 1);

// console.log(tomorrow);

// console.log(formattedDate(tomorrow));

// var nextWeek = new Date (today.getTime());

// console.log(nextWeek == today);

// console.log(nextWeek.toDateString() === today.toDateString());

// nextWeek.setDate(today.getDate() + 7);

// console.log(nextWeek.toDateString());

// console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(day) {
  var hours = day.getHours();
  var minutes = day.getMinutes();

  hours = hours < 10 ? String("0" + hours) : String(hours);
  minutes = minutes < 10 ? String("0" + minutes) : String(minutes);

  return hours + ":" + minutes;
}

console.log(formatTime(today));
