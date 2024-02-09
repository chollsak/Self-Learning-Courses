function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
}

//or 

// function isLeap(year) {
//     // Leap years are divisible by 4...
//     if (year % 4 === 0) {
//         // ...except if they are also divisible by 100 and not divisible by 400
//         if (year % 100 === 0 && year % 400 !== 0) {
//             return "Not leap year";
//         } else {
//             return "Leap year";
//         }
//     } else {
//         return "Not leap year";
//     }
// }
