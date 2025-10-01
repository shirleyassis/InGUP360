
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B365D] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-white font-['Open_Sans'] font-bold text-2xl">
              InGUP360
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#FFD166] font-semibold cursor-pointer">
                Início
              </Link>
              <Link href="/plataforma" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Plataforma
              </Link>
              <Link href="/sobre" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Sobre
              </Link>
              {/*<Link href="/duvidas" className="text-white hover:text-[#FFD166] transition-colors cursor-pointer">
                Dúvidas 
              </Link>*/}
            </div>
            <button className="md:hidden text-white w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/a0e40bb1d6da5d8f8a1e19f04aec7bbc/2bdfba113471e83d6d44adfc17718cb9.jfif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bem-vindo à Plataforma InGUP360
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              A InGUP360 – Plataforma de Competências Gerenciais para a Gestão Universitária – tem como missão apoiar gestores universitários no desenvolvimento de competências essenciais para a excelência na gestão do ensino superior.
            </p>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-[#FFD166]">
              Aqui você encontrará conteúdos personalizados, materiais complementares e respostas às principais dúvidas sobre gestão acadêmica e administrativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/plataforma" className="bg-[#FFD166] text-[#1B365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD166]/90 transition-colors cursor-pointer whitespace-nowrap inline-block text-center">
                ➝ Iniciar Jornada de Conhecimento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
              Por que escolher nossa plataforma?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-target-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Foco Específico</h3>
              <p className="text-gray-600">Conteúdo direcionado para gestão universitária pública</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Inovação</h3>
              <p className="text-gray-600">Metodologias práticas e inovadoras</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Excelência</h3>
              <p className="text-gray-600">Elevação da eficiência e qualidade na gestão do ensino superior</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-2xl text-[#1B365D]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Comunidade</h3>
              <p className="text-gray-600">Rede de gestores universitários conectados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transforme sua gestão universitária
          </h2>
          <p className="text-xl text-[#4F81C7] mb-10 max-w-2xl mx-auto">
            Junte-se a uma comunidade de gestores comprometidos com a excelência no ensino superior público
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B365D] border-t border-[#4F81C7]/20 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-white font-['Open_Sans'] font-bold text-xl mb-4">
              InGUP360
            </div>
            <p className="text-[#4F81C7] mb-6 max-w-2xl mx-auto">
              Capacitação gerencial para excelência na gestão universitária pública
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">Contato</h4>
              <p className="text-[#4F81C7]">renata.lfs@ufopa.edu.br</p>
            </div>
          </div>
          
          <div className="border-t border-[#4F81C7]/20 mt-10 pt-8 text-center text-[#4F81C7]">
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
