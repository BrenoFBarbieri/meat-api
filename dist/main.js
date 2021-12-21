"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const server = new server_1.Server();
server.bootstrap().then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(err => {
    console.log('Server failed to start');
    console.log(err);
    process.exit(1); // Comando para sair e código 1 para sinalizar uma saída anormal. 
});
