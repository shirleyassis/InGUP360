
'use client';

import Link from 'next/link';

export default function Platform() {
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
              <Link href="/plataforma" className="text-[#FFD166] font-semibold cursor-pointer">
                Plataforma
              </Link>
              <Link href="/sobre" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Sobre
              </Link>
              <Link href="/duvidas" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Dúvidas
              </Link>
            </div>
            <button className="md-hidden text-white w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20learning%20platform%20interface%20showing%20digital%20educational%20tools%2C%20professional%20blue%20and%20yellow%20color%20scheme%2C%20students%20and%20administrators%20using%20technology%20for%20academic%20management%2C%20clean%20contemporary%20design&width=1200&height=500&seq=platform-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Conteúdos Didáticos
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD166] mb-8">
              Na InGUP360, os materiais estão organizados por temas estratégicos, identificados em nossa pesquisa
            </p>
            <p className="text-lg leading-relaxed">
              Cada tema traz recursos de estudo, exemplos práticos e ferramentas de apoio.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Temas Disponíveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdos estruturados para desenvolver competências específicas na gestão universitária pública.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Planejamento */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-bar-chart-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Planejamento
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fundamentos e práticas para organização e execução de planos de gestão.
              </p>
              <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                Acessar Conteúdo
              </button>
            </div>

            {/* Gestão de Pessoas */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-team-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Gestão de Pessoas
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estratégias para liderança de equipes e desenvolvimento de talentos.
              </p>
              <Link href="/capacitacao">
                <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                  Acessar Conteúdo
                </button>
              </Link>
            </div>

            {/* Liderança e Tomada de Decisão */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Liderança e Tomada de Decisão no Ensino Superior
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Habilidades para enfrentar desafios e conduzir processos acadêmicos.
              </p>
              <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                Acessar Conteúdo
              </button>
            </div>

            {/* Inovação na Gestão Universitária */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Inovação na Gestão Universitária
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Práticas inovadoras para modernizar e otimizar processos.
              </p>
              <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                Acessar Conteúdo
              </button>
            </div>

            {/* Gestão Orçamentária Eficiente */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-pie-chart-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Gestão Orçamentária Eficiente
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Boas práticas para controle e uso consciente dos recursos.
              </p>
              <Link href="/gestao-orcamentaria">
                <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                  Acessar Conteúdo
                </button>
              </Link>
            </div>

            {/* Boas Práticas na Gestão de Processos */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#FFD166] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                Boas Práticas na Gestão de Processos Universitários
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Modelos e referências aplicáveis no dia a dia.
              </p>
              <button className="bg-[#4F81C7] text-white px-6 py-3 rounded-lg hover:bg-[#4F81C7]/90 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                Acessar Conteúdo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comece sua Jornada de Aprendizagem
          </h2>
          <p className="text-xl text-[#FFD166] mb-10 max-w-3xl mx-auto">
            Explore os materiais didáticos e transforme sua gestão universitária com conteúdo especializado
          </p>
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
