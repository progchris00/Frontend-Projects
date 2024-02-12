const submitBtn = document.querySelector("#submitBtn");
const inputs = document.querySelectorAll("input");
const cell = document.querySelectorAll("td");

const answers = [
    {
        part: "2.1",
        "answer": ["1", "0", "0", "1"],

        part: "2.2",
        "answer": ["1", "0", "0", "1"]
    }
]

submitBtn.onclick = checkAnswerTable;

// function checkAnswerTable()
// {
//     checkAnswerCheckbox(part);
// }

// function CheckAnswer(part)
// {
//     for (let index = 0; index < inputs.length; index++)
//     {
//         if (inputs[index].value == tableOneAnswer[index]) {
//             inputs[index].style.background = "green";
//             cell[index].style.background = "green";
//         }
//         else
//         {
//             inputs[index].style.background = "red";
//             cell[index].style.background = "red";
//         }
//     }
// }

const p1Button = document.querySelector("#p1Button");
const p1CheckBox = document.querySelectorAll("#p1CheckBox");
const p1Label = document.querySelectorAll("#p1Label");
const p1Answers = ["checked", "unchecked", "checked", "unchecked", "checked"];

p1Button.onclick = checkAnswerCheckbox;

function checkAnswerCheckbox()
{
    for (let index = 0; index < p1CheckBox.length; index++)
    {
        if (p1CheckBox[index].checked && p1Answers[index] == "checked")
        {
            p1Label[index].style.color = "green";
        }
        else if (p1CheckBox[index].checked && p1Answers[index] == "unchecked")
        {
            p1Label[index].style.color = "red";
        }
        else if (!p1CheckBox[index].checked && p1Answers[index] == "checked")
        {
            p1Label[index].style.color = "red";
        }
        else if (!p1CheckBox[index].checked && p1Answers[index] == "unchecked")
        {
            p1Label[index].style.color = "green";
        }
    }
}