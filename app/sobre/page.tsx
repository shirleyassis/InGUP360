
'use client';

import Link from 'next/link';

export default function About() {
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
              <Link href="/sobre" className="text-[#FFD166] font-semibold cursor-pointer">
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
        className="relative min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20innovative%20educational%20technology%2C%20professional%20academic%20environment%20showing%20collaboration%20and%20learning%2C%20bright%20contemporary%20setting%20with%20administrative%20buildings%20and%20students%2C%20inspiring%20educational%20atmosphere%20with%20digital%20transformation%20elements&width=1200&height=500&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#1B365D]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre a InGUP360
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD166] mb-8">
              Inovação e conhecimento para transformar a gestão universitária pública
            </p>
            <p className="text-lg leading-relaxed">
              Conheça nossa missão, valores e a história por trás desta plataforma revolucionária.
            </p>
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
                Sobre a Plataforma
              </h2>
              <div className="w-24 h-1 bg-[#FFD166] mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify">
                  A InGUP360 nasceu da necessidade de enfrentar um desafio recorrente nas Instituições Federais de Ensino Superior : a ausência de capacitação específica para gestores que assumem cargos estratégicos sem a devida preparação nos principais processos da universidade. Essa lacuna impactava diretamente a eficiência e a eficácia organizacional.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify">
                  Diante desse cenário, a plataforma foi concebida como uma ferramenta inovadora e prática, voltada para o aprimoramento da gestão universitária. Seu propósito é otimizar o tempo e os recursos das instituições, ao mesmo tempo em que promove o desenvolvimento contínuo de gestores por meio de conteúdos direcionados, acessíveis e aplicáveis ao dia a dia da administração pública universitária.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  A InGUP360 reúne conceitos-chave, metodologias e boas práticas de gestão, transformando conhecimento em ação e fortalecendo a cultura da inovação nas universidades públicas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Values Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-target-line text-2xl text-[#1B365D]"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capacitar gestores universitários com ferramentas práticas e conhecimentos específicos para otimizar a gestão das instituições públicas de ensino superior.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-eye-line text-2xl text-[#1B365D]"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser a principal referência em capacitação gerencial para universidades públicas, promovendo a excelência e inovação na gestão universitária.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-line text-2xl text-[#1B365D]"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Inovação, excelência, transparência, colaboração e compromisso com o desenvolvimento contínuo da gestão universitária pública.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Creator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B365D] mb-6">
                Sobre a Idealizadora
              </h2>
              <div className="w-24 h-1 bg-[#FFD166] mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#F8F9FA] rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-[#1B365D] mb-6">Renata Lisbôa</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg text-justify">
                      Renata Lisbôa é administradora e especialista em Gestão de Empresas e Negócios. Servidora pública há 11 anos, acumula 8 anos de experiência em cargos de gestão, atuando diretamente em processos administrativos e estratégicos no setor público.
                    </p>
                    
                    <p className="text-lg text-justify">
                      Atualmente, é mestranda do PROFNIT/UFOPA, onde desenvolve sua pesquisa com o objetivo de expandir a temática da inovação nas Ifes.
                    </p>
                    
                    <p className="text-lg text-justify">
                      Com a criação da InGUP360, Renata busca modernizar as ferramentas de capacitação voltadas aos gestores universitários, promovendo a cultura da inovação e transformando sua pesquisa em um produto tecnológico de impacto institucional e social.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#1B365D]">11</div>
                        <div className="text-sm text-gray-600">Anos no Serviço Público</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#1B365D]">8</div>
                        <div className="text-sm text-gray-600">Anos em Gestão</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-80 h-80 rounded-full border-4 border-[#FFD166] flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://static.readdy.ai/image/a0e40bb1d6da5d8f8a1e19f04aec7bbc/ad95494208372a2cbea71ac406afe26e.jfif" 
                    alt="Renata Lisbôa - Idealizadora da InGUP360"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#FFD166] mb-10 max-w-3xl mx-auto">
            Quer saber mais sobre a InGUP360 ou tem alguma sugestão? Estamos sempre abertos ao diálogo.
          </p>
          <div className="bg-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl text-[#1B365D]"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
            <p className="text-[#FFD166]">renata.lfs@ufopa.edu.br</p>
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
