// Only change code below this line
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n); // Add n at the beginning of the array
      return arr;
    }
  }
  // Only change code above this line
  
  console.log(countdown(5)); // [5, 4, 3, 2, 1]
  