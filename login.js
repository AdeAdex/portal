var allUsers = JSON.parse(localStorage.getItem('localUsers'))
function signIn() {
    var userEmail = email.value;
    var userPassword = pass.value;
    var found = false
    for (let index = 0; index < allUsers.length; index++) {
        if (allUsers[index].email == userEmail && allUsers[index].password == userPassword) {
            // localStorage.setItem('currentUserIndex', index)
            found = true;
            break;
        } 
    }
    if (found == true) {
        window.location.href = "usersDashboard.html"
    } else {
        alert("Incorrect details, Kindly please check what you enter and re-type")
    }              
   };


   function fingerprint() {
    loading.innerHTML = `Fingerprint Scanner Reading Your fingerprint`
    let waitingTime = setInterval(function(){
        if (true) {
            window.location.href = "usersDashboard.html"
        }
    }, 5000);
   }

   function showPass() {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password"
    }
   }