import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Cpu,
  ExternalLink,
  Menu,
  X,
  Terminal,
  ShieldCheck,
  Layout,
  Search,
  FileText
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen selection:bg-primary-500 selection:text-white">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Terminal className="text-primary-500 w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">Eduardo<span className="text-primary-500">.Dev</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-primary-500 transition-colors px-3 py-2 rounded-md font-medium">Home</a>
                <a href="#sobre" className="hover:text-primary-500 transition-colors px-3 py-2 rounded-md font-medium">Sobre</a>
                <a href="#skills" className="hover:text-primary-500 transition-colors px-3 py-2 rounded-md font-medium">Stack</a>
                <a href="#projetos" className="hover:text-primary-500 transition-colors px-3 py-2 rounded-md font-medium">Projetos</a>
                <a href="#contato" className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-md font-medium transition-all">Contato</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={toggleMenu} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#sobre" onClick={toggleMenu} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Sobre</a>
              <a href="#skills" onClick={toggleMenu} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#projetos" onClick={toggleMenu} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Projetos</a>
              <a href="#contato" onClick={toggleMenu} className="block bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium mt-4">Fale Comigo</a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold border border-primary-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Disponível para novos projetos
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Eduardo Antônio Góes
            <span className="block text-slate-400 text-2xl md:text-3xl mt-2 font-normal">
              Desenvolvedor Full-Stack
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Unindo a capacidade tecnológica do <span className="text-accent-500 font-semibold">Java & Spring</span> com a agilidade do <span className="text-primary-500 font-semibold">React & Low-Code</span>. Crio soluções escaláveis que resolvem problemas reais de negócio.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://linkedin.com/in/eduardo-antonio-goes-a04062252/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/edugoesx" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        {/* Abstract Visual Representation */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-sm">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-700 pb-2">
                <span>developer_profile.json</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="text-green-400">
                <span className="text-purple-400">const</span> developer = {'{'}
              </div>
              <div className="pl-4 text-slate-300">
                name: <span className="text-yellow-300">"Eduardo Góes"</span>,
              </div>
              <div className="pl-4 text-slate-300">
                role: <span className="text-yellow-300">"Full-Stack Dev"</span>,
              </div>
              <div className="pl-4 text-slate-300">
                location: <span className="text-yellow-300">"Maringá, PR"</span>,
              </div>
              <div className="pl-4 text-slate-300">
                stack: [<span className="text-yellow-300">"Java"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"n8n"</span>]
              </div>
              <div className="text-green-400">{'}'};</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="sobre" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Sou estudante de <strong className="text-white">Engenharia de Software</strong> na Unicesumar e resido em Maringá-PR.
            Minha experiência profissional atual envolve o desenvolvimento de interfaces complexas
            e automação de processos escaláveis no setor de tecnologia.
            <br /><br />
            Meu diferencial é a capacidade híbrida: possuo a base técnica sólida em <strong className="text-accent-500">Back-end (Java/Spring)</strong>,
            mas também domino ferramentas de <strong className="text-primary-500">No-Code e IA</strong> para entregar valor mais rápido.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">2+</h3>
              <p className="text-sm text-slate-400">Anos com React.JS</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">Full</h3>
              <p className="text-sm text-slate-400">Stack Developer</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">Solar</h3>
              <p className="text-sm text-slate-400">Tech Experience</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">2027</h3>
              <p className="text-sm text-slate-400">Formação Prevista</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Stack Tecnológica</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card Backend */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-accent-500">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Core & Backend</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Java 17+ (Spring Boot)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Node.JS (Express)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Spring Security / JWT</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>SQL (Postgres) & NoSQL (MongoDB)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Git & GitHub</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Docker & DevOps</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>Python</li>
            </ul>
          </div>

          {/* Card Frontend */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-primary-500">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend Moderno</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>React.js & Vite</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>TypeScript</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>Angular</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>Tailwind CSS</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>Figma</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>Bootstrap</li>
            </ul>
          </div>

          {/* Card Automation */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-purple-500">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Automação & IA</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>n8n (Workflows Complexos)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Bubble.io (SaaS Rapid Dev)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Integração com LLMs (GPT/Gemini)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>APIs RESTful & Webhooks</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Supabase</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            Projetos em Destaque
            <span className="text-sm font-normal text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Selecionados</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Projeto 1 */}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Database size={48} className="text-slate-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">ERP de Energia Solar & Automação</h3>
                  <span className="bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded">Profissional</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Atuação na Sustenta Sol. Desenvolvimento de interfaces de venda e gestão. Integração de múltiplos ERPs e CRMs via n8n para orquestração de dados críticos.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Bubble</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">React</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">n8n</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Supabase</span>
                </div>
              </div>
            </div>

            {/* Novo Projeto*/}

            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-amber-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FileText size={48} className="text-amber-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">Node.js Blog System</h3>
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded">Full Stack</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Plataforma completa node.js (express) de blog com painel administrativo e autenticação JWT via cookies. Renderização Server-Side (SSR) com EJS e persistência no MongoDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Express</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">EJS</span>
                </div>
                <a href="https://github.com/edugoesx/nodejsblog" target="_blank" className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Cpu size={48} className="text-purple-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">IA CSS Generator</h3>
                  <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">Pessoal/Frontend</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Aplicação web integrada ao modelo Groq para geração automática de estilos e animações CSS via prompt. Orquestração de dados via n8n.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Groq API</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Fetch</span>
                </div>
                <a href="https://github.com/edugoesx/ia-agent-css-animation" target="_blank" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-green-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Code2 size={48} className="text-accent-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">API Auth Security</h3>
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Backend</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Sistema robusto de autenticação e gestão de usuários com Spring Security e JWT. Foco em arquitetura limpa e boas práticas de segurança.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Java 21</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Spring Boot</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">JWT</span>
                </div>
                <a href="https://github.com/edugoesx/login-auth-api-Back-End" target="_blank" className="flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/*Projeto 4*/}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-red-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Layout size={48} className="text-red-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">Auth Client Angular</h3>
                  <span className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded">Frontend</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Interface reativa para autenticação JWT. Desenvolvida como o Front da API Auth Security. Implementação de Guards, Interceptors e gestão de estado com RxJS para segurança no client-side.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">RxJS</span>
                </div>
                <a href="https://github.com/edugoesx/login-auth-api-Front-End" target="_blank" className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/*Projeto 5 */}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-green-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <ShieldCheck size={48} className="text-accent-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">TwitterSpring API</h3>
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Backend</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Arquitetura escalável simulando uma rede social. Sistema completo de segurança com OAuth2 Resource Server e validação JWT.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Java 21</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Spring Security</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <a href="https://github.com/edugoesx/twitterspring" target="_blank" className="flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/*Projeto 6*/}
            <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Search size={48} className="text-purple-400" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">GitHub User Fetcher</h3>
                  <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">Web</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  Aplicação de busca em tempo real consumindo a API do GitHub. Uso de funções assíncronas (Async/Await) para listagem de repositórios.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">Fetch API</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">CSS3</span>
                </div>
                <a href="https://github.com/edugoesx/fetch-github-api" target="_blank" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 mt-auto">
                  Ver Código <ExternalLink size={14} />
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer id="contato" className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Estou sempre aberto a discutir novas oportunidades, projetos de automação ou desenvolvimento full-stack.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:edu.goes10@gmail.com" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-4 rounded-xl transition-all w-full md:w-auto justify-center">
              <Mail className="text-primary-500" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Email</p>
                <p className="font-medium text-white">edu.goes10@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/eduardo-antonio-goes-a04062252/" target="_blank" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-4 rounded-xl transition-all w-full md:w-auto justify-center">
              <Linkedin className="text-primary-500" />
              <div className="text-left">
                <p className="text-xs text-slate-400">LinkedIn</p>
                <p className="font-medium text-white">/eduardo-antonio-goes</p>
              </div>
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Eduardo Antônio Góes. Desenvolvido com React & Tailwind v4.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;