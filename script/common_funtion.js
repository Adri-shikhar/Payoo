function getvalueinputfield(id){
    const inputfield = document.getElementById(id);
    const inputvalue = inputfield.value;
    return inputvalue;
}

function getbalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
    
}
function showonly(id) {
    const add_money = document.getElementById('add-money');
    const cashout = document.getElementById('cash-out');
    const transfer = document.getElementById('transfer-money');
    const bonus = document.getElementById('get-bonus');
    const paybill = document.getElementById('pay-bill');
    
    // Hide all sections first
    add_money.style.display = 'none';
    cashout.style.display = 'none';
    transfer.style.display = 'none';
    bonus.style.display = 'none';
    paybill.style.display = 'none';
    
    // Show the selected section
    if(id === 'add-money') {
        add_money.style.display = 'block';
    }
    else if(id === 'cash-out') {
        cashout.style.display = 'block';
    }
    else if(id === 'transfer-money') {
        transfer.style.display = 'block';
    }
    else if(id === 'get-bonus') {
        bonus.style.display = 'block';
    }
    else if(id === 'pay-bill') {
        paybill.style.display = 'block';
    }
}