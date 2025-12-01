// Estrutura padronizada para dados de lives
// Este arquivo é o SOT (Source of Truth) para cada live

export interface LiveData {
  // Metadados da Live
  meta: {
    number: number
    title: string
    date: string
    duration: string
    youtubeUrl?: string
    theme: string
    context?: string
  }

  // TL;DR - Resumo Rápido
  tldr: {
    oneSentence: string
    keyTakeaways: string[]
    whoIsFor: string[]
    notFor?: string[]
  }

  // Ideias-Chave
  keyIdeas: Array<{
    emoji: string
    title: string
    description: string
    highlight?: boolean
  }>

  // Resumo Executivo
  summary: {
    problem: string
    solution: string
    transformation: string
    keyQuote: string
  }

  // Metáfora Central
  metaphor?: {
    before: { title: string; items: string[] }
    after: { title: string; items: string[] }
  }

  // Pilares
  pillars: Array<{
    number: string
    title: string
    description: string
    consequence?: string
  }>

  // Processo
  process: Array<{
    phase: string
    title: string
    humanPercent: string
    time: string
    description: string
  }>

  // Insights Públicos
  publicInsights: Array<{
    title: string
    description: string
  }>

  // VAULT
  vault: {
    password: string
    templates: Array<{ title: string; content: string }>
    scripts: Array<{ title: string; prompt: string }>
    checklists: Array<{ title: string; items: string[]; variant?: 'default' | 'warning' | 'success' }>
    insights: Array<{ number: string; title: string; insight: string }>
    quotes: string[]
    actionPlan: Array<{ number: string; title: string; time: string; steps: string[] }>
  }

  nextLive?: {
    theme: string
    dayOfWeek: string
    time: string
  }
}

// ============================================
// LIVE #043 - 27/11/2025
// ============================================

