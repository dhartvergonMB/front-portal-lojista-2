function stop() {
    evt.preventDefault();
    document.getElementById('nome').addEventListener(
      'click', stop, false);
      
  }
  stop(evt);

function Redefinir() {
    var emaill = document.getElementById('description');
    switch( emaill.value) {
        case "": 
            alert('Digite algo...')
            break;
        
          default:
            alert('Foi encaminhado uma mensagem para seu e-mail');
            
        
    }
}
Redefinir();
