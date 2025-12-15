'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

type FAQItem = {
  pergunta: string;
  resposta: string;
};

type TemaDuvida = {
  tema: string;
  duvidas: FAQItem[];
};

export default function FAQ() {
    const [mobileOpen, setMobileOpen] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const duvidas: TemaDuvida[] = [
  {
    "tema": "Orçamento",
    "duvidas": [
      {
        "pergunta": "O que é o orçamento público das universidades federais?",
        "resposta": "É o plano formal de receitas e despesas da universidade para um exercício financeiro, derivado da LOA, que traduz em valores as prioridades definidas nos instrumentos de planejamento institucional, como o PDI."
      },
      {
        "pergunta": "Qual a importância do planejamento orçamentário para a gestão universitária?",
        "resposta": "O planejamento orçamentário permite relacionar recursos às metas estratégicas, reduzindo desperdícios, orientando escolhas e garantindo maior eficiência na aplicação dos recursos públicos."
      },
      {
        "pergunta": "Como são definidas as prioridades na alocação de recursos?",
        "resposta": "As prioridades são definidas a partir do PDI, detalhadas pelos PDUs das unidades e consolidadas no Plano de Gestão Orçamentária, que distribui os valores entre ações conforme as diretrizes estratégicas aprovadas."
      },
      {
        "pergunta": "Quais os tipos de ações orçamentárias mais utilizadas nas universidades e o que pode ser executado em cada uma?",
        "resposta": "Em geral, utilizam-se ações ligadas a custeio, investimentos e benefícios a servidores, viabilizando despesas de funcionamento, aquisição de bens, obras, capacitação e demais gastos necessários ao cumprimento da missão institucional."
      }
    ]
  },
  {
    "tema": "Planejamento",
    "duvidas": [
      {
        "pergunta": "O que é planejamento no contexto das universidades públicas?",
        "resposta": "É o processo de definir objetivos, metas e recursos necessários para orientar a atuação da universidade, assegurando coerência entre ações, decisões e a estratégia institucional."
      },
      {
        "pergunta": "Por que o planejamento é importante para a gestão universitária?",
        "resposta": "Porque organiza esforços, evita iniciativas isoladas, antecipa necessidades e facilita o alcance de resultados alinhados ao PDI, além de apoiar a integração entre setores e a adaptação de novos servidores."
      },
      {
        "pergunta": "Quais são os níveis de planejamento dentro de uma universidade?",
        "resposta": "Costumam-se adotar três níveis: estratégico (como o PDI, de longo prazo), tático (planos de gestão e PDUs) e operacional (planos setoriais e anuais, como o PGO)."
      },
      {
        "pergunta": "O que é o Diagnóstico Situacional?",
        "resposta": "É o levantamento estruturado de problemas, necessidades, processos, projetos, recursos e competências de um setor, que descreve a situação atual e serve de base para propor intervenções."
      },
      {
        "pergunta": "Por que o diagnóstico é fundamental antes de planejar?",
        "resposta": "Porque oferece evidências sobre lacunas, capacidades e restrições, evitando planos superficiais e permitindo definir prioridades, prazos e alocação de recursos de forma realista."
      },
      {
        "pergunta": "O que deve ser mapeado no diagnóstico?",
        "resposta": "Devem ser identificadas funções dos setores, projetos, serviços, rotinas de processos, distribuição da equipe, cargas de trabalho e fatores internos e externos analisados, por exemplo, via matriz SWOT."
      },
      {
        "pergunta": "Quais ferramentas ajudam a elaborar o diagnóstico?",
        "resposta": "São úteis organogramas, matrizes de responsabilidade, matriz SWOT, quadros Kanban, planilhas compartilhadas e soluções em nuvem institucional para consolidar informações."
      },
      {
        "pergunta": "Qual a diferença entre processos e projetos dentro do diagnóstico?",
        "resposta": "Projetos são temporários, com início e fim definidos, voltados a resultados únicos; processos são contínuos, padronizados e repetitivos, sustentando as rotinas da unidade."
      },
      {
        "pergunta": "Por que é importante distinguir processos de projetos?",
        "resposta": "A distinção facilita dimensionar a equipe, identificar sobrecargas, definir indicadores adequados e priorizar melhorias de forma mais precisa."
      },
      {
        "pergunta": "Por que mapear as atividades \"que ninguém vê\"?",
        "resposta": "Porque tarefas informais, urgências, reuniões excessivas e retrabalho consomem tempo e afetam o desempenho, e só podem ser geridas se estiverem visíveis no diagnóstico."
      },
      {
        "pergunta": "O que é a Matriz SWOT e para que serve?",
        "resposta": "É uma ferramenta que organiza forças, fraquezas, oportunidades e ameaças do setor, auxiliando a leitura integrada de contexto interno e externo."
      },
      {
        "pergunta": "Como usar a Matriz SWOT para o planejamento setorial?",
        "resposta": "Ela serve como insumo para definir metas e ações, explorando pontos fortes, corrigindo fragilidades, aproveitando oportunidades e mitigando riscos identificados."
      },
      {
        "pergunta": "O que caracteriza o Planejamento Operacional?",
        "resposta": "Trata-se do plano de curto prazo do setor, com atividades, responsáveis, prazos e recursos definidos, alinhado aos níveis estratégico e tático e voltado a reduzir riscos e antecipar problemas."
      },
      {
        "pergunta": "Como iniciar a elaboração do Planejamento Operacional do setor?",
        "resposta": "O primeiro passo é atualizar o diagnóstico situacional, mapeando pessoas, competências, serviços, processos e projetos, para então priorizar ações e metas."
      },
      {
        "pergunta": "O que é o ciclo PDCA e como aplicá-lo no planejamento?",
        "resposta": "O PDCA é um ciclo de melhoria contínua com etapas de planejar, executar, checar e agir, que orienta a definição de metas, implementação, monitoramento de resultados e ajustes."
      },
      {
        "pergunta": "O que é a Matriz GUT e para que serve?",
        "resposta": "É um instrumento de priorização que avalia problemas segundo gravidade, urgência e tendência, gerando uma pontuação que indica o que tratar primeiro."
      },
      {
        "pergunta": "Como aplicar a Matriz GUT no diagnóstico e no planejamento?",
        "resposta": "Lista-se os problemas, atribuem-se notas a G, U e T, multiplica-se os valores e ordenam-se os itens para orientar a definição de ações prioritárias."
      },
      {
        "pergunta": "Por que monitorar as ações do planejamento?",
        "resposta": "O monitoramento permite verificar o cumprimento de metas, identificar desvios a tempo e ajustar o plano, fortalecendo a cultura de gestão por resultados."
      },
      {
        "pergunta": "O que deve ser monitorado dentro do Planejamento Operacional?",
        "resposta": "Podem ser acompanhados programas, projetos, atividades, entregas, indicadores e demandas urgentes, organizados de forma a tornar visível o avanço do plano."
      },
      {
        "pergunta": "Como deve ser conduzido o monitoramento?",
        "resposta": "De modo simples e objetivo, com responsabilidades e prazos claros, reuniões curtas e indicadores acessíveis, comparando o planejado com o realizado."
      },
      {
        "pergunta": "Por que é necessário fazer reuniões periódicas de acompanhamento?",
        "resposta": "Porque ajudam a manter foco nas prioridades, revisar o andamento das ações, ajustar rotas e melhorar a comunicação interna."
      },
      {
        "pergunta": "O que fazer quando uma ação do planejamento não puder ser executada?",
        "resposta": "É preciso replanejar, revisando prazos, recursos e justificativas, registrando as mudanças e preservando o alinhamento com os objetivos institucionais."
      },
      {
        "pergunta": "Por que mapear a alocação de pessoas no setor?",
        "resposta": "O mapeamento permite enxergar sobrecargas, planejar substituições, férias e licenças, identificar necessidades de capacitação e avaliar se o setor está orientado a processos, projetos ou ambos."
      },
      {
        "pergunta": "Quais ferramentas podem ser usadas no controle, monitoramento e alocação de tarefas?",
        "resposta": "Podem ser usados quadros Kanban físicos ou digitais, planilhas, serviços de nuvem e softwares como Trello ou OpenProject, escolhidos conforme a maturidade do setor."
      },
      {
        "pergunta": "Para que serve o Checklist Operacional?",
        "resposta": "Serve para organizar rotinas, orientar servidores nas tarefas recorrentes e facilitar o acompanhamento de execuções em reuniões e no dia a dia."
      },
      {
        "pergunta": "Qual a diferença entre planejamento e gerenciamento do planejamento?",
        "resposta": "Planejar é definir o que será feito; gerenciar o planejamento é acompanhar, avaliar e ajustar o plano continuamente, evitando que ele se torne apenas um documento arquivado."
      }
    ]
  },
  {
    "tema": "Gestão de Processos",
    "duvidas": [
      {
        "pergunta": "O que é gestão de processos no contexto universitário?",
        "resposta": "É a abordagem de conhecer, mapear, padronizar e monitorar processos institucionais para elevar controle, eficiência e qualidade na prestação de serviços pelas universidades."
      },
      {
        "pergunta": "O que são processos organizacionais?",
        "resposta": "São conjuntos estruturados de atividades interligadas que transformam insumos em resultados, gerando valor para usuários internos ou externos."
      },
      {
        "pergunta": "Quais são os elementos fundamentais de um processo?",
        "resposta": "Entradas, controles, recursos, processamento e saídas, compondo o fluxo desde a demanda inicial até o produto ou serviço gerado."
      },
      {
        "pergunta": "Por que mapear processos?",
        "resposta": "Para identificar gargalos e retrabalho, clarificar responsabilidades, padronizar rotinas, reduzir erros, aumentar transparência e otimizar tempo."
      },
      {
        "pergunta": "Qual a diferença entre processos e projetos na universidade?",
        "resposta": "Processos sustentam atividades contínuas e recorrentes; projetos são temporários, com entregas únicas e prazo definido, e exigem acompanhamento de escopo, tempo e custo."
      },
      {
        "pergunta": "Quais práticas compõem uma boa gestão de processos?",
        "resposta": "Incluem desenhar a arquitetura de processos, mapear fluxos, priorizar o que será tratado, modelar melhorias, implementar mudanças e controlar o desempenho dos processos."
      },
      {
        "pergunta": "Como diferenciar o acompanhamento de processos do acompanhamento de projetos?",
        "resposta": "Em processos, o foco está no nível de serviço e padronização; em projetos, o foco recai nas entregas previstas, seus prazos, custos e qualidade."
      },
      {
        "pergunta": "Qual é o maior desafio da gestão universitária em relação a processos?",
        "resposta": "Equilibrar simultaneamente a gestão de processos permanentes com a execução de múltiplos projetos, garantindo qualidade em ambos."
      },
      {
        "pergunta": "Como realizar o mapeamento de fluxo de um processo?",
        "resposta": "Definem-se objetivo, entradas, saídas, responsáveis, recursos e riscos do processo, podendo-se usar ferramentas de modelagem como Bizagi ou HEFLO."
      },
      {
        "pergunta": "Como a gestão de pessoas apoia o gerenciamento de processos?",
        "resposta": "Ao diagnosticar competências da equipe, alocar servidores adequadamente, investir em capacitações e estimular cultura de melhoria contínua."
      },
      {
        "pergunta": "O que é uma \"entrega\" dentro de um processo?",
        "resposta": "É o produto, serviço ou resultado verificável que representa o que o setor efetivamente entrega ao finalizar uma etapa ou processo."
      },
      {
        "pergunta": "Quais são exemplos de produtos (entregas) na universidade?",
        "resposta": "Formação de profissionais, processos concluídos, eventos realizados, sistemas implantados, relatórios produzidos, projetos finalizados e manutenção executada."
      },
      {
        "pergunta": "Como identificar produtos no meu setor?",
        "resposta": "Ao mapear as ações principais, acompanhar o andamento de cada uma e esclarecer para a equipe quais resultados finais são esperados."
      },
      {
        "pergunta": "Como determinar os principais processos do setor?",
        "resposta": "Selecionam-se os processos que mais impactam resultados institucionais e se relacionam diretamente às competências e funções da unidade."
      },
      {
        "pergunta": "Por que é importante manter os processos mapeados e atualizados?",
        "resposta": "Para assegurar alinhamento entre setores, continuidade mesmo com mudanças de pessoal, menos ruídos e decisões mais ágeis."
      },
      {
        "pergunta": "O que significa inovar na gestão de processos?",
        "resposta": "É redesenhar formas de trabalho para eliminar desperdícios e retrabalho e criar fluxos mais eficientes, com ou sem uso de novas tecnologias."
      }
    ]
  },
  {
    "tema": "Liderança e Tomada de Decisão no Ensino Superior",
    "duvidas": [
      {
        "pergunta": "O que caracteriza a liderança nas universidades federais?",
        "resposta": "É uma liderança que combina domínio técnico, visão estratégica, gestão de pessoas e capacidade de decidir em contextos colegiados, complexos e com restrições de recursos."
      },
      {
        "pergunta": "Por que o contexto universitário torna a liderança mais desafiadora?",
        "resposta": "Porque envolve múltiplas carreiras, interesses acadêmicos e administrativos, forte normatização e processos decisórios compartilhados."
      },
      {
        "pergunta": "Quais são os elementos-chave da liderança universitária?",
        "resposta": "Compreensão do contexto institucional, articulação de decisões colegiadas e observância dos princípios da administração pública."
      },
      {
        "pergunta": "Quais são os pilares da gestão eficaz para líderes universitários?",
        "resposta": "Foco em resultados com bem-estar da equipe, visão de longo prazo e decisões baseadas em dados e informações confiáveis."
      },
      {
        "pergunta": "Quais competências gerenciais são essenciais ao líder público na gestão universitária?",
        "resposta": "Competências em estratégia, resultados e gestão de pessoas, como visão de futuro, inovação, comunicação estratégica, gestão de crises, engajamento e autodesenvolvimento."
      },
      {
        "pergunta": "Por que a comunicação interna é um fator crítico de sucesso (ou fracasso) na gestão universitária?",
        "resposta": "Porque falhas de comunicação geram retrabalho, conflitos e ruídos entre setores, enquanto fluxos claros e informações acessíveis sustentam a eficiência."
      },
      {
        "pergunta": "Quais são as principais boas práticas para melhorar a comunicação interna?",
        "resposta": "Realizar reuniões objetivas com pauta definida, padronizar informações, divulgar relatórios de acompanhamento e tornar atribuições bem explicitadas."
      },
      {
        "pergunta": "Por que a gestão do tempo é indispensável para líderes universitários?",
        "resposta": "O gestor precisa priorizar o que é relevante, delegar adequadamente e reservar tempo para reflexão estratégica, evitando atuar apenas de forma reativa."
      },
      {
        "pergunta": "Quais ferramentas auxiliam na gestão do tempo dentro das Ifes?",
        "resposta": "Matrizes de urgência e importância, 5W2H e quadros Kanban ajudam a organizar tarefas, prazos e responsabilidades."
      },
      {
        "pergunta": "Quais são os tipos de conflitos mais comuns nas universidades?",
        "resposta": "Diferenças de expectativas entre perfis de servidores, divergências entre prioridades acadêmicas e administrativas e sobrecargas decorrentes de funções mal definidas."
      },
      {
        "pergunta": "Como o gestor pode atuar na resolução de conflitos?",
        "resposta": "Identificando causas reais, ouvindo as partes, mediando soluções conjuntas e formalizando acordos com acompanhamento posterior."
      },
      {
        "pergunta": "Qual é o papel da liderança estratégica na tomada de decisão?",
        "resposta": "Conduzir a instituição em direção aos objetivos definidos, estabelecendo prioridades e mediando interesses à luz do contexto institucional."
      },
      {
        "pergunta": "O que um gestor deve fazer nos primeiros 30 dias no cargo?",
        "resposta": "Mapear equipe, processos e documentos, levantar demandas, organizar rotinas de comunicação, planejar ações para 90 dias e definir indicadores básicos."
      },
      {
        "pergunta": "Por que a articulação entre grupos é essencial para liderar universidades?",
        "resposta": "Porque a boa gestão depende da integração entre docentes, técnicos, estudantes, conselhos e setores, reduzindo tensões e apoiando o funcionamento institucional."
      }
    ]
  },
  {
    "tema": "Gestão de Pessoas",
    "duvidas": [
      {
        "pergunta": "O que é Gestão de Pessoas (GP) no contexto das universidades públicas?",
        "resposta": "É o conjunto de práticas que desenvolvem, motivam e apoiam servidores, alinhando interesses individuais aos objetivos institucionais e valorizando clima, capacitação e liderança."
      },
      {
        "pergunta": "Quais são os principais desafios da Gestão de Pessoas nas Ifes?",
        "resposta": "Incluem burocracia excessiva, restrições orçamentárias, dificuldades de atrair e reter talentos, questões de saúde mental e múltiplas carreiras e regimes de trabalho."
      },
      {
        "pergunta": "Quais são as principais responsabilidades de um gestor universitário na área de GP?",
        "resposta": "Promover bem-estar, mediar conflitos, alinhar a equipe à estratégia, estimular liderança transformacional e simplificar processos."
      },
      {
        "pergunta": "Quais legislações são essenciais para a Gestão de Pessoas nas universidades públicas?",
        "resposta": "Destacam-se a Lei 8.112, o Decreto 9.991 sobre desenvolvimento de pessoas, normas de PGD, teletrabalho, carreira docente e TAE e regulamentos internos."
      },
      {
        "pergunta": "Quais modelos de trabalho existem nas universidades federais?",
        "resposta": "São adotados os modelos presencial, teletrabalho e híbrido, exigindo liderança adequada em qualquer formato."
      },
      {
        "pergunta": "Quais boas práticas de gestão são recomendadas no teletrabalho?",
        "resposta": "Liderança empática, reconhecimento, menor controle excessivo, autonomia responsável, preservação do sentimento de equipe e equilíbrio entre desempenho e saúde."
      },
      {
        "pergunta": "O que significa gestão por competências?",
        "resposta": "É gerir pessoas com base na combinação de conhecimentos, habilidades e atitudes, orientando seleção, capacitação e avaliação."
      },
      {
        "pergunta": "Quais competências a ENAP considera essenciais para gestores públicos?",
        "resposta": "Visão de futuro, inovação, comunicação estratégica, gestão de crises, foco em resultados, coordenação em rede, engajamento e autodesenvolvimento."
      },
      {
        "pergunta": "Por que a capacitação contínua é indispensável para gestores nas Ifes?",
        "resposta": "Porque reduz lacunas de competência, melhora entregas e garante alinhamento ao que a PNDP estabelece para o desenvolvimento de pessoas."
      },
      {
        "pergunta": "Quais tipos de capacitação são mais relevantes para gestores universitários?",
        "resposta": "Capacitações alinhadas à estratégia, trilhas de inovação, formação em planejamento, processos, projetos, orçamento e gestão de equipes em diferentes modalidades."
      },
      {
        "pergunta": "Como a Gestão de Pessoas contribui para o bem-estar e saúde ocupacional?",
        "resposta": "Ao criar ambientes psicologicamente seguros, promover ações de qualidade de vida, escuta ativa e combate ao assédio."
      },
      {
        "pergunta": "O que é dimensionamento de pessoal e por que é importante nas universidades?",
        "resposta": "É o estudo que estima o quantitativo adequado de servidores para atender às demandas, considerando contexto, força de trabalho e carga de processos."
      },
      {
        "pergunta": "O que o dimensionamento permite ao gestor?",
        "resposta": "Permite identificar gargalos, priorizar setores críticos, racionalizar equipes, justificar novos postos e alinhar equipes ao PDI e às competências."
      },
      {
        "pergunta": "Por que a cultura organizacional é essencial para a Gestão de Pessoas?",
        "resposta": "Porque valores, normas e práticas influenciam motivação, clima, desempenho, inovação e retenção de servidores."
      },
      {
        "pergunta": "Como a cultura organizacional impacta inovação e desempenho?",
        "resposta": "Culturas abertas à mudança tendem a fortalecer compartilhamento de conhecimento, habilidades interpessoais, clima positivo e produtividade."
      },
      {
        "pergunta": "Por que Gestão de Pessoas é estratégica nas Ifes?",
        "resposta": "Porque conecta desempenho das equipes à eficiência institucional, liga liderança a resultados claros e alinha desenvolvimento e dimensionamento ao alcance da missão."
      }
    ]
  },
  {
    "tema": "Inovação nas IFES",
    "duvidas": [
      {
        "pergunta": "O que significa inovação na gestão universitária?",
        "resposta": "É introduzir novos ou aprimorados produtos, serviços, processos, métodos de trabalho ou práticas organizacionais que aumentem a eficiência e o valor gerado pela universidade."
      },
      {
        "pergunta": "Por que inovar é importante nas Ifes?",
        "resposta": "Porque ajuda a enfrentar restrições orçamentárias, burocracia, demandas crescentes e marcos legais rígidos, melhorando serviços e a eficiência institucional."
      },
      {
        "pergunta": "Quais são as características específicas da gestão universitária que influenciam a inovação?",
        "resposta": "Entre elas estão a necessidade de seguir legislações federais, a sobreposição de processos administrativos e acadêmicos, a decisão colegiada e um ambiente político e cultural complexo."
      },
      {
        "pergunta": "Quais são os principais desafios da inovação nas universidades?",
        "resposta": "Processos desconectados, sistemas pouco integrados, burocracia, resistência cultural, carência de formação em inovação e limitação de recursos."
      },
      {
        "pergunta": "Onde a inovação aparece no cotidiano do gestor universitário?",
        "resposta": "Em melhorias na gestão acadêmica, organizacional, de pessoas, nos processos digitais e na atualização de normas e regulamentos."
      },
      {
        "pergunta": "Como implementar a inovação na gestão universitária?",
        "resposta": "Por meio de cultura de melhoria contínua, uso de ferramentas como PDCA, 5W2H, mapeamento de processos e práticas de transparência."
      },
      {
        "pergunta": "O que é uma cultura de inovação nas IFES?",
        "resposta": "É um ambiente em que lideranças e equipes valorizam, estimulam e reconhecem iniciativas inovadoras e colaborativas entre setores."
      },
      {
        "pergunta": "Que práticas podem fortalecer a cultura de inovação dentro da universidade?",
        "resposta": "Criar painéis de boas práticas, promover trocas entre setores, incentivar soluções simples do dia a dia e reconhecer publicamente iniciativas bem-sucedidas."
      },
      {
        "pergunta": "Quais são as características de um líder inovador?",
        "resposta": "Considera e reconhece a equipe, decide com responsabilidade, é flexível a mudanças e cria conexões entre pessoas e setores."
      },
      {
        "pergunta": "A inovação sempre exige tecnologia?",
        "resposta": "Não; muitas inovações derivam de ajustes organizacionais, mudanças de rotina e novas formas de trabalho, mesmo com baixa tecnologia."
      },
      {
        "pergunta": "Por que a resistência cultural é um dos maiores obstáculos à inovação?",
        "resposta": "Porque práticas consolidadas, normas rígidas e receios de mudança podem gerar desconfiança e medo de perda de controle, limitando experimentações."
      }
    ]
  }];


  // const faqs = [
  //   {
  //     question: "Como funciona a trilha de aprendizagem da InGUP360?",
  //     answer: "A trilha está organizada em 3 temas principais: Planejamento Estratégico, Capacitação e Competências Gerenciais. Cada tema conta com conteúdos especializados, ferramentas práticas e materiais complementares que você pode aplicar diretamente na sua gestão universitária."
  //   },
  //   {
  //     question: "Quais materiais estão disponíveis para download?",
  //     answer: "Oferecemos planilhas de planejamento, modelos de controle de aulas de campo, relatórios de acompanhamento orçamentário e diversas ferramentas de gestão. Todos os materiais são desenvolvidos especificamente para o contexto universitário público."
  //   },
  //   {
  //     question: "Como posso acessar as ferramentas complementares?",
  //     answer: "As ferramentas estão integradas na plataforma e podem ser baixadas através dos botões específicos em cada seção. Você encontrará modelos práticos que podem ser customizados para sua instituição."
  //   },
  //   {
  //     question: "A plataforma é específica para universidades públicas?",
  //     answer: "Sim, todo o conteúdo foi desenvolvido considerando as particularidades da gestão universitária pública, incluindo aspectos orçamentários, regulamentações específicas e desafios únicos do setor público de ensino superior."
  //   },
  //   {
  //     question: "Como posso aplicar os conhecimentos no meu dia a dia?",
  //     answer: "Cada tema da trilha vem acompanhado de casos práticos, ferramentas aplicáveis e exemplos reais. O conteúdo foi estruturado para que você possa implementar as soluções imediatamente na sua gestão."
  //   },
  //   {
  //     question: "Há suporte disponível durante o uso da plataforma?",
  //     answer: "Sim, oferecemos suporte completo através da nossa comunidade de gestores e canais de atendimento. Você também terá acesso à documentação completa e materiais de apoio."
  //   },
  //   {
  //     question: "Os materiais são atualizados regularmente?",
  //     answer: "Sim, nossos conteúdos e ferramentas são constantemente atualizados para refletir as melhores práticas e mudanças no cenário da gestão universitária pública."
  //   },
  //   {
  //     question: "Posso compartilhar os materiais com minha equipe?",
  //     answer: "Sim, os materiais podem ser compartilhados dentro da sua instituição para uso interno. Isso facilita a implementação das práticas de gestão em toda a sua equipe."
  //   },
  //   {
  //     question: "Como faço para me cadastrar na plataforma?",
  //     answer: "O cadastro é simples e gratuito. Basta clicar no botão 'Começar Agora' e preencher suas informações básicas. Em poucos minutos você terá acesso completo à plataforma."
  //   },
  //   {
  //     question: "Existe um período de teste gratuito?",
  //     answer: "Sim, oferecemos acesso completo por 30 dias para que você possa explorar todos os recursos e materiais disponíveis antes de tomar sua decisão."
  //   },
  //   {
  //     question: "A plataforma funciona em dispositivos móveis?",
  //     answer: "Sim, a InGUP360 é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores. Você pode acessar seus materiais a qualquer hora e lugar."
  //   },
  //   {
  //     question: "Como posso entrar em contato com o suporte?",
  //     answer: "Oferecemos múltiplos canais de suporte: chat online, e-mail e comunidade de usuários. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou necessidade."
  //   }
  // ];

  const [query, setQuery] = useState('');
  // null = sem busca ativa (mostrar lista completa); [] = busca ativa sem resultados; array com itens = resultados
  const [filtered, setFiltered] = useState<TemaDuvida[] | null>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const term = query.trim().toLowerCase();
    if (!term) {
      setFiltered(null);
      return;
    }

    const matches = duvidas
      .map((temaObj) => {
        const matchedDuvidas = temaObj.duvidas.filter((q) =>
          q.pergunta.toLowerCase().includes(term) || (q.resposta && q.resposta.toLowerCase().includes(term))
        );
        if (matchedDuvidas.length > 0) {
          return { ...temaObj, duvidas: matchedDuvidas };
        }
        return null;
      })
      .filter((t): t is TemaDuvida => t !== null);

    setFiltered(matches);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B365D] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-white font-['Open_Sans'] text-2xl font-bold">
              InGUP360
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-white hover:text-[#FFD166] transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link
                href="/plataforma"
                className="text-white  hover:text-[#FFD166]  cursor-pointer"
              >
                Plataforma
              </Link>
              <Link
                href="/sobre"
                className="text-white hover:text-[#FFD166] transition-colors cursor-pointer"
              >
                Sobre
              </Link>
              <Link
                href="/duvidas"
                className="text-[#FFD166] font-semibold transition-colors cursor-pointer"
              >
                Dúvidas
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="md:hidden text-white w-8 h-8 flex items-center justify-center"
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((s) => !s)}
              >
                <i className="ri-menu-line text-xl"></i>
              </button>

                {/* Mobile menu com animação (sempre renderizado, classes alternadas) */}
                <div
                  className={`md:hidden mt-3 absolute left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-[#7a91b1] rounded-lg p-4 shadow-lg z-50 transition-all duration-200 ease-out will-change-transform will-change-opacity ${
                    mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none border-transparent'
                  }`}
                  aria-hidden={!mobileOpen}
                >
                  <nav className="flex flex-col gap-3">
                    <Link href="/" onClick={() => setMobileOpen(false)} className="text-white hover:text-[#FFD166]">
                      Início
                    </Link>
                    <Link href="/plataforma" onClick={() => setMobileOpen(false)} className="text-white hover:text-[#FFD166] transition-colors">
                      Plataforma
                    </Link>
                    <Link href="/sobre" onClick={() => setMobileOpen(false)} className="text-white hover:text-[#FFD166]">
                      Sobre
                    </Link>
                    <Link href="/duvidas" onClick={() => setMobileOpen(false)} className="text-[#FFD166] font-semibold">
                      Dúvidas
                    </Link>
                  </nav>
                </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20students%20and%20faculty%20discussing%20questions%2C%20bright%20and%20welcoming%20academic%20environment%20with%20consultation%20areas%2C%20professional%20educational%20setting%20with%20people%20having%20conversations%2C%20natural%20lighting%2C%20contemporary%20architecture&width=1200&height=400&seq=faq-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/80"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dúvidas Frequentes
          </h1>
          <p className="text-xl md:text-2xl text-[#FFD166] mb-8 max-w-3xl mx-auto">
            Encontre respostas para as principais questões sobre a plataforma InGUP360
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Nosso objetivo é esclarecer todas as suas dúvidas para que você possa aproveitar ao máximo nossa plataforma de gestão universitária.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="max-w-4xl mx-auto space-y-4 mb-4">
            <p className="text-lg font-semibold text-[#1B365D]">
              Filtre suas dúvidas ou pesquise por temas específicos para encontrar respostas rapidamente.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <label htmlFor="faq-search" className="sr-only">Pesquisar dúvidas</label>

              <div className="relative w-full sm:flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <i className="ri-search-line text-lg"></i>
                </span>

                <input
                  id="faq-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Digite uma palavras-chave..."
                  aria-label="Pesquisar dúvidas"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F81C7]"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#4F81C7] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#4F81C7]/90 transition-colors whitespace-nowrap"
                >
                  Buscar
                </button>
                <button
                  type="button"
                  onClick={() => { setQuery(''); setFiltered(null); }}
                  className="bg-gray-200 text-[#1B365D] px-4 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  Limpar
                </button>
              </div>
            </form>
          </div>
                  
          {/* Lista de dúvidas: mostra a lista filtrada se houver busca ativa, caso contrário mostra todas */}
          <div className="max-w-4xl mx-auto space-y-4">
            {(filtered ?? duvidas).map((tema, index) => (
              <div key={index} className="bg-[#F4F4F4] border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1B365D] pr-4">{tema.tema}</h3>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i className={`ri-arrow-down-s-line text-xl text-[#4F81C7] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}></i>
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      {tema.duvidas.map((faq, subIndex) => (
                        <div key={subIndex} className="mb-6">
                          <h4 className="text-md font-semibold text-[#1B365D] mb-2">{faq.pergunta}</h4>
                          <p className="text-gray-700 leading-relaxed">{faq.resposta}</p>
                        </div>
                      ))}
                    
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mensagem quando busca ativa e sem resultados */}
            {Array.isArray(filtered) && filtered?.length === 0 && (
              <div className="text-center py-8 text-gray-600">
                Nenhuma dúvida encontrada para "{query}".
              </div>
            )}
          </div>

          <div className="text-center mt-16 bg-[#1B365D] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-question-line text-2xl text-[#1B365D]"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou a resposta?
            </h3>
            <p className="text-[#FFD166] mb-6">
              Nossa equipe de suporte está sempre pronta para ajudar você com qualquer dúvida específica.
            </p>
            <button className="bg-[#FFD166] text-[#1B365D] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD166]/90 transition-colors cursor-pointer whitespace-nowrap">
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-[#FFD166] mb-10 max-w-3xl mx-auto">
            Todas as suas dúvidas foram esclarecidas. Agora é hora de transformar sua gestão universitária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plataforma">
              <button className="bg-[#FFD166] text-[#1B365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD166]/90 transition-colors cursor-pointer whitespace-nowrap">
                Explorar Plataforma
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1A2F] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-['Open_Sans'] font-bold text-2xl mb-4">InGUP360</div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformando a gestão universitária através de tecnologia e conhecimento.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <p className="text-gray-400">renata.lfs@ufopa.edu.br</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 InGUP360 – Plataforma de Capacitação Gerencial para Universidades Públicas Federais.</p>
            <p className="mt-2">Desenvolvido para fins acadêmicos</p>
            <div className="mt-4">
              <Link href="https://readdy.ai/?origin=logo" className="text-[#FFD166] hover:text-white transition-colors">
                Made with Readdy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
