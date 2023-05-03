// Get the contact button and contact form elements from the HTML document
const contactBtn = document.getElementById('contact-btn');
const contactForm = document.getElementById('contact-form');

// Get the close button element from the contact form
const closeBtn = document.getElementById('close-btn');

// Add an event listener to the contact button that shows the contact form when clicked
contactBtn.addEventListener('click', () => {
  contactForm.style.display = 'block';
});

// Add an event listener to the close button that hides the contact form when clicked
closeBtn.addEventListener('click', () => {
  contactForm.style.display = 'none';
});

// Get the button element from the HTML document
const myButton = document.getElementById('my-button');

// Add an event listener to the button that redirects the user to the "contact.html" page when clicked
myButton.addEventListener('click', () => {
  window.location.href = 'contact.html'; // replace "contact.html" with the desired file name
});

// Define a function that changes the background and text color of all elements on the page to a random color
function changeColors() {
  // Get all elements on the page
  var elements = document.getElementsByTagName("*");
  
  // Loop through all elements
  for (var i = 0; i < elements.length; i++) {
    // Get the current element
    var element = elements[i];
    
    // Change the background color of the element to a random color
    element.style.backgroundColor = getRandomColor();
    
    // Change the text color of the element to a random color
    element.style.color = getRandomColor();
  }
}

// Define a function that generates a random RGB color value as a string
function getRandomColor() {
  // Generate a random number between 0 and 255 for each RGB value
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  
  // Return the RGB value as a string in the format "rgb(r,g,b)"
  return "rgb(" + r + "," + g + "," + b + ")";
}
