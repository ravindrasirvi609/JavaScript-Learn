// Get references to the buttons
const redButton = document.getElementById('red');
const greyButton = document.getElementById('grey');
const pinkButton = document.getElementById('pink');
const yellowButton = document.getElementById('yellow');

// Add click event listeners to each button
console.log("hitting");
redButton.addEventListener('click', () => {
    changeBackgroundColor('red');
    document.body.style.color = 'white';
});
greyButton.addEventListener('click', () => changeBackgroundColor('grey'));
pinkButton.addEventListener('click', () => changeBackgroundColor('pink'));
yellowButton.addEventListener('click', () => changeBackgroundColor('yellow'));

// Function to change the background color of the body
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}