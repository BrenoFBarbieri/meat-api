import { Server } from "./server/server";

const server = new Server();
server.bootstrap().then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(err => {
    console.log('Server failed to start');
    console.log(err);
    process.exit(1) // Comando para sair e código 1 para sinalizar uma saída anormal. 
});