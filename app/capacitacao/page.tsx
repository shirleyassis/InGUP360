
'use client';

import Link from 'next/link';

export default function Capacitacao() {
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20university%20training%20session%20with%20administrators%20learning%20leadership%20skills%2C%20modern%20classroom%20environment%20with%20people%20engaged%20in%20educational%20activities%2C%20bright%20and%20inspiring%20academic%20setting%20with%20collaborative%20atmosphere&width=1200&height=400&seq=capacitacao-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#28A745]/80"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Capacitação
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Desenvolvimento de competências essenciais para gestores universitários modernos
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore nossos programas especializados e metodologias ativas para transformar sua gestão universitária.
          </p>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Programas de Capacitação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdos estruturados para desenvolver as competências mais importantes na gestão universitária pública.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Liderança Acadêmica */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4 text-center">Liderança Acadêmica</h3>
              <p className="text-gray-600 mb-6 text-center">
                Desenvolva habilidades de liderança específicas para o ambiente universitário
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Gestão de Equipes Acadêmicas</h4>
                  <p className="text-gray-600 text-sm">Técnicas para liderar professores, coordenadores e equipe administrativa</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Motivação e Engajamento</h4>
                  <p className="text-gray-600 text-sm">Estratégias para manter equipes motivadas e produtivas</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Resolução de Conflitos</h4>
                  <p className="text-gray-600 text-sm">Métodos para mediar e resolver conflitos no ambiente acadêmico</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-[#28A745] text-white px-6 py-3 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap">
                  Baixar Material Completo
                </button>
              </div>
            </div>

            {/* Comunicação Institucional */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-presentation-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4 text-center">Comunicação Institucional</h3>
              <p className="text-gray-600 mb-6 text-center">
                Aprimore a comunicação interna e externa da sua instituição
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Comunicação Estratégica</h4>
                  <p className="text-gray-600 text-sm">Planejamento e execução de estratégias de comunicação eficazes</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Relacionamento com Stakeholders</h4>
                  <p className="text-gray-600 text-sm">Gestão de relacionamentos com comunidade, governo e parceiros</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Comunicação de Crise</h4>
                  <p className="text-gray-600 text-sm">Protocolos para comunicação em situações de crise institucional</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-[#28A745] text-white px-6 py-3 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap">
                  Acessar Guias Práticos
                </button>
              </div>
            </div>

            {/* Inovação Educacional */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4 text-center">Inovação Educacional</h3>
              <p className="text-gray-600 mb-6 text-center">
                Implementação de metodologias inovadoras na gestão universitária
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Transformação Digital</h4>
                  <p className="text-gray-600 text-sm">Implementação de tecnologias educacionais e sistemas digitais</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Metodologias Ativas</h4>
                  <p className="text-gray-600 text-sm">Aplicação de novas abordagens pedagógicas e de gestão</p>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <h4 className="font-semibold text-[#1B365D] mb-2">Cultura de Inovação</h4>
                  <p className="text-gray-600 text-sm">Desenvolvimento de ambiente propício à inovação institucional</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-[#28A745] text-white px-6 py-3 rounded-lg hover:bg-[#28A745]/90 transition-colors cursor-pointer whitespace-nowrap">
                  Explorar Inovações
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Abordagem prática e aplicada ao contexto específico da gestão universitária pública.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <i className="ri-book-open-line text-xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Aprendizagem Prática</h3>
              <p className="text-gray-600 mb-4">
                Todos os conteúdos são baseados em casos reais e situações práticas do dia a dia da gestão universitária.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Estudos de caso reais
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Ferramentas aplicáveis
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Exercícios práticos
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <i className="ri-group-line text-xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Aprendizagem Colaborativa</h3>
              <p className="text-gray-600 mb-4">
                Promovemos o compartilhamento de experiências entre gestores de diferentes instituições.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Discussões em grupo
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Troca de experiências
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Rede de contatos
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <i className="ri-bar-chart-line text-xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Acompanhamento Contínuo</h3>
              <p className="text-gray-600 mb-4">
                Oferecemos suporte contínuo para implementação das práticas aprendidas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Mentoria especializada
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Avaliação de resultados
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Feedback contínuo
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
                <i className="ri-award-line text-xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Certificação Reconhecida</h3>
              <p className="text-gray-600 mb-4">
                Certificados de conclusão reconhecidos no setor de gestão universitária pública.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Certificação oficial
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Reconhecimento profissional
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-[#28A745] mr-2"></i>
                  Validação de competências
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#28A745]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comece sua Capacitação Hoje
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Transforme sua gestão universitária com nossos programas especializados e metodologias comprovadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plataforma">
              <button className="bg-white text-[#28A745] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Voltar à Plataforma
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#28A745] transition-colors cursor-pointer whitespace-nowrap">
              Falar com Especialista
            </button>
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
