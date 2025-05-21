import { documentosColecao } from "./dbConnect.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('Um cliente se conectou! ID:', socket.id);
    
    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
});

    socket.on('texto_editor', ({ texto, nomeDocumento }) => {
        socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
});

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({ nome: nome });
    return documento;
};