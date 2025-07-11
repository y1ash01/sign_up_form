const pass = document.getElementById('pass');
const con_pass = document.getElementById('con_pass');
const form = document.querySelector('#myForm');

function validatePasswords(){
    if(pass.value !== con_pass.value){
        con_pass.setCustomValidity('Passwords do not match!');
    } 
    else{
        con_pass.setCustomValidity('');
    }
}

pass.addEventListener('input', validatePasswords);
con_pass.addEventListener('input', validatePasswords);

form.addEventListener('submit', function (e) {
  validatePasswords();
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
