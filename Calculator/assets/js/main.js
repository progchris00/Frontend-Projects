const numberButton = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const allClearButton = document.querySelector("#AC");
const addButton = document.querySelector("#add");

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (output.textContent === '0')
        {
            output.textContent = value;
        } else {
            output.textContent += value;
        }
    })
})

allClearButton.addEventListener("click", () => {
    output.textContent = 0;
})

addButton.addEventListener("click", () => {
    output.textContent += ` ${addButton.textContent} `;
})

// not clear: forEach, addEventListener


// To do: when operation is clicked, perform the operation
// idea on what to do: store all value in an array, then when 
// the equal sign was click, perform the operation there.