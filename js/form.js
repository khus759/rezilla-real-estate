export function setupFormValidation() {
  const form = document.querySelector('#propertyForm');
  form.onsubmit = (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }
    form.classList.add('was-validated');
  };
}
