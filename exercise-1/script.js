function repeatString(string, num) {
    const array = Array.from({ length: num }, (_, i) => i + 1);
    const result = array.reduce(function (previousValue) {
      return previousValue + string;
    }, "");
    return result;
}
  
console.log(repeatString("hey", 3));