
'use client';

import Link from 'next/link';

export default function GestaoOrcamentaria() {
  const handleDownload = (fileName: string, fileType: string) => {
    // Simula o download do arquivo
    const link = document.createElement('a');
    link.href = '#';
    link.download = fileName;
    link.click();
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
              <Link href="/" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Início
              </Link>
              <Link href="/plataforma" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Plataforma
              </Link>
              <Link href="/sobre" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Sobre
              </Link>
              <Link href="/duvidas" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Dúvidas
              </Link>
            </div>
            <button className="md:hidden text-white w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20university%20finance%20management%20team%20analyzing%20budget%20reports%20and%20financial%20documents%2C%20modern%20office%20environment%20with%20charts%20and%20spreadsheets%2C%20organized%20workspace%20with%20calculators%20and%20planning%20materials%2C%20bright%20professional%20atmosphere%20focused%20on%20financial%20planning%20and%20control&width=1200&height=400&seq=orcamentaria-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/80"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gestão Orçamentária
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Ferramentas práticas para controle financeiro e planejamento orçamentário universitário
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Baixe materiais especializados para otimizar a gestão financeira da sua instituição de ensino superior.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Materiais para Download
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse ferramentas práticas desenvolvidas especificamente para gestão orçamentária universitária pública.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Gestão Orçamentária Eficiente */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-presentation-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Gestão Orçamentária Eficiente
                  </h3>
                  <span className="bg-[#FFD166] text-[#1B365D] px-3 py-1 rounded-full text-sm font-semibold">
                    PPTX
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Apresentação completa com metodologias e estratégias para implementar uma gestão orçamentária eficiente em universidades públicas. Inclui casos práticos, indicadores de desempenho e melhores práticas do setor.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Metodologias de controle orçamentário</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Indicadores de performance financeira</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Casos de sucesso em universidades públicas</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Templates e modelos práticos</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1Ad1DmHyRE3LzkrtV5Qn47vZDcltA6sIY/view?usp=sharing', '_blank')}
                className="w-full bg-[#DC3545] text-white px-6 py-4 rounded-lg hover:bg-[#DC3545]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Apresentação
              </button>
            </div>

            {/* Planilha de Planejamento */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-file-excel-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Planilha de Planejamento das Unidades
                  </h3>
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CSV
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modelo estruturado para planejamento orçamentário de unidades acadêmicas e administrativas. Ferramenta essencial para organizar recursos, definir prioridades e acompanhar execução do orçamento.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Estrutura por unidades acadêmicas</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Categorização de despesas administrativas</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Campos para metas e objetivos</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Controle de execução por período</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1H-9BlHVsVAE5A-6HYJv0fBAMNMfKGfiQ/edit?usp=sharing&ouid=108870360299279755949&rtpof=true&sd=true', '_blank')}
                className="w-full bg-[#28A745] text-white px-6 py-4 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Planilha
              </button>
            </div>

            {/* Controle de Aulas de Campo */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#4F81C7] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Racional para Controle de Aulas de Campo
                  </h3>
                  <span className="bg-[#4F81C7] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CSV
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sistema de controle específico para gestão financeira de aulas de campo e atividades práticas externas. Permite rastreamento de custos, logística e prestação de contas dessas atividades acadêmicas.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#4F81C7] mr-3"></i>
                  <span>Controle de custos por atividade</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#4F81C7] mr-3"></i>
                  <span>Gestão de transporte e hospedagem</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#4F81C7] mr-3"></i>
                  <span>Documentação para prestação de contas</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#4F81C7] mr-3"></i>
                  <span>Acompanhamento por curso/disciplina</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1IYbTolfQEMoIPzt9eTPazYXsF5DPpD4B/edit?usp=sharing&ouid=108870360299279755949&rtpof=true&sd=true', '_blank')}
                className="w-full bg-[#4F81C7] text-white px-6 py-4 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Controle
              </button>
            </div>

            {/* Relatório de Acompanhamento */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#FD7E14] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-line-chart-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Relatório de Acompanhamento Orçamentário
                  </h3>
                  <span className="bg-[#FD7E14] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CSV
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Template completo para geração de relatórios mensais e trimestrais de acompanhamento orçamentário. Facilita a análise de desvios, tendências e tomada de decisões estratégicas na gestão financeira.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#FD7E14] mr-3"></i>
                  <span>Comparação orçado vs. realizado</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#FD7E14] mr-3"></i>
                  <span>Análise de desvios por categoria</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#FD7E14] mr-3"></i>
                  <span>Indicadores de performance</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#FD7E14] mr-3"></i>
                  <span>Projeções e tendências</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1QcmPmsdX7UwjZqFxMvlbWFOWCYxP0tq1/edit?usp=sharing&ouid=108870360299279755949&rtpof=true&sd=true', '_blank')}
                className="w-full bg-[#FD7E14] text-white px-6 py-4 rounded-lg hover:bg-[#FD7E14]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Relatório
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Vantagens dos Nossos Materiais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas desenvolvidas especificamente para o contexto da gestão universitária pública.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">Conformidade Legal</h3>
              <p className="text-gray-600">
                Todos os materiais seguem as normas e regulamentações específicas do setor público educacional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">Fácil Implementação</h3>
              <p className="text-gray-600">
                Ferramentas prontas para uso imediato, com instruções claras e exemplos práticos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-refresh-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">Atualizações Constantes</h3>
              <p className="text-gray-600">
                Materiais atualizados regularmente para refletir mudanças na legislação e melhores práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transforme sua Gestão Orçamentária
          </h2>
          <p className="text-xl text-[#FFD166] mb-10 max-w-3xl mx-auto">
            Baixe todos os materiais e implemente práticas eficientes de gestão financeira na sua universidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plataforma">
              <button className="bg-[#FFD166] text-[#1B365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD166]/90 transition-colors cursor-pointer whitespace-nowrap">
                Voltar à Plataforma
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
