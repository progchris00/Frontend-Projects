const submitBtn = document.querySelector("#submitBtn");
const inputs = document.querySelectorAll("input");
const cell = document.querySelectorAll("td");

const tableOneAnswer = ["1", "0", "0", "1"];

submitBtn.onclick = checkAnswer;

function checkAnswer()
{
    for (let index = 0; index < inputs.length; index++)
    {
        if (inputs[index].value == tableOneAnswer[index]) {
            inputs[index].style.background = "green";
            cell[index].style.background = "green";
        }
        else
        {
            inputs[index].style.background = "red";
            cell[index].style.background = "red";
        }
    }
}