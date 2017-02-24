/*------------------------------------------------------------------------------------------------------------------------
 @package: web

 @author: Duatis
 @www: somedomain.com

 @copyright: COPYRIGHT 16 Duatis
 @license: MIT

 =============================================================================
 Filename: main.js
 =============================================================================
 This file is the main entry point for js on the web app.
 --------------------------------------------------------------------------------------------------------------------- */
var socket = io.connect('http://localhost:3333/cyanide');
socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});

function join()
{
	var channel = $('#channel').val();
	socket.emit('join',channel);
	socket.on(channel, function(data){
			showdata(data)
	})
}

function showdata(data)
{
	var li = $('<li>').html(data)
	$('ul#data').append(li)
}
