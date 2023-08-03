function divideByZero() {
    try {
      throw new Error("Cannot divide by zero.");
    } finally {
      console.log("Finally block executed.");
    }
  }
  
  try {
    divideByZero();
  } catch (error) {
    console.error("Exception caught:", error.message);
  }
  