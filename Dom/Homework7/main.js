function validateForm()
{
    let username=document.getElementById('input__username');
    let password=document.getElementById('input__password');
    let confirmPassword=document.getElementById('input__confirm');
    let usernameLabel=document.getElementById('username_label');
    let passwordLabel=document.getElementById('password_label');
    let confirmPasswordLabel=document.getElementById('confirm_label');
    let firstError=document.createElement('p');
    firstError.style.direction='rtl';
    firstError.style.color='red';
    firstError.innerHTML='الزامی';
    let secondError=document.createElement('p');
    secondError.style.direction='rtl';
    secondError.style.color='red';
    secondError.style.innerHTML='رمزهای وارد شده یکسان نیستند';
    if (username.value=='') {
        username.style.border='2px solid red';
        let div=document.getElementById('user');
        div.appendChild(firstError);
    }
    if(password.value=='')
    {
        password.style.border='2px solid red';
        let div=document.getElementById('pass');
        div.appendChild(firstError);
    }
    if(confirmPassword.value==''){
        confirmPassword.style.border='2px solid red';
        let div=document.getElementById('confirm');
        div.appendChild(firstError);
    }
    if (password.value!=confirmPassword.value) {
        let div1=document.getElementById('pass');
        let div2=document.getElementById('confirm');
        password.style.border='2px solid red';
        confirmPassword.style.border='2px solid red';
        div1.appendChild(secondError);
        div2.appendChild(secondError);
    }
}