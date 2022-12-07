// document.getElementById('pass_eye').addEventListener('click', function () {
//     if(document.getElementById('password').type == 'password') {
//         document.getElementById('password').type = 'text'
//     }
// })

var password = documert.getElementById('pass')
var password_eye = document.getElementById('pass_eye')

function togglePassword() {
    if (password.type == 'password') {
        password.type = 'text';
    }
}

