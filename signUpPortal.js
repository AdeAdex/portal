(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  if (localStorage.localUsers) {
    var oldData =  JSON.parse(localStorage.getItem('localUsers'))
    allStudents = oldData

}
  let allUsers = []
  function signUp() {
    if (firstName.value == "" || lastName.value == "" || userName.value == "") {
      firstName.style.borderColor = "red"
    } else {
      let myUsers = {
        fname : firstName.value,
        lname : lastName.value,
        username : userName.value,
        country : countryOption.option,
        state : stateOption.option,
        email : email.value,
        phonenumber : phoneNumber.value,
        dateofbirth : dateOfBirth.value,
        gender : genderOption.value,
        password : pass.value,
        check : invalidCheck.value
      }
      allUsers.push(myUsers);
    localStorage.setItem('localUsers', JSON.stringify(allUsers))
    window.location.href = "login.html";
    }
  }


  