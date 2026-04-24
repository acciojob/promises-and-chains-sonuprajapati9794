document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
 
  const ageInput = document.getElementById("age").value;
  const nameInput = document.getElementById("name").value;
  const age = Number(ageInput);
  const name = nameInput.trim();
 
  // Validation
  if (!ageInput || !name) {
    alert("Please enter valid details.");
    return;
  }
 
  // Promise Function
  function checkEligibility(age, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });
  }
 
  // Execute Promise
  checkEligibility(age, name)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
  const ageInput = document.getElementById("age").value;
  const nameInput = document.getElementById("name").value;

  const age = Number(ageInput);
  const name = nameInput.trim();

  // Validation
  if (!ageInput || !name) {
    alert("Please enter valid details.");
    return;
  }

  // Promise Function
  function checkEligibility(age, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });
  }

  // Execute Promise
  checkEligibility(age, name)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});