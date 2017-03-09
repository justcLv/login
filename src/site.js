'use strict';
require('../public/index.html');
import 'babel-polyfill';
import './global.scss';
// /* eslint-disable */

var x = document.getElementById('kusties').classList;
var headingLogin = document.getElementById('heading_login');
var name = document.getElementById('name').classList;
var container = document.getElementById('container').classList;
var formName = document.getElementById('formName');
var formEmail = document.getElementById('formEmail');
var formPassword = document.getElementById('formPassword');
var forgotBtn = document.getElementById('forgot').classList;
var signupBtn = document.getElementById('login');
var k = document.getElementById('emailImg');
var emailFieldId = document.getElementById('emailFieldId');
var nameFieldImg = document.getElementById('crazyCat');
var qwerty = document.getElementById('passwordImg');

function scale () {
  container.toggle('noScale');
}

function signUp () {
  headingLogin.innerHTML = 'Sign up';
  signupBtn.innerHTML = 'Sign up';
}

function logIn () {
  headingLogin.innerHTML = 'Login';
  signupBtn.innerHTML = 'Login';
}

function move () {
  x.toggle('move2');
}

function yesName () {
  name.toggle('yesName');
}

function forgot () {
  forgotBtn.toggle('forgotOff');
}

function nameImg () {
  nameFieldImg.src = './images/ic_user-1.png';
  formName.style.fontWeight = 'bold';
  formName.style.textTransform = 'uppercase';
}

function nameImgNo () {
  nameFieldImg.src = './images/ic_user.png';
  formName.style.fontWeight = 'normal';
  formName.style.textTransform = 'capitalize';
}

function emailImg () {
  k.src = './images/ic_mail-1.png';
  formEmail.style.fontWeight = 'bold';
  formEmail.style.textTransform = 'uppercase';
}

function emailImgNo () {
  k.src = './images/ic_mail.png';
  formEmail.style.fontWeight = 'normal';
  formEmail.style.textTransform = 'capitalize';
}

function passwordImg () {
  qwerty.src = './images/ic_lock-1.png';
  formPassword.style.fontWeight = 'bold';
  formPassword.style.textTransform = 'uppercase';
}

function passwordImgNo () {
  qwerty.src = './images/ic_lock.png';
  formPassword.style.fontWeight = 'normal';
  formPassword.style.textTransform = 'capitalize';
}

document.querySelectorAll('.signupBtn').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    move();
    yesName();
    scale();
    signUp();
    forgot();
  });
});

document.querySelectorAll('.loginBtn').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    move();
    yesName();
    scale();
    logIn();
    forgot();
  });
});

document.querySelectorAll('.nameField').forEach((el) => {
  el.addEventListener('keypress', (ev) => {
    if (nameFieldId.value.length > 0) {   // eslint-disable-line no-undef
      nameImg();
    } else {
      nameImgNo();
    }
  });
});

document.querySelectorAll('.emailField').forEach((el) => {
  el.addEventListener('keypress', (ev) => {
    if (emailFieldId.value.length > 0) {
      emailImg();
    } else {
      emailImgNo();
    }
  });
});

document.querySelectorAll('.passwordField').forEach((el) => {
  el.addEventListener('keypress', (ev) => {
    if (passwordFieldId.value.length > 0) { // eslint-disable-line no-undef
      passwordImg();
    } else {
      passwordImgNo();
    }
  });
});
