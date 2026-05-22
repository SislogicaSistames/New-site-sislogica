// Navbar scroll highlight
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-menu a');

function onScroll() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll);

// Contact form = INUTIL
/*document.querySelector('.contato-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
*/

// Switch theme toggle
const switchTheme = document.getElementById('switchTheme');
const contatoLogo = document.getElementById('contatoLogo');
if (switchTheme) {
  switchTheme.addEventListener('click', function () {
    this.classList.toggle('active');
    document.body.classList.toggle('light-mode');
    if (contatoLogo) {
      contatoLogo.src = document.body.classList.contains('light-mode')
        ? 'assets/logo_minimalista_azul.svg'
        : 'assets/logo_minimalista_branca.svg';
    }
  });
}

// Modal de serviços
const servicosData = [
  { title: 'Roteirizador', desc: 'O Roteirizador da Sislógica otimiza as rotas de entrega da sua frota, reduzindo custos operacionais e tempo de deslocamento. Com inteligência geoespacial, calcula a melhor sequência de paradas considerando distância, trânsito e janelas de horário. Ideal para entregas First, Middle e Last Mile.', img: 'assets/ROTEIRIZADOR_card.png' },
  { title: 'First, Middle e Last Mile', desc: 'Gerenciamento completo de entregas em todas as etapas da cadeia logística: First Mile (coleta na origem), Middle Mile (transporte entre centros) e Last Mile (entrega final ao destinatário). Tudo com rastreamento em tempo real e otimização de rotas.' },
  { title: 'Ferramenta WhatsApp', desc: 'Comunicação automatizada via WhatsApp integrada ao TMS. Dispare notificações de status de entrega, comprovantes, avisos de atraso e muito mais. Mantenha motoristas e clientes informados em tempo real sem esforço manual.', iconClass: 'whatsapp-bg' },
  { title: 'Controle de Indenização', desc: 'Gestão completa de processos de indenização: registro de ocorrências, controle de prazos, cálculos de valores e acompanhamento de status. Reduza perdas e tenha visibilidade total sobre cada caso.' },
  { title: 'Módulo de SAC', desc: 'Central de Atendimento ao Cliente integrada ao TMS. Abra e acompanhe chamados, registre reclamações e mantenha um histórico completo do relacionamento com seus clientes, tudo em um só lugar.', img: 'assets/SAC_card.png' },
  { title: 'APP TMS Drivers', desc: 'Aplicativo mobile exclusivo para motoristas. Consulte rotas, registre entregas, envie comprovantes, receba notificações e mantenha comunicação direta com a central. Tudo na palma da mão.', img: 'assets/APP_card.png' },
  { title: 'Monetização de motoristas', desc: 'Plataforma que conecta motoristas agregados a fretes disponíveis. Maximize o aproveitamento da frota e gere novas receitas conectando oferta e demanda de transporte de forma inteligente.', img: 'assets/MONETIZACAO_card.png' },
  { title: 'Emissão de NF-e, CT-e e MDF-e', desc: 'Emissão eletrônica de documentos fiscais totalmente integrada ao TMS. Gere NF-e, CT-e e MDF-e com validação automática, reduzindo erros e agilizando a sua operação fiscal.', img: 'assets/NFe_card.png' },
  { title: 'Dashboards de Controle', desc: 'Painéis gerenciais com indicadores em tempo real: entregas realizadas, taxas de sucesso, desempenho por motorista, custos operacionais e muito mais. Tome decisões estratégicas com dados precisos.' },
  { title: 'Controle de Tracking', desc: 'Rastreamento detalhado de todas as entregas com atualizações em tempo real. Saiba exatamente onde cada carga está, receba notificações de etapas concluídas e mantenha seus clientes informados.', img: 'assets/TRACKING_card.png' }
];

let servicoIndex = 0;

function renderServicoModal() {
  const data = servicosData[servicoIndex];
  const iconDiv = document.getElementById('servicoModalIcon');
  const iconImg = document.getElementById('servicoModalIconImg');
  iconDiv.className = 'servico-modal-icon';
  iconImg.className = '';
  iconImg.style.display = '';
  iconImg.src = 'assets/icons/checklist.svg';
  if (data.iconClass) {
    iconDiv.classList.add(data.iconClass);
    iconImg.style.display = 'none';
  } else if (data.img) {
    iconImg.classList.add('hero-img');
    iconImg.src = data.img;
  }
  document.getElementById('servicoModalTitle').textContent = data.title;
  document.getElementById('servicoModalDesc').textContent = data.desc;
  document.querySelectorAll('.servico-modal-arrow').forEach(a => a.style.display = '');
}

function openServicoModal(title) {
  servicoIndex = servicosData.findIndex(s => s.title === title);
  if (servicoIndex === -1) servicoIndex = 0;
  renderServicoModal();
  document.getElementById('servicoModal').classList.add('active');
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.body.style.overflow = 'hidden';
}

function navigateServico(dir) {
  servicoIndex += dir;
  if (servicoIndex < 0) servicoIndex = servicosData.length - 1;
  if (servicoIndex >= servicosData.length) servicoIndex = 0;
  renderServicoModal();
}

function closeServicoModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('servicoModal').classList.remove('active');
  document.body.style.paddingRight = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeServicoModal();
  } else if (e.key === 'ArrowLeft') {
    navigateServico(-1);
  } else if (e.key === 'ArrowRight') {
    navigateServico(1);
  }
});

// SISEDI collapse toggle
function toggleSisedi(btn) {
  const item = btn.closest('.sisedi-item');
  const isOpen = item.classList.contains('active');
  document.querySelectorAll('.sisedi-item.active').forEach(el => {
    el.classList.remove('active');
  });
  if (!isOpen) item.classList.add('active');
}
