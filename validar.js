function validar(){
  var email = formuser.email.value;
  var senha = formuser.senha.value;

  if(email == "" || email.indexOf('@') == -1){
    alert('preencha o campo email.')
    formuser.email.focus();
    return false;
  }

  if(senha == "" || senha.length <= 5){
    alert('Prencha o campo senha com minimo 6 caracteres.')
    formuser.senha.focus();
    return false
  }
}