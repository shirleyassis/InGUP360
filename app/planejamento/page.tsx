"use client";

import Link from "next/link";
import { useState } from "react";

export default function Planejamento() {
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
            Planejamento
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Ferramentas práticas para elaborar o planejamento do seu setor.
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Baixe materiais especializados para otimizar a gestão da sua instituição de ensino superior.
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
              o planejamento na universitária pública.
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
                    Planejamento Operacional
                  </h3>
                  <span className="bg-[#FFD166] text-[#1B365D] px-3 py-1 rounded-full text-sm font-semibold">
                    PDF
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Segundo Chiavenato (2004), o planejamento é a primeira função do
                processo administrativo, permitindo estabelecer objetivos
                organizacionais com eficácia através dos recursos necessários.
                Por que planejar?
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>
                    Alinha os esforços organizacionais em uma única direção
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>
                    Permite visualizar antecipadamente as ações necessárias
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Facilita a integração de novos servidores</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>
                    Proporciona oportunidade de organização das equipes
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HI2TJ0rOt5RItCp2nugdpMUrfhb74EDz/view?usp=sharing",
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
                <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-presentation-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                    Diagnóstico Situacional
                  </h3>
                  <span className="bg-[#FFD166] text-[#1B365D] px-3 py-1 rounded-full text-sm font-semibold">
                    PDF
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Segundo Oliveira (2005a), o
                Diagnóstico Organizacional visa levantar as necessidades
                (carências em termos de preparo profissional) passadas,
                presentes ou futuras por intermédio de pesquisas internas, a fim
                de descrever o problema e prescrever uma intervenção. Por que é
                necessário?
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Identificar as lacunas do planejamento
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Identificar os processos, rotinas, pessoas e projetos executados no setor
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Saber exatamente o que precisa ser feito, quem faz, quando faz</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#DC3545] mr-3"></i>
                  <span>Conhecer quanto tempo cada atividade demanda e quão relevante será o retorno</span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iszYbvgDYAm8gXvIWYF6B-He_hiKwzH8/view?usp=drive_link",
                    "_blank"
                  )
                }
                className="w-full bg-[#DC3545] text-white px-6 py-4 rounded-lg hover:bg-[#DC3545]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold flex items-center justify-center"
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
                    Planilha de Planejamento Operacional
                  </h3>
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    XLSX
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Modelo de planilha para auxiliar no planejamento operacional conforme
                descrito por Chiavenato (2004).
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>O cálculo de prioridade é automático!
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Visão panorâmica de todos os projetos em andamento</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Garante que todas as rotinas estejam documentadas.</span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1OONl3vcM93rEDDNq2B4WYJDeycMq1SHM/edit?usp=drive_link&ouid=116895083691867045715&rtpof=true&sd=true",
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
                    Planilha de Diagnostico Situacional
                  </h3>
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    XLSX
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                O modelo oferece uma abordagem completa e integrada para o gerenciamento da execução do planejamento operacional de setores universitários, com ferramentas práticas para acompanhamento, controle e relatórios.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Permite avaliar a execução do planejamento a cada 6 meses
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Visão clara de todas as entregas prometidas no ano
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Centraliza informações sobre temas prioritários e seus respectivos cronogramas de trabalho</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="ri-check-line text-[#28A745] mr-3"></i>
                  <span>Permite detalhar cada ação do setor com máxima precisão</span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1QGF0cvvonuqGlc4_uiJRMxbCIt4w3UV4/edit?usp=drive_link&ouid=116895083691867045715&rtpof=true&sd=true",
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
