$(function() {
    //socket iniciado
    var socket = io();

    //variables
    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e) {
        e.preventDefault();
        socket.emit('mensaje-del-cliente', message.val());
        message.val(' ');
    });

    socket.on('mensaje-del-servidor', function(data) {
        chat.append(data + '<br/>');
    });

});