const { createApp } = Vue

createApp({
  data() {
    return {
      page: 'home',
      mobOpen: false,
      scrolled: false,
      toast: false,
      modal: null,
      faqOpen: null,
      activeProduct: null,
      selectedProducts: [],
      form: { name: '', lastName: '', email: '', phone: '', company: '', subject: '', message: '', lgpd: false },
      clients: ['Cardoso & Bruno Sociedade de Advogados', 'Casa dos Pets'],
      stats: [{ value: '5', label: 'Sistemas ativos' }, { value: '2+', label: 'Clientes atendidos' }, { value: '98%', label: 'Satisfação' }, { value: '1', label: 'Anos de mercado' }],
      aboutStats: [{ value: '2+', label: 'Clientes ativos' }, { value: '5', label: 'Produtos' }, { value: '1', label: 'Colaboradores' }, { value: '1', label: 'Anos de exp.' }, { value: '1', label: 'Estados' }],
      products: [
        { id: 1, name: 'OrdoJuris', shortDesc: 'Advocacia e processos jurídicos.', iconClass: 'fas fa-book-open text-blue-700', bgClass: 'bg-blue-50 border border-blue-200' },
        { id: 2, name: 'Synapses', shortDesc: 'Conselhos de fiscalização profissional.', iconClass: 'fas fa-network-wired text-indigo-700', bgClass: 'bg-indigo-50 border border-indigo-200' },
        { id: 3, name: 'Oralis', shortDesc: 'Consultório e clínica odontológica.', iconClass: 'fas fa-tooth text-cyan-700', bgClass: 'bg-cyan-50 border border-cyan-200' },
        { id: 4, name: 'Licitus', shortDesc: 'Licitações e compras públicas.', iconClass: 'fas fa-gavel text-sky-700', bgClass: 'bg-sky-50 border border-sky-200' },
        { id: 5, name: 'Petys', shortDesc: 'Pet shop, banho, tosa e veterinária.', iconClass: 'fas fa-paw text-amber-600', bgClass: 'bg-amber-50 border border-amber-200' },
        { id: 6, name: 'FinançasPro', shortDesc: 'Gestão de Finanças Pessoais.', iconClass: 'fas fa-dollar-sign text-green-700', bgClass: 'bg-green-50 border border-green-200'}
      ],
      features: [
        { icon: 'fas fa-bolt', title: 'Implantação em dias', desc: 'Onboarding guiado com suporte dedicado. Você começa em dias, não meses.' },
        { icon: 'fas fa-shield-halved', title: 'Segurança de ponta a ponta', desc: 'Criptografia, backups diários automáticos e infraestrutura certificada no Brasil.' },
        { icon: 'fas fa-headset', title: 'Suporte humanizado', desc: 'Atendimento por pessoas que conhecem profundamente o seu produto e setor.' },
        { icon: 'fas fa-chart-line', title: 'Dashboards inteligentes', desc: 'Relatórios e indicadores que transformam dados em decisões estratégicas claras.' },
        { icon: 'fas fa-puzzle-piece', title: 'Integrações nativas', desc: 'Conecte com sistemas de e-mail, pagamentos, governo e ERPs sem esforço extra.' },
        { icon: 'fas fa-sync-alt', title: 'Atualizações contínuas', desc: 'Melhorias entregues regularmente sem custo adicional. Sempre evoluindo.' },
      ],
      testimonials: [
        { name: '', role: '', initials: '', color: '', quote: '' },
      ],
      productsDetail: [
        { id: 1, name: 'OrdoJuris', sector: 'Escritórios de Advocacia', headline: 'Organização total para o escritório jurídico moderno', description: 'O Ordo centraliza processos, prazos, clientes, honorários e documentos em uma plataforma feita sob medida para advogados. Reduza erros, elimine planilhas e entregue mais valor ao seu cliente.', feats: ['Gestão completa de processos e prazos', 'Controle financeiro e honorários', 'Agenda e compromissos integrados', 'Portal do cliente seguro', 'Relatórios de produtividade', 'Controle de documentos e petições', 'Notificações automáticas de prazo'], iconClass: 'fas fa-book-open', iconBg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', color: '#1a4fa0', light: '#eff6ff', border: '#bfdbfe', shadow: 'rgba(26,79,160,.18)', tagBg: '#dbeafe', tags: ['Processos', 'Financeiro', 'Agenda', 'Documentos'] },
        { id: 2, name: 'Synapses', sector: 'Conselhos Profissionais', headline: 'Governança, controle e transparência institucional', description: 'O Synapses oferece módulos integrados para gestão de profissionais inscritos, cobrança de anuidades, processos ético-disciplinares e comunicação oficial, em conformidade com a legislação vigente.', feats: ['Cadastro e habilitação de profissionais', 'Controle de anuidades e cobranças', 'Processos ético-disciplinares digitais', 'Emissão de carteiras digitais', 'Integração com sistemas CFx federais', 'Portal de serviços ao profissional', 'Relatórios para prestação de contas'], iconClass: 'fas fa-network-wired', iconBg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', color: '#4338ca', light: '#eef2ff', border: '#c7d2fe', shadow: 'rgba(67,56,202,.18)', tagBg: '#e0e7ff', tags: ['Cadastro', 'Anuidades', 'Fiscalização', 'Carteiras'] },
        { id: 3, name: 'Oralis', sector: 'Odontologia', headline: 'Da consulta ao sorriso: a jornada completa do paciente', description: 'O Oralis cuida de cada etapa: agendamento, prontuário clínico, odontograma, financeiro e comunicação com o paciente. Deixe o dentista focar no que importa — a saúde bucal.', feats: ['Agendamento online com confirmação', 'Prontuário e odontograma digital', 'Planos de tratamento e orçamentos', 'Integração com convênios', 'Controle financeiro e repasse', 'Anamnese digital', 'App do paciente'], iconClass: 'fas fa-tooth', iconBg: 'linear-gradient(135deg,#cffafe,#a5f3fc)', color: '#0891b2', light: '#ecfeff', border: '#a5f3fc', shadow: 'rgba(8,145,178,.18)', tagBg: '#cffafe', tags: ['Agenda', 'Prontuário', 'Financeiro', 'Convênios'] },
        { id: 4, name: 'Licitus', sector: 'Setor Público', headline: 'Transparência e eficiência nas compras governamentais', description: 'O Licitus automatiza editais, recebimento de propostas e toda a tramitação licitatória com conformidade à Lei 14.133/2021, garantindo rastreabilidade total e publicidade dos atos.', feats: ['Gestão de editais e modalidades', 'Habilitação e análise de propostas', 'Publicação automática no portal', 'Relatórios para TCE e TCU', 'Suporte à Nova Lei 14.133/2021', 'Controle de atas e contratos', 'Notificações automáticas a licitantes'], iconClass: 'fas fa-gavel', iconBg: 'linear-gradient(135deg,#e0f2fe,#bae6fd)', color: '#0284c7', light: '#f0f9ff', border: '#bae6fd', shadow: 'rgba(2,132,199,.18)', tagBg: '#e0f2fe', tags: ['Editais', 'Propostas', 'Contratos', 'Transparência'] },
        { id: 5, name: 'Petys', sector: 'Pet Shop & Veterinária', headline: 'Tudo que seu pet shop precisa em um só sistema', description: 'O Petys integra agendamento de banho e tosa, prontuário veterinário, controle de estoque, PDV, programa de fidelidade e app do tutor — pensado para quem ama e cuida de animais.', feats: ['Agendamento de banho, tosa e consultas', 'Prontuário veterinário completo', 'Controle de estoque e PDV', 'Programa de fidelidade e CRM', 'App do tutor com histórico', 'Relatórios financeiros e operacionais', 'Integração com WhatsApp'], iconClass: 'fas fa-paw', iconBg: 'linear-gradient(135deg,#fef9c3,#fde68a)', color: '#d97706', light: '#fffbeb', border: '#fde68a', shadow: 'rgba(217,119,6,.18)', tagBg: '#fef9c3', tags: ['Agendamento', 'Prontuário', 'Estoque', 'App Tutor'] },
        { id: 6, name: 'FinançasPro', sector: 'Gestão Financeira Pessoal', headline: 'Controle financeiro completo para o seu dia a dia', description: 'O FinançasPro auxilia na gestão das suas finanças pessoais, controle de gastos e receitas.', feats: ['Controle de despesas e receitas', 'Controle de fluxo de caixa', 'Relatórios financeiros completos', 'Contas Compartilhaas', 'Controle de investimentos', 'Notificações automáticas de prazo'], iconClass: 'fas fa-dollar-sign', iconBg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', color: '#1a4fa0', light: '#eff6ff', border: '#bfdbfe', shadow: 'rgba(26,79,160,.18)', tagBg: '#dbeafe', tags: ['Finanças', 'Controle', 'Relatórios', 'Metas'] },
      ],
      faqs: [
        { q: 'Os sistemas funcionam na nuvem ou precisam instalar no computador?', a: 'Todos os sistemas da Cognitio são 100% em nuvem (SaaS). Você acessa pelo navegador, de qualquer dispositivo, sem instalação ou servidor próprio.' },
        { q: 'Como funciona a implantação e o treinamento?', a: 'Após a contratação, nossa equipe realiza onboarding completo: migração de dados, configuração e treinamento personalizado. O processo leva de 3 a 10 dias úteis.' },
        { q: 'Os dados da minha empresa são seguros?', a: 'Sim. Criptografia em trânsito e em repouso, backups automáticos diários com retenção de 90 dias, infraestrutura em data centers certificados no Brasil.' },
        { q: 'É possível migrar dados de outro sistema?', a: 'Sim, oferecemos suporte à migração dos principais sistemas do mercado em cada setor. Nossa equipe técnica avalia e conduz o processo com segurança.' },
        { q: 'Existe contrato de fidelidade?', a: 'Oferecemos planos mensais sem fidelidade e planos anuais com desconto. Você escolhe o modelo que faz mais sentido para o seu negócio.' },
        { q: 'Posso testar antes de contratar?', a: 'Sim! Oferecemos demonstração gratuita e personalizada para o seu negócio. Entre em contato e agende com um de nossos especialistas.' },
      ],
      mvv: [
        { title: 'Missão', icon: 'fas fa-rocket', bg: '#eff6ff', color: '#1a4fa0', text: 'Desenvolver soluções tecnológicas que simplifiquem a gestão de negócios, gerando valor real para nossos clientes e para a sociedade.' },
        { title: 'Visão', icon: 'fas fa-eye', bg: '#f0fdf4', color: '#16a34a', text: 'Ser a principal referência nacional em software de gestão setorial, reconhecidos pela inovação, qualidade e comprometimento.' },
        { title: 'Valores', icon: 'fas fa-heart', bg: '#fef3c7', color: '#d97706', text: 'Ética, colaboração, excelência técnica, foco no cliente e responsabilidade social orientam cada decisão que tomamos.' },
      ],
      timeline: [
        { year: '23', title: 'Fundação da Cognitio', tag: 'Origem', tagBg: '#eff6ff', tagColor: '#1a4fa0', desc: 'A empresa nasce em Belo Horizonte com a missão de criar tecnologia especializada para setores carentes de boas ferramentas digitais.' },
        { year: '23', title: 'Lançamento do OrdoJuris', tag: '1º Produto', tagBg: '#dbeafe', tagColor: '#1a4fa0', desc: 'Nosso primeiro sistema, para escritórios de advocacia, conquista seus primeiros clientes em Minas Gerais.' },
        { year: '26', title: 'Expansão do portfólio', tag: 'Crescimento', tagBg: '#e0e7ff', tagColor: '#4338ca', desc: 'Lançamento do Synapses e Oralis, ampliando nossa atuação para conselhos profissionais e odontologia.' },
        { year: '26', title: 'Setor público e pet shops', tag: 'Inovação', tagBg: '#e0f2fe', tagColor: '#0284c7', desc: 'Licitus e Petys entram em produção, completando o ecossistema com 5 produtos verticais distintos.' },
        ],
      team: [
        { name: 'Fabiano Cardoso', initials: 'FC', role: 'CEO & Co-fundador', color: 'linear-gradient(135deg,#1a4fa0,#0d1f3c)', bio: 'Profissional multiareas com formação em Direito, especialista em Gestão e Bacharel em Engenharia de Software.' },
      ],
      valuesDetail: [
        { icon: 'fas fa-handshake', bg: '#eff6ff', color: '#1a4fa0', label: 'Ética e transparência', desc: 'Nunca prometemos o que não podemos entregar. Transparência total em preços, prazos e limitações.' },
        { icon: 'fas fa-users', bg: '#f0fdf4', color: '#16a34a', label: 'Foco no cliente', desc: 'Cada decisão começa com a pergunta: isso melhora a vida do nosso cliente?' },
        { icon: 'fas fa-award', bg: '#fef3c7', color: '#d97706', label: 'Excelência técnica', desc: 'Código bem escrito, interfaces pensadas e sistemas que simplesmente funcionam.' },
        { icon: 'fas fa-leaf', bg: '#ecfdf5', color: '#059669', label: 'Responsabilidade social', desc: 'Tecnologia que serve à sociedade. Priorizamos clientes do setor público e terceiro setor.' },
      ],
      contactInfo: [
        { icon: 'fas fa-map-marker-alt', label: 'Endereço', value: 'Funcionaento 100% Digital', sub: 'Não temos endereço físico' },
        { icon: 'fas fa-envelope', label: 'E-mail', value: 'contato@cognitio.com.br', sub: 'comercial@cognitio.com.br (vendas)' },
        { icon: 'fas fa-phone', label: 'Telefone', value: '(31) 99224-6996', sub: 'Seg a Sex, 8h às 18h Apenas Whatsapp' },
        { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: '(31) 99224-6996', sub: 'Atendimento prioritário' },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 10
      document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible') })
    })
    setTimeout(() => document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible') }), 120)
  },
  methods: {
    nav(p) { this.page = p; this.activeProduct = null; window.scrollTo({ top: 0, behavior: 'smooth' }); this.$nextTick(() => setTimeout(() => document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible') }), 80)) },
    openModal(p) { this.modal = p },
    getDetail(id) { return this.productsDetail.find(p => p.id === id) || this.productsDetail[0] },
    toggleProduct(name) { const i = this.selectedProducts.indexOf(name); if (i > -1) this.selectedProducts.splice(i, 1); else this.selectedProducts.push(name) },
    submitForm() { this.toast = true; this.form = { name: '', lastName: '', email: '', phone: '', company: '', subject: '', message: '', lgpd: false }; this.selectedProducts = []; setTimeout(() => this.toast = false, 5000) },
  },
  watch: { page() { document.title = { home: 'Cognitio Tecnologia — Ecossistema de Software', products: 'Produtos — Cognitio Tecnologia', about: 'Sobre Nós — Cognitio Tecnologia', contact: 'Contato — Cognitio Tecnologia' }[this.page] || 'Cognitio Tecnologia' } }
}).mount('#app')
