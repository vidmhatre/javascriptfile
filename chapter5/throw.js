function validateNumber(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid input: Not a number.");
    }
    return num * 2;
  }
  
  try {
    const result = validateNumber("not a number");
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  