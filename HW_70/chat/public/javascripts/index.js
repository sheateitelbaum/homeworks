(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messagesDiv = $('#messages');
    socket.on('message', msg => {
        console.log(msg);
        messagesDiv.append('<span>' + msg.name + ' says ' + msg.msg + '</span><br/>');
    });
    socket.on('connection', msg => {
        messagesDiv.append('<span>' + msg + '</span><br/>');
    });
    socket.on('connected', msg => {
        messagesDiv.append('<span>' + msg + '</span><br/>');
    });
    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });
    const loginForm = $('#loginForm'),
        loginName = $('#loginName');
    loginForm.submit(e => {
        e.preventDefault();
        socket.emit('login', loginName.val());
        loginForm.hide();
        $('#messageReady').show();

    });
    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });
}());