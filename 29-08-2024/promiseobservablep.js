let promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  });
  
  promise.then((message) => {
    console.log(message); // "Operation was successful!"
  }).catch((error) => {
    console.error(error); // "Operation failed."
  });
  