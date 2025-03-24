let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string); // Evaluate the mathematical expression
      document.querySelector('input').value = string; // Display result
    } else if (e.target.innerHTML == 'C') {
      string = ""; // Clear input when 'C' is pressed
      document.querySelector('input').value = string;
    } else {
      string += e.target.innerHTML; // Append button value to string
      document.querySelector('input').value = string; // Update input display
    }
  });
});
