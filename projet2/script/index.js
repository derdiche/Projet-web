var form=document.querySelector('.needs-validation');

form.addEventListener('submit',function(event){
    if(form.checkValidity()===false){
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    form.classList.add('was-validated');
})