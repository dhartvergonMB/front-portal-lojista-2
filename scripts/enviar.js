function stop() {
    evt.preventDefault();
    document.getElementById('nome').addEventListener(
      'click', stop, false);
      
  }
  stop(evt);

function Enviar() {
    var emaill = document.getElementById('email');
    switch( emaill.value) {
        case "matheusbar750@gmail.com": 
        
          answer =  alert('Obrigado sr(a), bem vindo!');
          
          break;

          

          default:
            alert('Algo foi digitado incorretamente,tente novamente!');
            
        
    }
}
Enviar();
