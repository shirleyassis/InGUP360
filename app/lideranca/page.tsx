"use client";

import Link from "next/link";
import { useState } from "react";

export default function Lideranca() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDownload = (fileName: string, fileType: string) => {
    // Simula o download do arquivo
    const link = document.createElement("a");
    link.href = "#";
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
              <Link
                href="/"
                className="text-white hover:text-[#FFD166] transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link
                href="/plataforma"
                className="text-[#FFD166] font-semibold cursor-pointer"
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
                className="text-white hover:text-[#FFD166] transition-colors cursor-pointer"
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
                  mobileOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none border-transparent"
                }`}
                aria-hidden={!mobileOpen}
              >
                <nav className="flex flex-col gap-3">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-[#FFD166]"
                  >
                    Início
                  </Link>
                  <Link
                    href="/plataforma"
                    onClick={() => setMobileOpen(false)}
                    className="text-[#FFD166] font-semibold"
                  >
                    Plataforma
                  </Link>
                  <Link
                    href="/sobre"
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-[#FFD166]"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="/duvidas"
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-[#FFD166]"
                  >
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20university%20finance%20management%20team%20analyzing%20budget%20reports%20and%20financial%20documents%2C%20modern%20office%20environment%20with%20charts%20and%20spreadsheets%2C%20organized%20workspace%20with%20calculators%20and%20planning%20materials%2C%20bright%20professional%20atmosphere%20focused%20on%20financial%20planning%20and%20control&width=1200&height=400&seq=orcamentaria-hero&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/80"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Liderança e Tomada de Decisão
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Ferramentas práticas para controle financeiro e planejamento
            orçamentário universitário
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Baixe materiais especializados para otimizar a gestão financeira da
            sua instituição de ensino superior.
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
              Acesse ferramentas práticas desenvolvidas especificamente para
              gestão orçamentária universitária pública.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Gestão Orçamentária Eficiente */}
            <div className="bg-[#F8F9FA] flex flex-col justify-between  rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-presentation-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Liderança e Tomada de Decisão na Gestão Universitária
                  </h3>
                  <span className="bg-[#FFD166] text-[#1B365D] px-3 py-1 rounded-full text-sm font-semibold">
                    PDF
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Material estratégico voltado ao desenvolvimento de competências
                de liderança no contexto universitário. Aborda modelos
                decisórios, gestão de equipes e condução de processos
                institucionais com foco em resultados e governança.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>
                    Modelos de liderança aplicados à gestão universitária
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Técnicas de tomada de decisão baseada em dados</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Gestão de conflitos e alinhamento institucional</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>
                    Casos práticos do contexto acadêmico-administrativo{" "}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Vj9fFOJgZSQe7279x5kK5vNYh_4QlST6/view?usp=drive_link",
                    "_blank"
                  )
                }
                className="w-full  bg-[#DC3545] text-white px-6 py-4 rounded-lg hover:bg-[#DC3545]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Apresentação
              </button>
            </div>

            {/* Planilha de Planejamento */}
            <div className="bg-[#F8F9FA] flex flex-col justify-between rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-file-excel-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Planilha de Planejamento 5W2H
                  </h3>
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    XLSX
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Ferramenta prática para estruturar planos de ação de forma clara
                e objetiva. Auxilia gestores universitários no detalhamento de
                iniciativas, definição de responsabilidades e acompanhamento da
                execução.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Definição clara de objetivos e ações</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Distribuição de responsabilidades</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Prazos, custos e recursos envolvidos</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Facilita o controle e a execução das atividades</span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1QVtpFsdvd6g94NKfUXR6013gAA5FdmJb/edit?usp=drive_link&ouid=116895083691867045715&rtpof=true&sd=true",
                    "_blank"
                  )
                }
                className="w-full bg-[#28A745] text-white px-6 py-4 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Planilha
              </button>
            </div>

            {/* Planilha de Planejamento */}
            <div className="bg-[#F8F9FA] flex flex-col justify-between rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-file-excel-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Planilha Matrix de Urgencia e a Importância na Gestão
                    Universitária
                  </h3>
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    XLSX
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Instrumento de apoio à priorização de demandas acadêmicas e
                administrativas. Permite organizar tarefas de forma estratégica,
                otimizando o tempo e focando no que realmente gera impacto
                institucional.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Classificação de tarefas por prioridade</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Apoio à tomada de decisão gerencial</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Redução de retrabalho e sobrecarga</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Melhoria na gestão do tempo institucional </span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1XgPNBACecpgQPTQZ-9bNXGmDnWfMhkiM/edit?usp=drive_link&ouid=116895083691867045715&rtpof=true&sd=true",
                    "_blank"
                  )
                }
                className="w-full bg-[#28A745] text-white px-6 py-4 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
              >
                <i className="ri-download-line mr-2"></i>
                Baixar Planilha
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
              Ferramentas desenvolvidas especificamente para o contexto da
              gestão universitária pública.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">
                Conformidade Legal
              </h3>
              <p className="text-gray-600">
                Todos os materiais seguem as normas e regulamentações
                específicas do setor público educacional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">
                Fácil Implementação
              </h3>
              <p className="text-gray-600">
                Ferramentas prontas para uso imediato, com instruções claras e
                exemplos práticos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-refresh-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">
                Atualizações Constantes
              </h3>
              <p className="text-gray-600">
                Materiais atualizados regularmente para refletir mudanças na
                legislação e melhores práticas.
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
            Baixe todos os materiais e implemente práticas eficientes de gestão
            financeira na sua universidade.
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
            <div className="font-['Open_Sans'] font-bold text-2xl mb-4">
              InGUP360
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformando a gestão universitária através de tecnologia e
              conhecimento.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <p className="text-gray-400">renata.lfs@ufopa.edu.br</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 InGUP360 – Plataforma de Capacitação Gerencial para
              Universidades Públicas Federais.
            </p>
            <p className="mt-2">Desenvolvido para fins acadêmicos</p>
            <div className="mt-4">
              <Link
                href="https://readdy.ai/?origin=logo"
                className="text-[#FFD166] hover:text-white transition-colors"
              >
                Made with Readdy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
