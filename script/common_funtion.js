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
    // Hide all sections
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';
    
    // Show the selected section
    document.getElementById(id).style.display = 'block';
}

function addTransaction(type, amount) {
    //get the history container
    const historyContainer = document.getElementById('transaction-list');
    
    //2- create new div
    const newDiv = document.createElement('div');
    
    //3- add innerHTML to new div
    newDiv.innerHTML = `
        <div class="bg-white p-4 rounded-2xl flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <img src="assets/opt-1.png" alt="icon" class="w-6 h-6">
                </div>
                <div>
                    <p class="text-gray-900 font-medium text-sm">${type}</p>
                    <p class="text-gray-500 text-xs">Today ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                </div>
            </div>
            <button class="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </button>
        </div>
    `;
    
     //4- append newDiv to history container
    historyContainer.appendChild(newDiv);
}
