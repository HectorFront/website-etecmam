module.exports = {
    Contact: (assunto, nome, email, telefone, mensagem) => {
        return `<h2>📌 Assunto: ${assunto}</h2>
        <h3>Detalhes do contato</h3>
          <ul>
              <li>Nome: ${nome}</li>
              <li>Email: ${email}</li>
              <li>Telefone: ${telefone}</li>
          </ul>
        <h3>Mensagem</h3>
      <p>${mensagem}</p>`
    }
}