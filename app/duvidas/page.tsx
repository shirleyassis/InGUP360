
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona a trilha de aprendizagem da InGUP360?",
      answer: "A trilha está organizada em 3 temas principais: Planejamento Estratégico, Capacitação e Competências Gerenciais. Cada tema conta com conteúdos especializados, ferramentas práticas e materiais complementares que você pode aplicar diretamente na sua gestão universitária."
    },
    {
      question: "Quais materiais estão disponíveis para download?",
      answer: "Oferecemos planilhas de planejamento, modelos de controle de aulas de campo, relatórios de acompanhamento orçamentário e diversas ferramentas de gestão. Todos os materiais são desenvolvidos especificamente para o contexto universitário público."
    },
    {
      question: "Como posso acessar as ferramentas complementares?",
      answer: "As ferramentas estão integradas na plataforma e podem ser baixadas através dos botões específicos em cada seção. Você encontrará modelos práticos que podem ser customizados para sua instituição."
    },
    {
      question: "A plataforma é específica para universidades públicas?",
      answer: "Sim, todo o conteúdo foi desenvolvido considerando as particularidades da gestão universitária pública, incluindo aspectos orçamentários, regulamentações específicas e desafios únicos do setor público de ensino superior."
    },
    {
      question: "Como posso aplicar os conhecimentos no meu dia a dia?",
      answer: "Cada tema da trilha vem acompanhado de casos práticos, ferramentas aplicáveis e exemplos reais. O conteúdo foi estruturado para que você possa implementar as soluções imediatamente na sua gestão."
    },
    {
      question: "Há suporte disponível durante o uso da plataforma?",
      answer: "Sim, oferecemos suporte completo através da nossa comunidade de gestores e canais de atendimento. Você também terá acesso à documentação completa e materiais de apoio."
    },
    {
      question: "Os materiais são atualizados regularmente?",
      answer: "Sim, nossos conteúdos e ferramentas são constantemente atualizados para refletir as melhores práticas e mudanças no cenário da gestão universitária pública."
    },
    {
      question: "Posso compartilhar os materiais com minha equipe?",
      answer: "Sim, os materiais podem ser compartilhados dentro da sua instituição para uso interno. Isso facilita a implementação das práticas de gestão em toda a sua equipe."
    },
    {
      question: "Como faço para me cadastrar na plataforma?",
      answer: "O cadastro é simples e gratuito. Basta clicar no botão 'Começar Agora' e preencher suas informações básicas. Em poucos minutos você terá acesso completo à plataforma."
    },
    {
      question: "Existe um período de teste gratuito?",
      answer: "Sim, oferecemos acesso completo por 30 dias para que você possa explorar todos os recursos e materiais disponíveis antes de tomar sua decisão."
    },
    {
      question: "A plataforma funciona em dispositivos móveis?",
      answer: "Sim, a InGUP360 é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores. Você pode acessar seus materiais a qualquer hora e lugar."
    },
    {
      question: "Como posso entrar em contato com o suporte?",
      answer: "Oferecemos múltiplos canais de suporte: chat online, e-mail e comunidade de usuários. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou necessidade."
    }
  ];

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
              <Link href="/duvidas" className="text-[#FFD166] font-semibold cursor-pointer">
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
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F4F4F4] border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1B365D] pr-4">{faq.question}</h3>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i className={`ri-arrow-down-s-line text-xl text-[#4F81C7] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}></i>
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
