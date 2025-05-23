import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin@clusterwebsockets.xjomlyf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWebSockets",
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("WebSockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
