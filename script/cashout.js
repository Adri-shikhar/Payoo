document.getElementById('withdraw-btn').addEventListener('click', function() {
// Get the values from the input fields
    const agentNumber = getvalueinputfield('agent-number');
    const cashoutAmount = getvalueinputfield('amount');
    const pin = getvalueinputfield('pin');

    

    //Get the current balance
    const currentBalance = document.getElementById('balance').innerText;
    console.log('Current Balance:', currentBalance);

    const newbalance = Number(currentBalance) - Number(cashoutAmount);
    
    if( pin == '1234' && cashoutAmount <= currentBalance) {

        document.getElementById('balance').innerText = newbalance;
        addTransaction('Cash Out', cashoutAmount);
        alert('Cashout successful!');
    }
    else {
        alert('Invalid PIN or insufficient balance.');
    }
   
});