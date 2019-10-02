const net = require('net');

const server = new net.Socket();

server.connect(
    3000 ,
    '127.0.0.1' ,
    ()=>{
        console.log('Soket Conectado Correctamente.');
    }
);

server.on(
    'data',
    (data)=>{
        console.log(`Info ${data}`);
        server.destroy();
    }
)

server.on(
    'close',
    ()=>{
        console.log('Se ha cerrado la conexion.');
    }
)
