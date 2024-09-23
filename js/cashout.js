
document.getElementById('cashout-moneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // funtion call
    const pinNumber = getInputFieldValueById('pin-number2')
  const addMoneyReciver = getInputFieldValueById('cashout-money');
  // number na hole
  if (isNaN(addMoneyReciver)) {
    alert('Falied to Cashout')
    return;
  }
  if (pinNumber === 1234) {
    const balance = getTextFieldValueById('main-balance');
    // validation
    if (addMoneyReciver > balance) {
      alert('You Do Not Have Sufficient Balance');
      return;
    }
      const currentBlance = balance - addMoneyReciver ;
    document.getElementById('main-balance').innerText = currentBlance;
    // history
     const div = document.createElement('div');
    div.innerHTML = ` 
    <h4 class="text-3xl text-red-500">Cash Out</h4>
    <p class="text-xl">${addMoneyReciver}tk withdraw</p>
    <p class="text-xl">New Balance ${currentBlance}tk</p>
    `
    //call the function
      history('transection-section',div);
      
  } else{
    alert('failed to cashout the money')
  }
    
  
    
});