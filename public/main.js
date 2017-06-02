$(function() {

    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e) {
        e.preventDefault();
        chat.append(message.val() + "<br/>");
    });

});