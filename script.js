function daysOfAYear(year) {
  // Leap year check
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  }
  return 365;
}
