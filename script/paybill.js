document.getElementById('pay-bill-btn').addEventListener('click', function() {
    const bill_select = document.getElementById('bill-select');
    const selectedBill = bill_select.value;
    const billerAccount = getvalueinputfield('biller-account');
    const amount = getvalueinputfield('bill-amount');
    const pin = getvalueinputfield('bill-pin');
    
    console.log('Selected Bill:', selectedBill);
    console.log('Biller Account:', billerAccount);
    console.log('Amount:', amount);
    console.log('PIN:', pin);

   

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
            alert(`Bill paid successfully! ${selectedBill}: $${amount}`);
            
            // Clear input fields
            document.getElementById('bill-select').value = '';
            document.getElementById('biller-account').value = '';
            document.getElementById('bill-amount').value = '';
            document.getElementById('bill-pin').value = '';
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Invalid PIN.');
    }
});
