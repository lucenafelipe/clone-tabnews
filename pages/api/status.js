function status(request, response) {
  response.status(200).json({ chave: "Olá! Seja bem vindo!" });
}

export default status;
