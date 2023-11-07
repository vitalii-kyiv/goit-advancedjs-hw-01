import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

function saveFormData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function setSavedData() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = savedData?.email || '';
  message.value = savedData?.message || '';
}

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmitClick);

setSavedData();

function onSubmitClick(evt) {
  evt.preventDefault();
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (email.value && message.value) {
    console.log(savedData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Заповніть всі поля форми!');
  }
}
