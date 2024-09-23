
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;  
};

function getTextFieldValueById(id) {
    const TextValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(TextValue);
    return textNumber;  
};

// show and hidden function

function showFormById(id,Id) {
    //hide all the section
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transection-section').classList.add('hidden');
    document.getElementById('cashout').classList.remove('bg-green-400');
    document.getElementById('addmoney').classList.remove('bg-green-400');
        document.getElementById('transection-btn').classList.remove('bg-green-400');
    //show the section is clicked
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(Id).classList.add('bg-green-400')
};

// history

function history(id,element) {
    document.getElementById(id).appendChild(element);
}