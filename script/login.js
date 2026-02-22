document.getElementById('loginButton').addEventListener('click', function() {
   const mobileNumber = document.getElementById('mobile-number').value;
   const pin = document.getElementById('pin').value;

   if(mobileNumber == '01632311801' && pin == '1234') {

      alert('Login successful!');
      window.location.href = "home.html";
   } 
   else {
      alert('Invalid mobile number or PIN.');
   }

   
});