// Remove the <main> element with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and assign it to the variable 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of 'newHeader' to 'victory'
newHeader.id = 'victory';

// Set the text content of 'newHeader' to 'YOUR-NAME is the champion'
newHeader.textContent = 'Maxwell Born is the champion';

// Append the newHeader to the body (or other appropriate container)
document.body.appendChild(newHeader);