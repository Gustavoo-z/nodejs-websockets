import jwt from "jsonwebtoken";

function gerarJwt(payload) {
  const tokenJwt = jwt.sign(payload, process.env.SEGREDO_JWT, {
    expiresIn: "2 days",
  });
  return tokenJwt;
}

export default gerarJwt;
