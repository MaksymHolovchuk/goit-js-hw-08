import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const inputFormKey = localStorage.getItem(STORAGE_KEY);
let inputForm = {};
if (inputFormKey) {
  inputForm = JSON.parse(inputFormKey);
  form.email.value = inputForm.email;
  form.message.value = inputForm.message;
}
function inputFormOn(evt) {
  inputForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputForm));
}
function submitFormOn(evt) {
  evt.preventDefault();
  if (form.email.value === '' || form.message.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  inputForm.email = form.email.value;
  inputForm.message = form.message.value;
  console.log(inputForm);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  inputForm = {};
}
form.addEventListener('input', throttle(inputFormOn, 500));
form.addEventListener('submit', submitFormOn);
