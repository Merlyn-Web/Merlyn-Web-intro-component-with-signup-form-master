const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password =  document.getElementById('password')
const form = document.getElementById('form')

const input = document.getElementsByTagName('input')

const firstnameerror  = document.getElementById('firstnameerror')
const lastnameerror = document.getElementById('lastnameerror')
const emailerror = document.getElementById('emailerror')
const passworderror = document.getElementById('passworderror')

form.addEventListener('submit', (e) => {
    //validation for first name
     let firstnamealert = []
    if(firstname.value === '' || firstname.value == null){
         firstnamealert.push('First Name cannot be empty')
    }

    if(firstname.value.length == 0){
        e.preventDefault()
        firstnameerror.innerText = firstnamealert
        firstname.classList.add("borderred")
    }


    //validation for last name
    let lastnamealert = []
    if(lastname.value === ''){
        lastnamealert.push('Last Name cannot be empty')
    }

    if(lastname.value.length == 0){
        e.preventDefault()
        lastnameerror.innerText = lastnamealert
        lastname.classList.add("borderred")
    }


    //validation for email
    let emailalert = []
    if(email.value === ''){
        emailalert.push('Looks like this is not an email')
    }

    if(email.value.length == 0){
        e.preventDefault()
        emailerror.innerText = emailalert
        email.classList.add("borderred")
        email.classList.add("emailred")
        email.value = "email@exemple/com"
    }


    //validation for password
    let passwordalert = []
    if(password.value === ''){
        passwordalert.push('Password cannot be empty')
    }

    if(password.value.length == 0){
        e.preventDefault()
        passworderror.innerText = passwordalert
        password.classList.add("borderred")
    }
    
})