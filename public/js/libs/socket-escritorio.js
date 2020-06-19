var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}


var escritorio = searchParams.get('escritorio');
var label = $('small');
$('h1').text('Escrirorio ' +escritorio);
$('button').on('click', function(){

    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(data){

        if(data === 'No hay tickets'){
            label.text(data);
            alert(data);
            return;
        }

        label.text('Ticket: ' + data.numero);
    });

});
// console.log(escritorio);