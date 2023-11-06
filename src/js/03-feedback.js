const form = document.querySelector('.feedback-form');
console.log(form);

const textarea = form.elements.email;
textarea.value = savedData && savedData.email ? savedData.email : '';

form.addEventListener('input', onFormInput);

function onFormInput() {
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  const formData = {
    email: email,
    message: message,
  };
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedData);

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  console.log(savedData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
