// TODO: Query for button with an id "theme-button"
let themeBtn = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

themeBtn.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here

    let newSignature = document.createElement("p");
    newSignature.textContent = "🖊️ " + person.name + " from " + person.hometown + " has taken the pledge.";

    let signaturesSection = document.querySelector(".signatures");
    signaturesSection.appendChild(newSignature);
  
    let counter = document.getElementById("counter");
    count++;
    counter.textContent = "🖊️ " + count + " people have taken the pledge.";
    signaturesSection.removeChild(counter);
    signaturesSection.appendChild(counter);

    toggleModal(person);
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  let i = 0;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  // TODO: Validate the value of each input
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Call addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
  containsErrors = false;
  
}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

var revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal);

const toggleModal = (person) => {
  var intervalId = setInterval(scaleImage, 500);
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = "Thank you for doing your part to prevent food waste " + person.name + "!";

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

var scaleFactor = 1;
var modalImage = document.getElementById("modal-img");

const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.95;
  } else {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
}