// Dados simulados de candidatos com detalhes fictícios
const candidates = [
  {
    name: "João da Silva",
    role: "engenheiro",
    date: "2025-05-12",
    experience: "Especialista em obras industriais, projetos estruturais e segurança.",
    time: "12 anos"
  },
  {
    name: "Ana Beatriz",
    role: "estagiario",
    date: "2025-05-11",
    experience: "Estagiária em engenharia civil com foco em AutoCAD e levantamento de campo.",
    time: "1 ano"
  },
  {
    name: "Carlos Souza",
    role: "administrativo",
    date: "2025-04-28",
    experience: "Atuação no setor de RH, folha de pagamento e rotinas administrativas.",
    time: "7 anos"
  },
  {
    name: "Julia Almeida",
    role: "engenheiro",
    date: "2025-05-10",
    experience: "Projetos de saneamento, orçamentos técnicos e acompanhamento de obras.",
    time: "9 anos"
  },
  {
    name: "Pedro Rocha",
    role: "engenheiro",
    date: "2025-04-30",
    experience: "Experiência com gestão de obras públicas e privadas, foco em sustentabilidade.",
    time: "10 anos"
  }
];

// Função para exibir os candidatos com animação
function displayCandidates(filteredCandidates) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Limpa a lista de cartões antes de adicionar

  filteredCandidates.forEach((candidate, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${candidate.name}</h2>
      <p><strong>Função:</strong> ${candidate.role}</p>
      <p><strong>Data de envio:</strong> ${candidate.date}</p>
      <button onclick="viewResume('${candidate.name}')">Ver Currículo</button>
    `;
    cardContainer.appendChild(card);

    // Adiciona animação de entrada ao exibir os cartões
    setTimeout(() => {
      card.classList.add("show");
    }, index * 100); // Atraso suave para cada card
  });
}

// Função para filtrar os candidatos com base nos filtros
function filterCandidates() {
  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const roleFilter = document.getElementById("roleFilter").value;
  const startDateFilter = document.getElementById("startDateFilter").value;
  const endDateFilter = document.getElementById("endDateFilter").value;

  // Filtra os candidatos conforme os critérios
  const filteredCandidates = candidates.filter(candidate => {
    const matchesName = candidate.name.toLowerCase().includes(nameFilter);
    const matchesRole = roleFilter ? candidate.role === roleFilter : true;
    const matchesStartDate = startDateFilter ? candidate.date >= startDateFilter : true;
    const matchesEndDate = endDateFilter ? candidate.date <= endDateFilter : true;
    return matchesName && matchesRole && matchesStartDate && matchesEndDate;
  });

  // Exibe os candidatos filtrados
  displayCandidates(filteredCandidates);
}

// Função chamada ao clicar em "Ver Currículo"
function viewResume(name) {
  const candidate = candidates.find(c => c.name === name);

  // Preenche os detalhes
  document.getElementById("detailName").innerHTML = `<strong>Nome:</strong> ${candidate.name}`;
  document.getElementById("detailFunction").innerHTML = `<strong>Função:</strong> ${candidate.role}`;
  document.getElementById("detailExperience").innerHTML = `<strong>Experiência:</strong> 3 anos na área`;
  document.getElementById("detailEducation").innerHTML = `<strong>Formação:</strong> Engenharia Civil - UFMG`;
  document.getElementById("detailSkills").innerHTML = `<strong>Habilidades:</strong> AutoCAD, Excel, Gestão de Projetos`;

  // Foto padrão
  document.getElementById("detailPhoto").src = "https://via.placeholder.com/120";

  // Mostra a lateral com animação
  const details = document.getElementById("details");
  details.style.display = "block";
  details.classList.add("show-details");
}



// Evento de clique no botão de busca
document.getElementById("searchBtn").addEventListener("click", filterCandidates);

// Exibe todos os candidatos inicialmente
displayCandidates(candidates);

document.getElementById("closeDetails").addEventListener("click", () => {
  const details = document.getElementById("details");
  details.classList.remove("show-details");
  setTimeout(() => {
    details.style.display = "none";
  }, 300); // espera a animação sair
});

document.getElementById("viewFileBtn").addEventListener("click", () => {
  alert("Arquivo PDF fictício seria aberto aqui.");
});
