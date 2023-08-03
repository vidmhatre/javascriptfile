function divide(a, b) {
    if (b === 0) {
      throw "Division by zero is not allowed.";
    }
    return a / b;
  }
  
  function calAverage(numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += divide(100, num);
    }
    return sum / numbers.length;
  }
  
  try {
    const dataset = [10, 20, 0, 30];
    const result = calAverage(dataset);
    console.log("Average result:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
  