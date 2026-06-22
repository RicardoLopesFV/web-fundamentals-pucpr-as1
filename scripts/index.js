// 1. Extrai a Query String crua da URL (ex: ?nome=Ricardo&email=...)
const queryString = window.location.search;

// 2. Instancia a interface nativa do JS para manipular esses dados
const urlParams = new URLSearchParams(queryString);

// Verifica se existem parâmetros na URL (se o usuário preencheu o formulário)
if (urlParams.toString().length > 0) {
  // --- ATUALIZA OS INDICADORES VISUAIS ---

  // Imprime a string crua no terminalzinho da página
  document.getElementById("query-string").textContent = queryString;

  // Muda o status para verde (sucesso)
  document.getElementById("status-dot").className = "status-dot success";
  document.getElementById("status-text").className = "status-text success-text";
  document.getElementById("status-text").textContent = "Data received successfully";

  // Gera um número de recibo fictício aleatório
  const randomTicketNumber = Math.floor(Math.random() * 900000) + 100000;
  document.getElementById("ticket-number").textContent = `Nº ${randomTicketNumber}`;

  // --- GERA A TABELA DE DADOS ---

  let dadosHtml =
    '<div style="margin-top: 2rem; border-top: 1px solid var(--btn-andesite-border);">';

  // O loop for...of itera por cada chave e valor recebido do formulário
  for (const [chave, valor] of urlParams.entries()) {
    dadosHtml += `
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--btn-andesite-border);">
              <span class="copper-text" style="margin: 0; letter-spacing: 2px;">${chave}</span>
              <span class="paragraph" style="color: var(--text-main); font-family: var(--font-family-monospaced);">${valor}</span>
            </div>
          `;
  }
  dadosHtml += "</div>";

  // Captura o contêiner vazio do ticket e injeta os dados nele
  const ticketDataContainer = document.getElementById("ticket-data");
  ticketDataContainer.className = "";
  ticketDataContainer.innerHTML = dadosHtml;
}
