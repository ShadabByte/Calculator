let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Handle the "=" button (equals)
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
            } catch (error) {
                input.value = "Error"; // If there's an error in the expression
                string = ""; // Reset the string
            }
        }
        // Handle the "AC" button (clear all)
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        // Handle the "DEL" button (delete last character)
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For all other buttons (numbers, operators)
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
