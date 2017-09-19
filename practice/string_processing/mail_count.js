function mailCount(emailData) {
  var emails = emailData.split('##||##');  
  var dates = emails.map(function(email) {
    return email.split('#/#')[2].match(/\d{2}-\d{2}-\d{4}/);
  });
  console.log('Count of Email: ' + emails.length);
  console.log(displayDateRange(dates));
}

function displayDateRange(dates) {a
  var sortedDates = dates.slice(0).sort(function(date1, date2) {
    return date1 > date2;
  });
  var startDate = sortedDates[0].toDateString();
  var endDate = sortedDates[dates.length - 1].toDateString();
  return 'Date Range: ' + startDate + ' - ' + endDate;
}

mailCount(emailData);

    // console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016


