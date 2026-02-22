document.getElementById('transfer-btn').addEventListener('click', function() {
    const accountNumber = getvalueinputfield('transfer-account');
    const amount = getvalueinputfield('transfer-amount');
    const pin = getvalueinputfield('transfer-pin');
    
    console.log('Transfer Account:', accountNumber);
    console.log('Amount:', amount);
    console.log('PIN:', pin);

    if(accountNumber.length != 11) {
        alert('Please enter a valid 11-digit account number');
        return;
    }
    if(amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if(pin.length != 4) {
        alert('Please enter a valid 4-digit PIN');
        return;
    }

    const currentBalance = getbalance();
    
    if(pin == '1234') {
        if(Number(amount) <= currentBalance) {
            const newBalance = currentBalance - Number(amount);
            document.getElementById('balance').innerText = newBalance;
            addTransaction('Money Transfer', amount);
            alert('Transfer successful!');
            
            // Clear input fields
            document.getElementById('transfer-account').value = '';
            document.getElementById('transfer-amount').value = '';
            document.getElementById('transfer-pin').value = '';
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Invalid PIN.');
    }
});
