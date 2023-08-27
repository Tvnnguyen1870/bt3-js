function leapYears(year) {
    if ((year % 4 === 0) || (year % 400 === 0) && (year % 100 !== 0))
    return true;
    return false;
  }
  
  console.log('2000', leapYears(2000));
  console.log('2001', leapYears(2001));