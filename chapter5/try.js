try {
    // Code that might throw an error
    const result = 10 / 0; // This will throw a division by zero error
    console.log(result);
  } catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
  }
  