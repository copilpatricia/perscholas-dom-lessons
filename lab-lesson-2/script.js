const divId = document.querySelector("#app");
divId.style.backgroundColor = "red";

let pEl = document.createElement("p");
let pEl1 = document.createElement("p");
let pEl2 = document.createElement("h5");
let congratsMsg = document.createElement("h1");


divId.appendChild(pEl);
divId.appendChild(pEl1);
divId.appendChild(pEl2);
divId.appendChild(congratsMsg);

let correctNumber = 7;
let maxAttempts = 2;
let arrayNumber = [];
let arrayNumber1 = [];

// interval 1-10
for (let i = 1; i <= maxAttempts; i++) {
  let userNumber = parseInt(prompt("Please enter a number"));
  

  if (userNumber === correctNumber) {
    alert("Congratulations! You guessed the correct number.");
    congratsMsg.innerHTML = "Congrats, you did it!";
    break; // Exit the loop if the guess is correct
  } else if (userNumber < correctNumber) {
    alert("Try a higher number.");
    arrayNumber.push(userNumber);
    pEl.innerHTML = "These are the numbers you entered: " + arrayNumber.join(", ");
    
  } else {
    alert("Try a lower number");
    arrayNumber1.push(userNumber);
    pEl1.innerHTML = "These are the numbers you entered: " + arrayNumber1.join(", ");
  }

  if (i === maxAttempts) {
    pEl2.innerHTML = `Sorry, you lost!`;
  }
  
}





