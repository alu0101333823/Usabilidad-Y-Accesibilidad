let data;
document.getElementById("formulario").addEventListener('submit', event => {
    event.preventDefault()
    if(validacionEmail() && validacionContraseña()) {
        data = { email: $("#email").val(), password: $("#password").val() }
        alert(JSON.stringify(data))
        realizarPost(data);
    } else {
        alert('El email o la contraseña no son correctos, verifique los campos.')
    }
})


function realizarPost(data) {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/comments',
      type: 'POST',
      async: true,
      data: data,
      success: function () {
        console.log("success");
      },
      error: function() {
        console.log("error");
      }
    });
}

function validacionEmail()  {
    const valor = $("#email").val();
    if( valor == null || valor.length == 0) {
        alert('Debe introducir un email.');
        return false
    } 
    return true;
}
    
function validacionContraseña()  {
    const passw = $("#password").val();
    if (passw == null || passw.length == 0) {
        alert('Debe introducir una contraseña.');
        return false
    } else if (passw.length < 8) {
        console.log("hola")
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false
    } else {
        return true
    }
}
