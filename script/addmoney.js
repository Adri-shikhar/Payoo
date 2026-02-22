document.getElementById('add-money-btn').addEventListener('click', function() {
    const bank_select = document.getElementById('bank-select');
    const selectedBank = bank_select.value;
    const accountNumber = getvalueinputfield('account-number');
    const amount = getvalueinputfield('add-amount');
    const pin = getvalueinputfield('add-pin');
    console.log('Selected Bank:', selectedBank);
    console.log('Account Number:', accountNumber);
    console.log('Amount:', amount);
    console.log('PIN:', pin);
    if(!selectedBank || selectedBank === 'Select bank') {
        alert('Please select a bank');
        return;
    }

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
    if(pin == '1234') {
        const currentBalance = getbalance();
        const newBalance = currentBalance + Number(amount);
        document.getElementById('balance').innerText = newBalance;
        addTransaction('Bank Deposit', amount);
        alert('Money added successfully!');
    }
   
});