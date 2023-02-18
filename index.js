// Get the HTML elements we need to interact with
const ratingValue = document.getElementById('rating');
const thanksContainer = document.getElementById('thank-you');
const card = document.getElementById('feedback-container');
const submitButton = document.getElementById('submit-btn');

// Add a click event listener to the submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Find the selected rating radio button
  const selectedRating = document.querySelector('input[name="rating"]:checked');
  if (selectedRating) { // If a rating has been selected
    // Update the rating value displayed on the page
    ratingValue.textContent = selectedRating.value;
    // Show the "Thank you" message and hide the feedback form
    thanksContainer.style.display = 'block';
    card.style.display = "none";
  }
});
