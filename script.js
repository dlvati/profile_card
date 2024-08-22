// Write your function here:

const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
          return 'You have entered an invalid grade.'
    let average = Math.floor((grade1 + grade2 + grade3)/3);
    if (average < 60) {
      return average = 'F';
    } else if (average < 70) {
      return average = 'D';
    } else if (average < 80) {
      return average = 'C';
    } else if (average < 90) {
      return average = 'B';
    } else if (average <= 100) {
      return average = 'A';
    }
    }
  };
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95));