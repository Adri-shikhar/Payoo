document.getElementById('withdraw-btn').addEventListener('click', function() {
// Get the values from the input fields
    const agentNumber = document.getElementById('agent-number').value;
    const cashoutAmount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;

    console.log('Agent Number:', agentNumber);
    console.log('Amount:', cashoutAmount);
    console.log('PIN:', pin);

    //Get the current balance
    const currentBalance = document.getElementById('balance').innerText;
    console.log('Current Balance:', currentBalance);

    const newbalance = Number(currentBalance) - Number(cashoutAmount);
    
    if( pin == '1234' && cashoutAmount <= currentBalance) {

        document.getElementById('balance').innerText = newbalance;
        alert('Cashout successful!');
    }
    else {
        alert('Invalid PIN or insufficient balance.');
    }
   
});