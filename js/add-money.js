
document.getElementById('add-moneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // funtion call
    const pinNumber = getInputFieldValueById('pin-number')
    const addMoneyReciver = getInputFieldValueById('add-money');
  //number na hole
  if (isNaN(addMoneyReciver)) {
     alert('Failed to Add Money')
    return;
  }
  if (pinNumber === 1234) {
    const balance = getTextFieldValueById('main-balance');
      const currentBlance = addMoneyReciver + balance;
    document.getElementById('main-balance').innerText = currentBlance;
    
    // add to trasaction history

    const p = document.createElement('p');
    p.innerHTML = ` Added: ${addMoneyReciver}Tk. New Balance: ${currentBlance}TK
    `
    //  call the function

    history('transection-section',p);

  } else {
    alert('failed to add the money')
  }
    
});