export const liveData: LiveData = {
  meta: {
    number: 43,
    title: "Claude Opus 4.5 não importa sem isso!",
    date: "2025-11-27",
    duration: "~2h",
    theme: "Projetos Originais com IA",
    youtubeUrl: "https://www.youtube.com/watch?v=RzlQUe-ETvI",
    context: "Direto da Bahia, no sol, durante evento de mentorados"
  },

  tldr: {
    oneSentence: "O segredo para criar sistemas incríveis com IA não está na ferramenta, mas na sua capacidade de expressar claramente o que você quer.",
    keyTakeaways: [
      "Tecnologia é commodity - o diferencial é o processo de expressão",
      "90% do trabalho humano deve acontecer ANTES de envolver a IA",
      "Clareza de Input/Output é mais importante que conhecimento técnico",
      "Puxadinhos nascem da urgência; mansões nascem do planejamento",
      "Repertório humano + clareza de dor = projetos que vendem"
    ],
    whoIsFor: [
      "Empresários que querem criar sistemas próprios",
      "Pessoas com repertório/experiência em algum nicho",
      "Quem já se frustrou tentando criar com IA",
      "Jovens dispostos a errar rápido e aprender"
    ],
    notFor: [
      "Quem quer resultado sem fazer o processo",
      "Quem não está disposto a ler pesquisas"
    ]
  },

  keyIdeas: [
    {
      emoji: "🎯",
      title: "O Gap Está Diminuindo",
      description: "A distância entre quem tem a dor e quem executa a solução está cada vez menor. Você não precisa mais de milhões ou equipe de devs.",
      highlight: true
    },
    {
      emoji: "🏠",
      title: "Puxadinho vs Mansão",
      description: "A maioria cria Frankensteins digitais sem perceber. Os canos estão por dentro das paredes - você só vê a interface bonita até quebrar."
    },
    {
      emoji: "🧠",
      title: "Mamífero, Não Robô",
      description: "O briefing tem que vir do seu sistema límbico - emoção, empatia, dor real. A IA não tem isso. Você tem."
    },
    {
      emoji: "📖",
      title: "Ler, Não Resumir",
      description: "Quando a IA gera 43 páginas de pesquisa, você LEIA tudo. Os 'wows' que ficam na sua cabeça é que importam."
    },
    {
      emoji: "⚡",
      title: "Urgência é Inimigo",
      description: "A causa raiz do puxadinho é a necessidade urgente. Resista. O tempo no briefing economiza 10x na execução."
    },
    {
      emoji: "🔄",
      title: "Progressão de Responsabilidade",
      description: "Comece 90% humano, termine 10% humano. A IA assume progressivamente - nunca antes de você ter clareza."
    }
  ],

  summary: {
    problem: "A maioria cria 'puxadinhos' com IA — soluções remendadas, cheias de código sujo, sem estrutura, que nunca ficam como querem. Ciclos de 20+ interações frustrantes onde a IA 'deduz' e 'inventa' funcionalidades.",
    solution: "O framework 'Projetos Originais' inverte a lógica: em vez de jogar uma ideia vaga para a IA, você primeiro EXPRESSA sua visão de forma estruturada (Brief → Detalhamento → Etapas → Tarefas). 90% do trabalho humano acontece no início.",
    transformation: "Criar 'mansões' em vez de 'puxadinhos' — sistemas completos, bem documentados, modulares e que funcionam como planejado. Pessoas sem saber programar criaram sistemas com 600+ clientes.",
    keyQuote: "Clareza de expressão supera qualquer ferramenta de IA."
  },

  metaphor: {
    before: {
      title: "Puxadinho Digital",
      items: [
        "20+ interações com frustração",
        '"Vai assim mesmo, já funciona"',
        "Código espaguete impossível de manter",
        "Cada correção quebra três coisas",
        "IA deduz e inventa funcionalidades"
      ]
    },
    after: {
      title: "Mansão Planejada",
      items: [
        "~5 interações com satisfação",
        '"Ficou melhor que imaginei"',
        "Estrutura modular e documentada",
        "Acesso a todos os componentes",
        "Você decide, IA executa"
      ]
    }
  },

  pillars: [
    { number: "01", title: "Input & Output Claros", description: "Certeza absoluta do que entra e do que sai. O processo intermediário pode ser desconhecido.", consequence: "Ciclos infinitos de iteração, frustração, puxadinho" },
    { number: "02", title: "Repertório Humano", description: "Experiência acumulada, vivências, conhecimento de mercado, empatia com dores reais.", consequence: "Projetos genéricos sem diferencial competitivo" },
    { number: "03", title: "Expressão Estruturada", description: "Processo de tirar da cabeça de forma organizada: Brief → Detalhamento → Etapas → Tarefas.", consequence: "A IA deduz, inventa, você fica corrigindo" },
    { number: "04", title: "Progressão de Responsabilidade", description: "Esforço humano diminui progressivamente (90% → 70% → 40% → 10%) enquanto IA aumenta.", consequence: "Delegar cedo demais = puxadinho garantido" },
    { number: "05", title: "Modularidade", description: "Projetos estruturados em partes independentes, documentadas, modificáveis isoladamente.", consequence: "Código espaguete onde consertar uma coisa quebra três" }
  ],

  process: [
    { phase: "FASE 1", title: "Sessão Descarrego", humanPercent: "100%", time: "30-120 min", description: "Tirar da cabeça sem IA. Papel e caneta." },
    { phase: "FASE 2", title: "Quality Assurance", humanPercent: "90%", time: "15-30 min", description: "Identificar pontos cegos com ajuda de IA" },
    { phase: "FASE 3", title: "Pesquisas", humanPercent: "100%", time: "1-4 horas", description: "LER tudo (não resumir!). Capturar 'wows'" },
    { phase: "FASE 4", title: "Briefing", humanPercent: "90%", time: "30-60 min", description: "Criar documento estruturado com seus inputs" },
    { phase: "FASE 5", title: "Detalhamento", humanPercent: "70%", time: "Variável", description: "Funcionalidades, comportamentos, design" },
    { phase: "FASE 6", title: "Tarefas", humanPercent: "10%", time: "Variável", description: "IA executa, você aprova" }
  ],

  publicInsights: [
    { title: "Tecnologia é Commodity", description: "A ferramenta (Claude, Gemini, Grok) importa cada vez menos. O diferencial é o processo de expressão e o repertório humano." },
    { title: "90% do Trabalho no Início", description: "A maior parte do esforço cognitivo humano acontece ANTES de envolver a IA. Investir no briefing, não na execução." },
    { title: "O Meio Pode Ser Desconhecido", description: "Você precisa saber Input e Output. O 'como' técnico a IA resolve. Isso simplifica drasticamente o planejamento." }
  ],

  vault: {
    password: "MANSAO8888",

    templates: [
      {
        title: "Template: Sessão Descarrego",
        content: `DATA: ___/___/______
PROJETO: _________________________

1. QUAL É A DOR/DESEJO?
[Escreva sem filtro o que quer resolver]
_________________________________

2. POR QUE ISSO IMPORTA?
[Por que você se importa com isso?]
_________________________________

3. COMO SERIA O CENÁRIO IDEAL?
[Descreva o "sonho" funcionando]
_________________________________

4. O QUE JÁ EXISTE DE SIMILAR?
[Referências, concorrentes, inspirações]
_________________________________

5. O QUE EU JÁ SEI SOBRE ISSO?
[Seu repertório atual]
_________________________________

6. O QUE EU NÃO SEI?
[Lacunas de conhecimento]
_________________________________

7. IDEIAS ALEATÓRIAS
[Tudo que vier à cabeça]
_________________________________`
      },
      {
        title: "Template: Definição de Input/Output",
        content: `PROJETO: _________________________

INPUT (O que entra):
┌────────────────────────────────────────┐
│ Dados:                                 │
│ Fonte:                                 │
│ Formato:                               │
│ Frequência:                            │
└────────────────────────────────────────┘

OUTPUT (O que sai):
┌────────────────────────────────────────┐
│ Resultado esperado:                    │
│ Formato:                               │
│ Para quem:                             │
│ Onde entrega:                          │
└────────────────────────────────────────┘

PROCESSO (O meio):
┌────────────────────────────────────────┐
│ [Pode ser desconhecido - IA resolve]   │
└────────────────────────────────────────┘`
      }
    ],

    scripts: [
      { title: "Pedindo Análise de Pontos Cegos", prompt: "Analise este briefing do meu projeto e me diga: quais são os pontos cegos? Onde vai dar problema? O que eu não estou vendo? Que pesquisas eu deveria fazer antes de prosseguir?" },
      { title: "Gerando Pesquisas", prompt: "Com base nos pontos cegos identificados, gere pesquisas detalhadas sobre cada um. Quero entender: [concorrência/mercado/tecnologia/UX/etc.]. Seja abrangente." },
      { title: "Criando Briefing", prompt: "Quero criar um briefing estruturado para meu projeto. Aqui estão meus inputs da sessão descarrego e os insights que tive das pesquisas: [COLAR INPUTS]. Crie um briefing que capture minha visão de forma clara e completa." }
    ],

    checklists: [
      {
        title: "Antes de Jogar para IA Executar",
        items: [
          "Fiz Sessão Descarrego completa (100% humano)?",
          "Identifiquei pontos cegos com Q.A.?",
          "Li TODAS as pesquisas geradas (não resumi)?",
          "Capturei apenas os 'wows' (insights genuínos)?",
          "Criei briefing com meus inputs (não da IA)?",
          "Aprovei o briefing como 'representa minha visão'?",
          "Sei se é TAREFA ou PROJETO?",
          "Se projeto: fiz Detalhamento?"
        ],
        variant: "default"
      },
      {
        title: "Sinais de Puxadinho em Formação",
        items: [
          "Estou na interação 10+ e não está como quero",
          "Disse 'vai assim mesmo' em algum momento",
          "Não tenho documentação do que foi feito",
          "Não sei explicar como o sistema funciona",
          "Cada correção quebra outra coisa",
          "A IA está 'deduzindo' funcionalidades"
        ],
        variant: "warning"
      }
    ],

    insights: [
      { number: "01", title: "Quanto Melhor a IA, Menos Ela Importa", insight: "Com processo ruim, todas as IAs dão resultado ruim. Com processo bom, até Gemini gratuito funciona." },
      { number: "02", title: "Escrever à Mão é Mais Eficiente", insight: "Escrever manualmente ativa mecanismos cerebrais que geram mais insights do que digitar." },
      { number: "03", title: "Não Usar IA no Início é o Segredo", insight: "Briefing 90% humano. IA cedo demais desvia você da sua visão original." },
      { number: "04", title: "Jogar Fora Código Economiza Tempo", insight: "Refatorar puxadinho dá mais dor de cabeça que recomeçar. Aproveite aprendizados, não código." },
      { number: "05", title: "Ler 43 Páginas é Mais Rápido que Resumir", insight: "Resumo perde os 'wows' que só você identifica. Leitura integral é obrigatória." },
      { number: "06", title: "Menos Interações = Mais Trabalho Inicial", insight: "Cada iteração é sinal de briefing ruim. Bom briefing = ~5 interações." },
      { number: "07", title: "Urgência é o Inimigo", insight: "'Preciso para ontem' é a causa raiz do puxadinho. Resista à urgência, faça o processo." },
      { number: "08", title: "Não Saber Programar Pode Ser Vantagem", insight: "Pessoas muito técnicas ficam presas no tecnicismo. Foque em clareza de dor." },
      { number: "09", title: "Projetos Originais > Soluções Genéricas", insight: "O dinheiro está em projetos verticais que atendem necessidades específicas do seu nicho." },
      { number: "10", title: "O Meio Pode Ser Desconhecido", insight: "Basta clareza de Input e Output. IA resolve o 'como' técnico." }
    ],

    quotes: [
      "O que importa hoje não é o teu conhecimento técnico. O que importa é você ter clareza do input e clareza do output.",
      "Tecnologia é cada vez mais commodity.",
      "A gente não vai conseguir construir uma mansão sem repertório.",
      "Dá muito mais dor de cabeça refatorar algo que nasceu torto do que fazer do zero.",
      "Se você não quer ler, vai pro puxadinho porque o teu lugar é lá.",
      "O briefing tem que vir do mamífero, não do robô.",
      "Nós precisamos ser mais lembrados do que ensinados."
    ],

    actionPlan: [
      {
        number: "1",
        title: "Sessão Descarrego Mini",
        time: "30 min",
        steps: ["Pegue papel e caneta AGORA", "Escolha UMA dor que você quer resolver", "Escreva tudo que vier à mente", "Pare quando sentir 'escrevi o principal'"]
      },
      {
        number: "2",
        title: "Definição de Input/Output",
        time: "10 min",
        steps: ["Para o projeto da Ação 1, responda:", "INPUT: O que vai entrar?", "OUTPUT: O que vai sair?", "Uma frase cada, não mais"]
      },
      {
        number: "3",
        title: "Classificação",
        time: "5 min",
        steps: ["É TAREFA (1 ação, 1 agente)?", "Ou PROJETO (múltiplas tarefas)?", "Se TAREFA: pode testar com IA amanhã", "Se PROJETO: precisa de detalhamento"]
      }
    ]
  },

  nextLive: {
    theme: "Detalhamento, Etapas e Tarefas (continuação)",
    dayOfWeek: "Quinta-feira",
    time: "19h"
  }
}
