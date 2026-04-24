document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  const age = Number(document.getElementById("age").value);
  const name = document.getElementById("name").value.trim();

  // Validation
  if (!age || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise function
  function checkEligibility(age, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });
  }

  // Calling promise
  checkEligibility(age, name)
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});