
var startSocket = function()
{

    var onDisconnect = function(socket){
        console.log('adeu');
    }


    var onConnect = function(socket){
        var that = this;
        console.log('hola');
        socket.on('join', (data) =>{

            console.log('socket join ' + data);
            socket.join(data)
            nsp.to(data).emit(data,'data from ' + data )

        });
    }

    var connections = [];
    var io = require('socket.io')(3333);
    var user = io.of('/cyanide')
    var admin = io.of('/admin')

    user.on("connect",  onConnect);
    user.on("disconnect",  onDisconnect);
}

module.exports = startSocket