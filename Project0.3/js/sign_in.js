let formSignInFormBut = document.querySelector('.sign-in');
let formSignUp = document.querySelector('.form-sign-up');
let formSignIn = document.querySelector('.form-sign-in');
let formSignUpFormBut = document.querySelector('.sign-up');
let formSignInButt = document.querySelector('.form-sign-in-button');

let formAuthEmail = document.querySelector('.form-input-email-sign-in'),
    formAuthPass = document.querySelector('.form-input-pass-sign-in'),
    formAuthInputs = document.querySelector('.form-input-sign-in');

let formAuthEmailVal = formAuthEmail.value;
let formAuthPassVal = formAuthPass.value;



//При нажатии на кнопку Sign in форма выходит из displpay : none
formSignInFormBut.addEventListener('click', function() {
    formSignUp.style.display = 'none';
    formSignIn.style.display = 'block';
    inputButt.style.display = 'none';
    formSignInButt.style.display = 'inline-block'
    inputEmail.value === '';
    inputName.value === '';
    inputPass.value === '';
    inputPassRep.value === '';
    inputSur.value === '';
    //Если форма блочная а не none то
    if (formSignIn.style.display == 'block') {
        //То выполняем функцию addEventListener onclick
        

        
    }


});

//При нажатии обратно на Sign up ,Sign in блок становится dispay none
formSignUpFormBut.addEventListener('click', function() {
    formSignUp.style.display = 'block';
    formSignIn.style.display = 'none';

    formAuthEmail.value === '';
    formAuthPass.value === '';

    inputButt.style.display = 'inline-block';
    formSignInButt.style.display = 'none';


});