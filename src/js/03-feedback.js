import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(form);
console.log(form.elements);
const { email, message } = form.elements;
email.value = savedData?.email || '';
message.value = savedData?.message || '';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitClick);

function onFormInput() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitClick(evt) {
  evt.preventDefault();
  console.log(savedData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
