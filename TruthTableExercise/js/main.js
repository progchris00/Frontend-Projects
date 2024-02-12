const btnPartTwo_one = document.querySelector("#btnPartTwo_one");
const answerPartTwo_one = ["1", "0", "0", "1"];

const btnPartTwo_two = document.querySelector("#btnPartTwo_two");
const answerPartTwo_two = ["1", "1", "1", "1", "0", "0", "0", "1", "0", "0", "0", "0"];

const btnPartTwo_three = document.querySelector("#btnPartTwo_three");
const answerPartTwo_three = ["1", "1", "1", "1", "0", "1", "0", "1", "1", "0", "0", "0"];

const btnPartTwo_four = document.querySelector("#btnPartTwo_four");
const answerPartTwo_four = ["1", "1", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0"];

const btnPartTwo_five = document.querySelector("#btnPartTwo_five");
const answerPartTwo_five = ["1", "1", "1", "1", "0", "0", "0", "1", "1", "0", "0", "1"];

const btnPartTwo_six = document.querySelector("#btnPartTwo_six");
const answerPartTwo_six = ["1", "1", "1", "1", "0", "0", "0", "1", "0", "0", "0", "1"];

btnPartTwo_one.onclick = function() {
    CheckAnswer("two-one", answerPartTwo_one);
};

btnPartTwo_two.onclick = function() {
    CheckAnswer("two-two", answerPartTwo_two);
};

btnPartTwo_three.onclick = function() {
    CheckAnswer("two-three", answerPartTwo_three);
};

btnPartTwo_four.onclick = function() {
    CheckAnswer("two-four", answerPartTwo_four);
};

btnPartTwo_five.onclick = function() {
    CheckAnswer("two-five", answerPartTwo_five);
};

btnPartTwo_six.onclick = function() {
    CheckAnswer("two-six", answerPartTwo_six);
};



function CheckAnswer(tableNumber, tableAnswer)
{
    let input, cell, answer;

    input = document.querySelectorAll("#table-exercise-" + tableNumber + " input");
    cell = document.querySelectorAll("#table-exercise-" + tableNumber + " td");
    answer = tableAnswer;

    for (let index = 0; index < input.length; index++)
    {
        if (input[index].value == answer[index]) 
        {
            input[index].style.background = "#66e066";
            cell[index].style.background = "#66e066";
        }
        else
        {
            input[index].style.background = "#db2929";
            cell[index].style.background = "#db2929";
        }
    }
}

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