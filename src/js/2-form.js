const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', handleInput);

function handleInput(event) {
  const message = event.target.value;
  console.dir(event.target);

  console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}

function textInput() {
  const message = localStorage.getItem(STORAGE_KEY);
  if (message) {
    textarea.value = message;
  }
}

textInput();
