import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://admin:admin@clusterwebsockets.xjomlyf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWebSockets");

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("WebSockets");
    documentosColecao = db.collection("documentos");

    console.log("Banco de dados conectado com sucesso!");
} catch (error) {
    console.log(error);
}

export { documentosColecao };