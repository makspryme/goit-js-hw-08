import throttle from "lodash.throttle";

const LOCAL_FORM_DATE = 'feedback-form-state';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form input[name="email"]'),
  textareaEl: document.querySelector('.feedback-form textarea[name="message"]'),
};

const inputForm = {
  email: '',
  message: '',
};

returnTextForm();

refs.formEl.addEventListener('input', throttle(setLocaleStorageForm, 500));

refs.formEl.addEventListener('submit', submitForm);

function submitForm(e) {
  if (refs.emailEl.value === '' && refs.textareaEl.value === '') {
    e.preventDefault();
    return;
  }

  e.preventDefault();
  console.log(inputForm);
  refs.formEl.reset();
  localStorage.removeItem(LOCAL_FORM_DATE);
}

function setLocaleStorageForm(e) {
  if (e.target.name === 'email') {
    inputForm.email = e.target.value;
    localStorage.setItem(LOCAL_FORM_DATE, JSON.stringify(inputForm));
  }

  if (e.target.name === 'message') {
    inputForm.message = e.target.value;
    localStorage.setItem(LOCAL_FORM_DATE, JSON.stringify(inputForm));
  }
}

function returnTextForm() {
  const objectForm = JSON.parse(localStorage.getItem(LOCAL_FORM_DATE));

  if (
    (objectForm != null && objectForm['email'] !== '') ||
    (objectForm != null && objectForm['message'] !== '')
  ) {
    inputForm.email = objectForm['email'];
    inputForm.message = objectForm['message'];

    refs.emailEl.value = objectForm['email'];
    refs.textareaEl.value = objectForm['message'];
  }
}
