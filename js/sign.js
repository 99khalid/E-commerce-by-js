window.addEventListener('popstate', function(event) {
    window.location.href="sign.html"; 
});


let s=document.getElementById('s')
var se;
s.onclick=function(){

     
        const fullNameInput = document.getElementById('sn');
        const emailInput = document.getElementById('se');
        const passwordInput = document.getElementById('sp');
        const fullNameError = document.getElementById('fullNameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
  
        const fullNameRegex = /^[A-Za-z]{4,}$/;
  
        const passwordRegex = /^.{8,}$/;
  
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
        const fullNameValid = fullNameRegex.test(fullNameInput.value);
        const passwordValid = passwordRegex.test(passwordInput.value);
        const emailValid = emailRegex.test(emailInput.value);
  
        if (!fullNameValid) {
            fullNameError.textContent = "Full Name should be 4 at least ";
            fullNameError.style.display = "block";
           
          } else {
            fullNameError.textContent = "";
            fullNameError.style.display = "none";
          }
  
        if (!passwordValid) {
            passwordError.textContent = "Password must be at least 8 characters long.";
            passwordError.style.display = "block";
          } else {
            passwordError.textContent = "";
            passwordError.style.display = "none";
          }
  
        if (!emailValid) {
            emailError.textContent = "Email must be in the format name@domain.com";
            emailError.style.display = "block";
          } else {
            emailError.textContent = "";
            emailError.style.display = "none";
          }
        if(fullNameValid && passwordValid && emailValid){
        let aa=document.getElementById('se').value
        if(localStorage.hasOwnProperty(aa)){
            emailError.textContent = "this Email is Used Before";
            emailError.style.display = "block";
          } else {
            emailError.textContent = "";
             emailError.style.display = "none";
          
        

        
        let sn=document.getElementById('sn').value
        se=document.getElementById('se').value
       let sp=document.getElementById('sp').value
       let ar=[sn,sp];
       const jsonString = JSON.stringify(ar);
          localStorage.setItem(se, jsonString);
          let sh=document.getElementById('hs')
          sh.innerHTML='Registration successful'
                         return true;
      }}
    }

   












 var eml=document.getElementById('lError')   
 var pl=document.getElementById('llError')   


let l=document.getElementById('l')
l.onclick=function(){

    var le=document.getElementById('le').value
    var lp=document.getElementById('lp').value
    if (localStorage.hasOwnProperty(le)) {

        const lo = localStorage.getItem(le);
        const loo = JSON.parse(lo);

            if(loo[1]==lp){

              window.location.href="content.html"; 
               let cv=loo[0];
               let cvv = JSON.stringify(cv);
          localStorage.setItem("user", cvv);

              
            }else{
                pl.textContent="Invaild Password"    
            }
            

    
    
    }else {
        eml.textContent="this Email not Register"    

    }

}


