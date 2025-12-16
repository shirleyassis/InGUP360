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
        "resposta": "O orçamento público é o instrumento que define as receitas e despesas da universidade em determinado exercício financeiro. Ele reflete as prioridades institucionais, expressas na Lei Orçamentária Anual (LOA), e deve estar alinhado ao Plano de Desenvolvimento Institucional (PDI) da universidade."
      },
      {
        "pergunta": "Qual a importância do planejamento orçamentário para a gestão universitária?",
        "resposta": "O planejamento orçamentário permite que os gestores alinhem os recursos disponíveis às metas institucionais, evitando desperdícios e garantindo maior eficiência na aplicação do orçamento."
      },
      {
        "pergunta": "Como são definidas as prioridades na alocação de recursos?",
        "resposta": "As prioridades na alocação de recursos são estabelecidas com base nos instrumentos de planejamento institucional. O Plano de Desenvolvimento Institucional (PDI) orienta as diretrizes estratégicas da universidade, definindo metas de longo prazo. O Plano de Desenvolvimento da Unidade (PDU) detalha essas diretrizes no âmbito tático, adequando-as às demandas e objetivos específicos de cada setor. Já o Plano de Gestão Orçamentária (PGO) consolida essas informações ao atribuir os valores orçamentários a cada ação, garantindo que a execução financeira esteja alinhada às prioridades estratégicas e táticas previamente aprovadas."
      },
      {
        "pergunta": "O que são GND’s e quais os tipos com exemplos do que pode ser executado.",
        "resposta": "“GND” significa Grupo de Natureza da Despesa. No SIOP, estes agrupam elementos de despesa segundo o objeto de gasto. Exemplos: GND 1: Pessoal e Encargos Sociais — para pagamento de servidores, encargos.GND 2: uros e Encargos da Dívida — pagamento de dívida pública.GND 3: Outras Despesas Correntes — material de consumo, serviços terceirizados, manutenção. GND 4: Investimentos — aquisição de bens duráveis, obras, equipamentos. GND 5: Inversões Financeiras — operações como participação societária, aquisição de títulos."
      },
      {
        "pergunta": "O que é um Plano Interno (PI)?",
        "resposta": "O PI desdobra uma ação orçamentária em níveis mais específicos, possibilitando acompanhar como e onde os recursos estão sendo aplicados dentro da universidade — seja em uma unidade administrativa, um campus, um projeto ou um tipo de despesa. Os Planos Internos são definidos internamente pela instituição, respeitando as normas da Secretaria de Orçamento Federal (SOF) e os limites estabelecidos no Sistema Integrado de Planejamento e Orçamento – SIOP. Para mais informações, acessar a PORTARIA Nº 3, DE 10/12/2021 Sistema Integrado de Planejamento, Orçamentação e Custos ou o manual de orientações da SPO/SE/MEC anexada aos documentos complementares do tema Orçamento desta plataforma."
      },
      {
        "pergunta": "Quais são as fases da execução da despesa pública?",
        "resposta": "Segundo Paludo (2013) a execução ocorre em três estágios: EMPENHO, LIQUIDAÇÃO e PAGAMENTO. Empenho: corresponde a autorização da despesa e posterior reserva da dotação, uma vez que a nota de empenho fica vinculada a um determinado objeto e fornecedor, em geral, ao que venceu no processo licitatório. Liquidação: onde a instituição se certifica que o produto ou material foi entregue de acordo com as especificidades solicitadas, se os serviços foram realizados conforme o programado e confirma o valor exato a pagar. Pagamento: se refere ao efetivo repasse financeiro para pagar o que foi constatado na liquidação."
      },
      {
        "pergunta": "O que é o empenho e qual a sua importância?",
        "resposta": "O empenho é o ato que cria a obrigação de pagamento do Estado. Ele garante que há previsão orçamentária para cobrir determinada despesa, evitando a execução de gastos sem autorização.Os empenhos podem ser acompanhados pelos gestores através de Painéis de Gestão, relatórios gerenciais emitidos através do Sistema do Tesouro Gerencial (TG), SIAFI e demais relatórios de acompanhamento implementados pelas Universidades."
      },
      {
        "pergunta": "O que é o empenho e qual a sua importância?",
        "resposta": "O empenho é o ato que cria a obrigação de pagamento do Estado. Ele garante que há previsão orçamentária para cobrir determinada despesa, evitando a execução de gastos sem autorização.Os empenhos podem ser acompanhados pelos gestores através de Painéis de Gestão, relatórios gerenciais emitidos através do Sistema do Tesouro Gerencial (TG), SIAFI e demais relatórios de acompanhamento implementados pelas Universidades."
      },
      {
        "pergunta": "O que significa “dotação atualizada”?",
        "resposta": "É o valor total disponível após alterações orçamentárias, como créditos adicionais, remanejamentos ou bloqueios. Representa o orçamento real de que o setor dispõe para executar suas ações"
      },
      {
        "pergunta": "O que significa “crédito disponível”?",
        "resposta": "É o saldo da dotação atualizada que ainda está comprometido com novas despesas (não empenhado)."
      },
      {
        "pergunta": "Como executar “Restos a Pagar”?",
        "resposta": "São despesas empenhadas mas não pagas até o dia 31 de dezembro distinguindo-se as processadas (despesas empenhadas e liquidadas) das não processadas (despesas apenas empenhadas e aguardando a liquidação).Lei nº 4.320/1964, art 36; Decreto nº 93.872/1986, art. 67."
      },
      {
        "pergunta": "O que é um remanejamento orçamentário e quando deve ser feito?",
        "resposta": "O remanejamento é a movimentação de recursos entre ações, grupos de despesas ou elementos de despesa, dentro da mesma instituição. Deve ser realizado para equilibrar dotações e atender novas prioridades, sempre respeitando os limites legais e institucionais."
      },
      {
        "pergunta": "Como acompanhar a execução orçamentária da universidade?",
        "resposta": "Acompanhar por meio de relatórios do SIAFI, relatórios do Tesouro Gerencial, além de painéis de gestão (como o Painel de Execução Orçamentária da sua Universidade, caso exista). Esses instrumentos permitem o monitoramento tempestivo da execução orçamentária."
      },
      {
        "pergunta": "Como a gestão orçamentária pode promover inovação e eficiência?",
        "resposta": "Ao adotar práticas modernas de planejamento, controle e monitoramento, a gestão orçamentária pode otimizar o uso de recursos, reduzir retrabalhos e apoiar decisões estratégicas baseadas em dados e realizar os replanejamentos necessários durante o exercício financeiro para otimizar ao máximo o orçamento."
      },
      {
        "pergunta": "Quais boas práticas podem ser adotadas na gestão orçamentária das Ifes?",
        "resposta": "Uso de painéis e dashboards em Power BI; Criação de controles internos como a implementação de bases de dados históricas do orçamento planejado e executado; Reuniões periódicas de monitoramento com gestores setoriais; Capacitação contínua em orçamento e finanças públicas; Compartilhamento de boas práticas entre Ifes por meio da plataforma InGUP 360."
      },
      {
        "pergunta": "Como a plataforma InGUP 360 pode auxiliar os gestores na gestão orçamentária do setor onde atua?",
        "resposta": "A plataforma oferece conteúdos didáticos e aplicáveis à realidade das Ifes, permitindo que gestores se capacitem de forma autônoma e a qualquer tempo."
      }
    ]
  },
  {
    "tema": "Planejamento",
    "duvidas": [
      {
        "pergunta": "O que é planejamento no contexto das universidades públicas?",
        "resposta": "O planejamento é a primeira função do processo administrativo e consiste em estabelecer objetivos e definir os recursos necessários para alcançá-los de forma eficaz. Ele orienta a ação institucional, garantindo alinhamento, integração e racionalidade nas decisões."
      },
      {
        "pergunta": "Por que o planejamento é importante para a gestão universitária?",
        "resposta": "Porque permite alinhar esforços, evitar ações isoladas, garantir organização das atividades, antecipar necessidades e alcançar resultados em consonância com os objetivos institucionais. Também facilita a entrada de novos servidores e promove maior integração setorial."
      },
      {
        "pergunta": "Quais são os níveis de planejamento dentro de uma universidade?",
        "resposta": "As universidades trabalham com três níveis de planejamento: Estratégico (longo prazo): visão institucional e PDI. Tático (médio prazo): planos de gestão e planos das unidades (PDUs). Operacional (curto prazo): planejamento setorial e planos anuais como o PGO."
      },
      {
        "pergunta": "O que é o Diagnóstico Situacional?",
        "resposta": "É um processo de levantamento das necessidades, problemas, competências, processos, projetos e recursos de um setor. Ele descreve a situação atual e subsidia intervenções futuras."
      },
      {
        "pergunta": "Por que o diagnóstico é fundamental antes de planejar?",
        "resposta": "Porque permite identificar lacunas, entender o funcionamento real do setor, definir prioridades, estimar tempos, avaliar retornos e mapear recursos humanos e materiais. Sem diagnóstico, o planejamento torna-se superficial."
      },
      {
        "pergunta": "O que deve ser mapeado no diagnóstico?",
        "resposta": "O diagnóstico deve incluir: Competências e funções de cada setor; Projetos e serviços existentes; Escopo, custo e prazos dos projetos; Rotinas dos processos; Distribuição da equipe e cargas de trabalho; Forças, fraquezas, oportunidades e ameaças (Matriz SWOT/FOFA). "
      },
      {
        "pergunta": "Quais ferramentas ajudam a elaborar o diagnóstico?",
        "resposta": "Ferramentas como: Mapeamento de estrutura organizacional (organogramas); Matriz de Responsabilidade; Matriz SWOT (FOFA); Quadro Kanban; Planilhas compartilhadas; Serviços de nuvem institucional."
      },
      {
        "pergunta": "Qual a diferença entre processos e projetos dentro do diagnóstico?",
        "resposta": "Projetos são temporários e únicos, com início, meio e fim definidos (ex.: eventos, editais, construção de prédio, elaboração do PDI). Processos são contínuos, padronizados, repetitivos e essenciais ao funcionamento rotineiro da unidade (ex.: matrícula, análise de processos, atendimento)."
      },
      {
        "pergunta": "Por que é importante distinguir processos de projetos?",
        "resposta": "Porque isso ajuda o gestor a: Alocar melhor a equipe; Dimensionar o setor; Identificar sobrecargas; Priorizar intervenções; Definir indicadores apropriados; Implementar melhorias contínuas."
      },
      {
        "pergunta": "Por que mapear as atividades \"que ninguém vê\"?",
        "resposta": "Essas atividades — como urgências, excesso de reuniões, trocas constantes de prioridade, notificações informais e retrabalho — consomem tempo significativo e afetam o desempenho, mas muitas vezes não são registradas. O diagnóstico ajuda a revelá-las."
      },
      {
        "pergunta": "O que é a Matriz SWOT e para que serve?",
        "resposta": "É uma ferramenta que analisa fatores internos e externos do setor: Forças – pontos positivos internos; Fraquezas – pontos internos que requerem melhoria; Oportunidades – contextos externos que favorecem o setor; Ameaças – riscos externos fora de controle."
      },
      {
        "pergunta": "Como usar a Matriz SWOT para o planejamento setorial?",
        "resposta": "Ela orienta a tomada de decisões ao revelar onde o setor está forte, onde precisa melhorar, que oportunidades aproveitar e que ameaças exigir atenção. Serve como base para definir metas e ações do planejamento."
      },
      {
        "pergunta": "O que caracteriza o Planejamento Operacional?",
        "resposta": "É o plano de curto prazo do setor, contendo atividades, prazos, responsáveis e recursos necessários. Deve ser flexível, sistêmico, interativo e alinhado ao planejamento estratégico e tático, além de focado em antecipar problemas e reduzir riscos."
      },
      {
        "pergunta": "Como iniciar a elaboração do Planejamento Operacional do setor?",
        "resposta": "O primeiro passo é elaborar ou revisar o diagnóstico situacional, contendo: Mapeamento de pessoal e competências; Análise interna e externa (FOFA); Identificação de serviços, processos e projetos. Esse diagnóstico subsidia a definição de prioridades, metas e ações do planejamento."
      },
      {
        "pergunta": "O que é o ciclo PDCA e como aplicá-lo no planejamento?",
        "resposta": "O PDCA é uma metodologia composta por quatro etapas: Planejar – definir metas, identificar problemas, analisar causas, elaborar planos de ação; Executar – implementar o plano e treinar equipes; Checar – verificar o atingimento das metas e acompanhar indicadores, comparando planejado x realizado; Agir/Reavaliar – adotar ações corretivas quando necessário e padronizar boas práticas quando os resultados forem satisfatórios."
      },
      {
        "pergunta": "O que é a Matriz GUT e para que serve?",
        "resposta": "A Matriz GUT é uma ferramenta de priorização baseada em três critérios: Gravidade do problema; Urgência para solução; Tendência de piora. Ela ajuda gestores a decidir quais problemas devem ser tratados primeiro, de forma objetiva e racional."
      },
      {
        "pergunta": "Como aplicar a Matriz GUT no diagnóstico e no planejamento?",
        "resposta": "O processo envolve: Listar problemas ou pontos de análise; Atribuir notas de 1 a 5 para Gravidade, Urgência e Tendência; Multiplicar os valores (G × U × T) para obter a pontuação; Ordenar os problemas pela pontuação; Definir as ações prioritárias com base nesse ranqueamento."
      },
      {
        "pergunta": "Por que monitorar as ações do planejamento?",
        "resposta": "Para garantir que as metas sejam cumpridas, ajustar ações em tempo hábil, organizar a rotina de trabalho e fortalecer a cultura de acompanhamento de resultados."
      },
      {
        "pergunta": "O que deve ser monitorado dentro do Planejamento Operacional?",
        "resposta": "Podem ser monitorados: Programas; Projetos; Atividades; Entregas/produtos do setor; Indicadores; Demandas urgentes e imprevistos."
      },
      {
        "pergunta": "Como deve ser conduzido o monitoramento?",
        "resposta": "De forma objetiva e não exaustiva, com: Controles claros por responsável e prazo; Reuniões curtas e focadas; Indicadores acessíveis a toda a equipe; Acompanhamento permanente do planejado versus realizado."
      },
      {
        "pergunta": "Por que é necessário fazer reuniões periódicas de acompanhamento?",
        "resposta": "Porque elas mantêm o foco nas ações prioritárias, consolidam uma cultura de monitoramento, permitem visualizar entregas e ajustes necessários e melhoram a comunicação entre equipes."
      },
      {
        "pergunta": "O que fazer quando uma ação do planejamento não puder ser executada?",
        "resposta": "O gestor deve replanejar a ação em tempo hábil, revisar prazos e recursos, registrar justificativas e ajustar o plano para garantir o alinhamento institucional e a continuidade dos objetivos."
      },
      {
        "pergunta": "Por que mapear a alocação de pessoas no setor?",
        "resposta": "Porque isso permite: Identificar sobrecargas e subutilização; Planejar férias, afastamentos e licenças; Entender se a unidade é orientada a projetos, processos ou ambos; Identificar necessidades de capacitação; Planejar substituições e backups, minimizando impactos de mudanças na equipe."
      },
      {
        "pergunta": "Quais ferramentas podem ser usadas no controle, monitoramento e alocação de tarefas?",
        "resposta": "Podem ser utilizados, por exemplo: Kanban (físico ou digital); Planilhas eletrônicas e planilhas compartilhadas; Serviços de nuvem institucional; Trello; OpenProject; Outras ferramentas de gestão de projetos e tarefas. As ferramentas devem se adequar à realidade e maturidade do setor."
      },
      {
        "pergunta": "Para que serve o Checklist Operacional?",
        "resposta": "Para mapear rotinas, orientar servidores nas atividades recorrentes, organizar o fluxo de tarefas e acompanhar execuções durante as reuniões. É uma ferramenta simples e eficaz de organização do trabalho diário, semanal, mensal ou anual."
      },
      {
        "pergunta": "Qual a diferença entre planejamento e gerenciamento do planejamento?",
        "resposta": "Planejar é definir o que deve ser feito, estabelecendo metas, ações e prazos. Gerenciar o planejamento é acompanhar, monitorar, avaliar e ajustar o que foi planejado. Muitos planejamentos falham por falta desse gerenciamento contínuo, resultando no chamado “planejamento de gaveta”."
      }
    ]
  },
  {
    "tema": "Gestão de Processos",
    "duvidas": [
      {
        "pergunta": "O que é gestão de processos no contexto universitário?",
        "resposta": "ÉÉ a prática de conhecer, mapear, padronizar e monitorar processos institucionais para garantir maior controle, eficiência e qualidade na entrega de serviços públicos. A gestão eficiente dos processos é um dos pilares essenciais para o bom funcionamento das universidades públicas."
      },
      {
        "pergunta": "O que são processos organizacionais?",
        "resposta": "De acordo com Davenport (1994), processos organizacionais são conjuntos estruturados de atividades inter-relacionadas que transformam entradas em saídas, gerando valor para o usuário dos serviços. Em ambientes complexos, como universidades, processos bem definidos facilitam a tomada de decisão."
      },
      {
        "pergunta": "Quais são os elementos fundamentais de um processo?",
        "resposta": "O material identifica cinco elementos: Entradas – informações ou demandas necessárias para iniciar o processo; Controles – normas, procedimentos e indicadores; Recursos – pessoas, tecnologias e infraestrutura; Processamento – execução das atividades; Saídas – produtos, serviços ou informações geradas."
      },
      {
        "pergunta": "Por que mapear processos?",
        "resposta": "O mapeamento permite: identificar gargalos e retrabalhos; definir responsabilidades com clareza; padronizar atividades; reduzir erros; aumentar transparência; otimizar tempo e melhorar a fluidez do trabalho."
      },
      {
        "pergunta": "Qual a diferença entre processos e projetos na universidade?",
        "resposta": "Processos são contínuos, recorrentes e fazem parte da rotina institucional (ex.: emissão de documentos, atendimento, pagamentos). Projetos têm prazo definido, resultado único e caráter temporário (ex.: elaboração de um edital, implantação de um sistema). O gestor deve equilibrar ambos, acompanhando escopo, qualidade e tempo."
      },
      {
        "pergunta": "Quais práticas compõem uma boa gestão de processos?",
        "resposta": "Destaca-se seis práticas fundamentais: Arquitetura de processos; Mapeamento; Priorização; Modelagem; Transformação; Controle de processos."
      },
      {
        "pergunta": "Como diferenciar o acompanhamento de processos do acompanhamento de projetos?",
        "resposta": "Processos: foco no nível de serviço (qualidade, eficiência, padronização). Projetos: foco nas entregas (escopo, custo, tempo e resultado)."
      },
      {
        "pergunta": "Qual é o maior desafio da gestão universitária em relação a processos?",
        "resposta": "Conciliar o acompanhamento simultâneo de projetos e processos, equilibrando demandas permanentes e demandas temporárias sem comprometer a qualidade do serviço."
      },
      {
        "pergunta": "Como realizar o mapeamento de fluxo de um processo?",
        "resposta": "Perguntas norteadoras incluem: Qual é o objetivo do processo? Quais são as entradas e saídas? Quem são os responsáveis? Quais recursos são utilizados? Quais riscos estão envolvidos? Sugere-se o uso de ferramentas como Bizagi, HEFLO e plataformas de modelagem."
      },
      {
        "pergunta": "Como a gestão de pessoas apoia o gerenciamento de processos?",
        "resposta": "O gestor deve: diagnosticar necessidades e competências da equipe; alocar servidores conforme habilidades; promover desenvolvimento e capacitação; fortalecer a cultura de melhoria contínua."
      },
      {
        "pergunta": "O que é uma \"entrega\" dentro de um processo?",
        "resposta": "Segundo o PMBOK, entrega é um produto, serviço ou resultado verificável e produzido para concluir uma fase, um processo ou um projeto. Em termos práticos, é aquilo que o setor efetivamente entrega como resultado do trabalho."
      },
      {
        "pergunta": "Quais são exemplos de produtos (entregas) na universidade?",
        "resposta": "O documento cita: profissionais capacitados; processos concluídos e aprovados; realização de eventos; implementação de sistemas; relatórios institucionais; finalização de projetos; manutenção de equipamentos; execução de planos de gestão da unidade."
      },
      {
        "pergunta": "Como identificar produtos no meu setor?",
        "resposta": "O gestor deve se perguntar: Tenho mapeadas as ações macro? Acompanho o andamento das ações relacionadas a cada entrega? As ações foram concluídas? A entrega final está claramente definida? É importante que o gestor apresente à equipe os produtos que estão sendo entregues."
      },
      {
        "pergunta": "Como determinar os principais processos do setor?",
        "resposta": "Os principais processos são aqueles que impactam diretamente os resultados institucionais e se relacionam às competências e funções do setor. Devem ser identificados de forma estratégica e alinhados ao planejamento."
      },
      {
        "pergunta": "Por que é importante manter os processos mapeados e atualizados?",
        "resposta": "Para garantir: alinhamento entre setores; continuidade do trabalho mesmo com mudanças de equipe; redução de ruídos e retrabalhos; tomadas de decisão mais ágeis; eficiência institucional."
      },
      {
        "pergunta": "O que significa inovar na gestão de processos?",
        "resposta": "É reinventar modelos de trabalho para reduzir desperdícios, eliminar retrabalhos e implementar fluxos mais eficientes. Não implica necessariamente em tecnologia nova, mas sim em criar soluções melhores para superar limitações institucionais."
      }
    ]
  },
  {
    "tema": "Liderança e Tomada de Decisão no Ensino Superior",
    "duvidas": [
      {
        "pergunta": "O que caracteriza a liderança nas universidades federais?",
        "resposta": "A liderança nas Ifes exige equilíbrio entre conhecimento técnico, gestão estratégica, gestão de pessoas e capacidade de tomar decisões em ambientes complexos, marcados por diversos colegiados, múltiplos atores e limitações orçamentárias. "
      },
      {
        "pergunta": "Por que o contexto universitário torna a liderança mais desafiadora?",
        "resposta": "Porque envolve diferentes perfis profissionais, carreiras distintas, disputas acadêmicas e administrativas, processos colegiados e forte dependência de normas legais e institucionais."
      },
      {
        "pergunta": "Quais são os elementos-chave da liderança universitária?",
        "resposta": "Domínio técnico e compreensão do contexto institucional; Capacidade de articular decisões colegiadas; Atuação baseada nos princípios da administração pública: legalidade, impessoalidade, moralidade, publicidade e eficiência."
      },
      {
        "pergunta": "Quais são os pilares da gestão eficaz para líderes universitários?",
        "resposta": "Os pilares destacados são: Foco em resultados, com entregas efetivas e respeito ao bem-estar da equipe; Visão de longo prazo, incluindo planejamento e transições gerenciais; Decisões fundamentadas, utilizando informações para lidar com prioridades, restrições e urgências."
      },
      {
        "pergunta": "Quais competências gerenciais são essenciais ao líder público na gestão universitária?",
        "resposta": "De acordo com o modelo de competências da ENAP, o líder precisa desenvolver competências relacionadas a: Estratégia (visão de futuro, inovação, comunicação estratégica); Resultados (gestão de crises, geração de valor ao usuário, gestão para resultados); Pessoas (engajamento, coordenação em rede, autodesenvolvimento)."
      },
      {
        "pergunta": "Por que a comunicação interna é um fator crítico de sucesso (ou fracasso) na gestão universitária?",
        "resposta": "Porque falhas na comunicação podem gerar retrabalho, conflitos, ruídos entre setores e ineficiência. Boa comunicação requer clareza nos fluxos, reuniões objetivas, orientações acessíveis e acompanhamento contínuo."
      },
      {
        "pergunta": "Quais são as principais boas práticas para melhorar a comunicação interna?",
        "resposta": "Reuniões regulares e objetivas com pauta prévia; Informações claras e padronizadas; Relatórios de acompanhamento com indicadores; Definição explícita de atribuições dos servidores."
      },
      {
        "pergunta": "Por que a gestão do tempo é indispensável para líderes universitários?",
        "resposta": "O tempo é um recurso escasso. Para ser eficaz, o gestor precisa priorizar o que é importante, estabelecer rotinas fixas, delegar tarefas e reservar espaço para análise estratégica, evitando atuar apenas como “apagador de incêndios”."
      },
      {
        "pergunta": "Quais ferramentas auxiliam na gestão do tempo dentro das Ifes?",
        "resposta": "Seguem algumas sugestões: Matriz de Urgência e Importância; Matriz 5W2H; Quadro Kanban. Essas ferramentas ajudam na priorização e organização das demandas diárias."
      },
      {
        "pergunta": "Quais são os tipos de conflitos mais comuns nas universidades?",
        "resposta": "Diferenças de expectativas entre novos e antigos servidores; Divergências entre prioridades acadêmicas e administrativas; Sobrecarga de trabalho por falta de clareza nas responsabilidades."
      },
      {
        "pergunta": "Como o gestor pode atuar na resolução de conflitos?",
        "resposta": "Através de quatro passos: Identificar a causa real; Ouvir todas as partes (escuta ativa/imparcial); Mediar a situação, buscando soluções comuns; Formalizar acordos e acompanhar responsabilidades e prazos."
      },
      {
        "pergunta": "Qual é o papel da liderança estratégica na tomada de decisão?",
        "resposta": "Segundo Ésther (2011), cabe ao gestor conduzir a instituição em direção aos objetivos definidos, estabelecendo prioridades e mediando conflitos. Decisões estratégicas devem considerar o contexto institucional e os interesses coletivos."
      },
      {
        "pergunta": "O que um gestor deve fazer nos primeiros 30 dias no cargo?",
        "resposta": "O checklist sugerido recomenda: Mapear equipe, processos, projetos e documentos institucionais (PDI, PDU, regimentos); Levantar demandas urgentes e estratégicas; Estabelecer rotinas de comunicação; Planejar ações para os primeiros 90 dias e plano anual; Criar indicadores simples e monitorar conflitos e riscos."
      },
      {
        "pergunta": "Por que a articulação entre grupos é essencial para liderar universidades?",
        "resposta": "Porque o gestor precisa integrar diferentes atores (docentes, técnicos, conselhos, estudantes, setores) para promover harmonia institucional, minimizar tensões e garantir o bom funcionamento da gestão universitária."
      }
    ]
  },
  {
    "tema": "Gestão de Pessoas",
    "duvidas": [
      {
        "pergunta": "O que é Gestão de Pessoas (GP) no contexto das universidades públicas?",
        "resposta": "É o conjunto de práticas voltadas a desenvolver, motivar, apoiar e gerir servidores, criando um ambiente de trabalho capaz de alinhar metas individuais aos objetivos institucionais. A GP ultrapassa a administração de equipes: envolve clima, capacitação, liderança, competências e desenvolvimento contínuo."
      },
      {
        "pergunta": "Quais são os principais desafios da Gestão de Pessoas nas Ifes?",
        "resposta": "Entre os desafios mais recorrentes estão: excesso de burocracia; restrições orçamentárias; dificuldade de atrair e reter talentos; gestão de conflitos e saúde mental; multiplicidade de carreiras e regimes de trabalho; pressão por eficiência; aumento das demandas sem crescimento proporcional do quadro."
      },
      {
        "pergunta": "Quais são as principais responsabilidades de um gestor universitário na área de GP?",
        "resposta": "O gestor deve: promover bem-estar e mediar conflitos; alinhar a equipe à estratégia institucional; desenvolver e capacitar servidores; estimular liderança transformacional; racionalizar processos e reduzir burocracias."
      },
      {
        "pergunta": "Quais legislações são essenciais para a Gestão de Pessoas nas universidades públicas?",
        "resposta": "As mais relevantes incluem: Lei nº 8.112/1990 (regime jurídico dos servidores); Decreto nº 9.991/2019 (PNDP e desenvolvimento de pessoas); Normas de PGD, teletrabalho, carreira docente e TAE; Resoluções internas das Ifes."
      },
      {
        "pergunta": "Quais modelos de trabalho existem nas universidades federais?",
        "resposta": "Presencial; Teletrabalho (remoto) e Híbrido. O gestor deve saber liderar equipes em qualquer modalidade, garantindo produtividade e bem-estar."
      },
      {
        "pergunta": "Quais boas práticas de gestão são recomendadas no teletrabalho?",
        "resposta": "O material destaca: liderança baseada em empatia; colaboração e reconhecimento; redução de controles excessivos; autonomia com responsabilidade; preservação do senso de equipe; equilíbrio entre desempenho e bem-estar."
      },
      {
        "pergunta": "O que significa gestão por competências?",
        "resposta": "É a gestão baseada no desenvolvimento e na avaliação de três dimensões: Conhecimentos (saber); Habilidades (fazer); Atitudes (agir). Essa tríade orienta seleção, capacitação e desenvolvimento de servidores."
      },
      {
        "pergunta": "Quais competências a ENAP considera essenciais para gestores públicos?",
        "resposta": "Segundo o modelo de liderança da ENAP, as competências incluem: visão de futuro; inovação e mudança; comunicação estratégica; gestão de crises; gestão para resultados; coordenação e colaboração em rede; engajamento da equipe; autodesenvolvimento."
      },
      {
        "pergunta": "Por que a capacitação contínua é indispensável para gestores nas Ifes?",
        "resposta": "Porque permite corrigir lacunas de competências, qualificar entregas e alinhar equipes à estratégia institucional. A capacitação deve seguir diretrizes da PNDP (Decreto 9.991/2019)."
      },
      {
        "pergunta": "Quais tipos de capacitação são mais relevantes para gestores universitários?",
        "resposta": "Podemos destacar cinco prioridades: Capacitação alinhada aos objetivos estratégicos; Trilhas de aprendizagem e inovação; Planejamento, gestão de processos e projetos; Gestão orçamentária; Gestão de equipes em diferentes modalidades de trabalho."
      },
      {
        "pergunta": "Como a Gestão de Pessoas contribui para o bem-estar e saúde ocupacional?",
        "resposta": "Ela deve promover: ambientes psicologicamente seguros; ações de qualidade de vida no trabalho; acolhimento e escuta ativa; combate ao assédio moral e sexual."
      },
      {
        "pergunta": "O que é dimensionamento de pessoal e por que é importante nas universidades?",
        "resposta": "É o instrumento que estima o quantitativo ideal de servidores para realizar as entregas institucionais, considerando contexto, força de trabalho e demandas reais. Ele é fundamental porque: há déficits históricos; existe expansão das Ifes sem recomposição proporcional; há alta carga administrativa e multiplicidade de processos."
      },
      {
        "pergunta": "O que o dimensionamento permite ao gestor?",
        "resposta": "Permite: identificar gargalos; racionalizar equipes; priorizar setores críticos; justificar solicitações de novas vagas; alinhar equipes ao PDI e às competências individuais."
      },
      {
        "pergunta": "Por que a cultura organizacional é essencial para a Gestão de Pessoas?",
        "resposta": "Porque a cultura envolve valores, normas, crenças e práticas que moldam comportamentos e decisões. Nas Ifes, ela influencia motivação, inovação, clima organizacional, desempenho e retenção de talentos."
      },
      {
        "pergunta": "Como a cultura organizacional impacta inovação e desempenho?",
        "resposta": "Culturas abertas à mudança favorecem experimentação e práticas inovadoras. Pesquisas mostram melhorias em: compartilhamento de conhecimento; habilidades interpessoais; clima organizacional; produtividade e engajamento."
      },
      {
        "pergunta": "Por que Gestão de Pessoas é estratégica nas Ifes?",
        "resposta": "Porque conecta diretamente: desempenho das equipes à eficiência institucional; liderança à clareza e foco em resultados; desenvolvimento por competências à qualidade das entregas; dimensionamento ao equilíbrio da força de trabalho; cultura organizacional à motivação e inovação."
      }
    ]
  },
  {
    "tema": "Inovação nas IFES",
    "duvidas": [
      {
        "pergunta": "O que significa inovação na gestão universitária?",
        "resposta": "Inovação é a implementação de novos produtos, serviços, métodos de trabalho, processos ou práticas organizacionais capazes de melhorar a eficiência e criar valor institucional. Segundo a definição apresentada (OCDE, 1995), a inovação pode ocorrer em: Produtos/Serviços (novos ou aperfeiçoados); Processos; Organização; Marketing."
      },
      {
        "pergunta": "Por que inovar é importante nas Ifes?",
        "resposta": "Porque as universidades enfrentam desafios complexos: restrições orçamentárias, burocracias, ciclos decisórios longos, legislações rígidas e demandas crescentes. Inovar permite: aprimorar processos; melhorar a entrega de serviços;fortalecer a eficiência institucional; garantir a legalidade e a sustentabilidade das mudanças."
      },
      {
        "pergunta": "Quais são as características específicas da gestão universitária que influenciam a inovação?",
        "resposta": "Pode-se destacar: obrigatoriedade de seguir legislações federais; sobreposição de processos;administrativos e acadêmicos; tomada de decisão colegiada; ambiente político e cultural robusto; fragmentação entre setores; múltiplas demandas e expectativas de diferentes grupos."
      },
      {
        "pergunta": "Quais são os principais desafios da inovação nas universidades?",
        "resposta": "Entre os desafios mais recorrentes estão: Processos desconectados, com fluxos sobrepostos; Falta de integração tecnológica, com sistemas isolados; Burocracia, que limita agilidade; Resistência cultural a mudanças; Falta de capacitação em práticas de inovação; Restrições de recursos para implementar melhorias."
      },
      {
        "pergunta": "Onde a inovação aparece no cotidiano do gestor universitário?",
        "resposta": "A inovação pode surgir em áreas como: Gestão acadêmica, com otimização de fluxos e normativas; Gestão organizacional, com revisões de processos e comunicação interna; Gestão de pessoas, com adoção de PGD e soluções digitais; Processos digitais, como automatização e sistemas integrados; Regulamentos institucionais, como atualização de resoluções e normas internas."
      },
      {
        "pergunta": "Como implementar a inovação na gestão universitária?",
        "resposta": "A inovação exige mudança cultural e melhoria contínua. Ferramentas sugeridas incluem: PDCA — revisar processos continuamente; 5W2H — planejar ações com clareza; Mapeamento de Processos — compreender fluxos e gargalos; Transparência na gestão — comunicar etapas e resultados."
      },
      {
        "pergunta": "O que é uma cultura de inovação nas IFES?",
        "resposta": "É um ambiente organizacional que apoia, valoriza e reconhece práticas inovadoras, estimulando colaboração entre setores. Uma cultura de inovação exige: lideranças comprometidas com melhoria contínua; incentivos para novas ideias; compartilhamento de boas práticas; reconhecimento institucional das iniciativas bem-sucedidas."
      },
      {
        "pergunta": "Que práticas podem fortalecer a cultura de inovação dentro da universidade?",
        "resposta": "Sugere-se: criar um Painel de Boas Práticas para registrar e divulgar iniciativas inovadoras de servidores; promover trocas entre setores; incentivar soluções simples e eficazes no cotidiano; reconhecer a criatividade e o esforço das equipes."
      },
      {
        "pergunta": "Quais são as características de um líder inovador?",
        "resposta": "O líder inovador possui: Consideração pela equipe, reconhecendo esforços; Tomada de decisão objetiva, com responsabilidade; Flexibilidade, aceitando mudanças e novos métodos; Capacidade de criar conexões, integrando setores e aproximando equipes."
      },
      {
        "pergunta": "A inovação sempre exige tecnologia?",
        "resposta": "Não. Embora tecnologia possa ser um facilitador, inovar significa melhorar processos, rotinas e práticas, mesmo quando as soluções são simples, organizacionais ou baseadas em mudança comportamental."
      },
      {
        "pergunta": "Por que a resistência cultural é um dos maiores obstáculos à inovação?",
        "resposta": "Porque a cultura das Ifes tende a valorizar práticas consolidadas, normas rígidas e fluxos burocráticos. Mudanças podem gerar receio, desconfiança ou sensação de perda de controle. Uma cultura de inovação precisa promover segurança psicológica e incentivar experimentação."
      }
    ]
  }];



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

          {/* <div className="text-center mt-16 bg-[#1B365D] rounded-2xl p-8 max-w-2xl mx-auto">
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
          </div> */}
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
