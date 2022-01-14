function stop() {
    evt.preventDefault();
    document.getElementById('nome').addEventListener(
      'click', stop, false);
      
  }
  stop(evt);

function mostrarSenha() {
    var tipo = document.getElementById("psw");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }
  mostrarSenha();
  