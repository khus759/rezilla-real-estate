export function setupFormValidation() {
  document.querySelectorAll('.needs-validation')?.forEach(form =>
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) e.preventDefault();
      form.classList.add('was-validated');
    })
  );
}
