
let formData = { email: "", message: "",}



const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');



form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();



  // Вимога: "Заповніть будь ласка всі поля"
    if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', handleInput);

function handleInput(event) {

  // Інформація в якому полі я працюю: input чи в textarea 
  const nameEl = event.target.name;
  console.log(nameEl);

// отримую значення, яке я ввожу в цьому полі
  const valueEl = event.target.value;
console.log(valueEl);

 formData[nameEl] = valueEl.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
}


// Отримуємо збережені значення зі сховища

function textInput() {
  const objReturn = localStorage.getItem(STORAGE_KEY);
  const objReturnAdd = JSON.parse(objReturn);

  if (objReturnAdd) {
    input.value = objReturnAdd.email || '';
    textarea.value = objReturnAdd.message || '';
    
    // Синхронізація formData з локальним сховищем
    formData = objReturnAdd;
  }
}

textInput();