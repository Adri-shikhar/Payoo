document.getElementById('bonus-btn').addEventListener('click', function() {
    const couponCode = getvalueinputfield('bonus-coupon');
    
    console.log('Coupon Code:', couponCode);

    if(!couponCode || couponCode.trim() === '') {
        alert('Please enter a coupon code');
        return;
    }

    // Check for valid coupon codes
    const validCoupons = {
        'PAYOO100': 100,
        'BONUS50': 50,
        'WELCOME200': 200
    };

    if(validCoupons[couponCode.toUpperCase()]) {
        const bonusAmount = validCoupons[couponCode.toUpperCase()];
        const currentBalance = getbalance();
        const newBalance = currentBalance + bonusAmount;
        
        document.getElementById('balance').innerText = newBalance;
        alert(`Bonus applied! You received $${bonusAmount}`);
        
        // Clear input field
        document.getElementById('bonus-coupon').value = '';
    } else {
        alert('Invalid coupon code. Try: PAYOO100, BONUS50, or WELCOME200');
    }
});
