import React from "react";
import { Star, GitFork, ExternalLink, Code2, Brain, BookOpen, Newspaper, Send, User, Lock, Sparkles, Cpu, GitBranch } from "lucide-react";
import ContactForm from "@/components/ContactForm";

// Mock Data Curado para Projetos
interface Project {
  id: string;
  name: string;
  description: string;
  category: "Mercado" | "Pesquisa";
  stack: string[];
  aiHighlights: string;
  isOpenSource?: boolean;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "webroker",
    name: "WeBroker",
    description: "Plataforma avançada para corretores (AHCME), centralizando dados e automatizando fluxos de trabalho do setor.",
    category: "Mercado",
    stack: ["Next.js", "Node.js", "Docker", "PostgreSQL"],
    aiHighlights: "Implementação de IA para análise de perfil de clientes e recomendação inteligente de portfólio."
  },
  {
    id: "cepcar",
    name: "CepCar",
    description: "Sistema inovador no setor automotivo para avaliação, gestão e precificação dinâmica de veículos.",
    category: "Mercado",
    stack: ["React", "Node.js", "Docker", "Redis"],
    aiHighlights: "Modelos preditivos para estimar valores de mercado e algoritmos de detecção de anomalias em anúncios."
  },
  {
    id: "velo",
    name: "Velo",
    description: "Aplicação corporativa focada em agilidade e gestão de ativos (AHCME), desenhada para alta escalabilidade.",
    category: "Mercado",
    stack: ["Next.js", "TypeScript", "Docker", "AWS"],
    aiHighlights: "Agentes de IA orquestrando roteirização otimizada e previsão de demandas em tempo real."
  },
  {
    id: "gig",
    name: "GIG",
    description: "Plataforma de economia criativa conectando talentos a oportunidades corporativas de forma totalmente ágil.",
    category: "Mercado",
    stack: ["Vue3", "Node.js", "Docker", "MongoDB"],
    aiHighlights: "Matching algorítmico impulsionado por LLMs (Large Language Models) para analisar de forma profunda soft e hard skills."
  },
  {
    id: "neo",
    name: "Projeto Neo (IA Core)",
    description: "Motor de inteligência artificial open-source focado em NLP e agentes. Sinta-se à vontade para explorar o código e enviar contribuições!",
    category: "Pesquisa",
    stack: ["Python", "LangChain", "Node.js", "Docker"],
    aiHighlights: "Arquitetura avançada RAG (Retrieval-Augmented Generation) para respostas precisas baseadas em documentação proprietária.",
    isOpenSource: true,
    githubUrl: "https://github.com/marcellopato/neo"
  },
  {
    id: "hal-ai-1",
    name: "Plataforma de Agentes (Confidencial)",
    description: "Sistema autônomo baseado nos conceitos de ecossistema Hal-AI para execução de tarefas complexas e tomadas de decisão sem intervenção humana constante.",
    category: "Pesquisa",
    stack: ["Next.js", "Node.js", "OpenAI API", "Docker"],
    aiHighlights: "Orquestração de múltiplos agentes de IA (Multi-Agent System) distribuídos para resolução de problemas corporativos em múltiplas etapas."
  }
];

function ProjectCard({ project, colorClass }: { project: Project; colorClass: string }) {
  return (
    <div className="glass-card p-6 md:p-8 flex flex-col h-full group relative overflow-hidden">
      {/* Subtle glow effect on hover */}
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-10 transition duration-500 blur-2xl ${colorClass}`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">
            <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
              {project.name}
            </span>
          </h3>
          {project.isOpenSource ? (
             <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 hover:bg-brand-green/20 transition-colors">
               <GitBranch size={12} /> Open Source
             </a>
          ) : project.category === "Pesquisa" ? (
             <span className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 cursor-default">
               <Lock size={12} /> Confidencial
             </span>
          ) : (
             <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 cursor-default">
               Mercado
             </span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6 flex-grow">
          <div className="flex items-start gap-2 text-brand-secondary bg-brand-secondary/5 border border-brand-secondary/10 rounded-lg p-4">
            <Sparkles size={18} className="shrink-0 mt-0.5" />
            <p className="text-sm font-medium leading-relaxed">{project.aiHighlights}</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-surface-border/50">
          <div className="flex flex-wrap items-center gap-2">
            <Cpu size={14} className="text-gray-500 mr-1" />
            {project.stack.map(tech => (
              <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-surface-hover text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const marketProjects = projects.filter(p => p.category === "Mercado");
  const confidentialProjects = projects.filter(p => p.category === "Pesquisa");

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-surface-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            Marcello Pato
          </div>
          <div className="space-x-8 text-sm font-medium text-gray-300 hidden md:flex items-center">
            <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
            <a href="#solucoes-mercado" className="hover:text-brand-primary transition-colors">Cases de Mercado</a>
            <a href="#ia-confidencial" className="hover:text-brand-secondary transition-colors">IA & Pesquisa</a>
            <a href="#artigos" className="hover:text-brand-primary transition-colors">Artigos</a>
            <a href="#contato" className="px-5 py-2.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-white transition-all">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-sm font-medium text-brand-primary">Especialista em Integração de IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Criando soluções com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-orange">
                Código & IA
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Olá, sou o <strong className="text-white">Marcello Pato</strong>. Engenheiro de Software especializado em construir experiências web modernas, sistemas escaláveis (Docker/Node/Next) e explorar os limites dos Agentes Autônomos de IA.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#solucoes-mercado" className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1">
                Explorar Soluções
              </a>
              <a href="#ia-confidencial" className="px-8 py-4 rounded-full glass-card text-white font-medium hover:text-brand-secondary transition-all flex items-center gap-2">
                Ver Pesquisas em IA
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] -z-10"></div>
      </section>

      {/* Projetos Mercado Section */}
      <section id="solucoes-mercado" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-lg bg-brand-primary/10 text-brand-primary">
              <Code2 size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Cases de Sucesso (Mercado)</h2>
              <p className="text-gray-400 mt-1">Sistemas robustos de mercado integrados com Inteligência Artificial</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketProjects.map(project => (
              <ProjectCard key={project.id} project={project} colorClass="bg-brand-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Confidenciais (Hal-AI/Neo) */}
      <section id="ia-confidencial" className="py-24 relative bg-black/20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-lg bg-brand-secondary/10 text-brand-secondary">
              <Brain size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Inovações em IA & Agentes (Pesquisa)</h2>
              <p className="text-gray-400 mt-1">Pesquisas avançadas, ferramentas open-source e ecossistema Hal-AI</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {confidentialProjects.map(project => (
              <ProjectCard key={project.id} project={project} colorClass="bg-brand-secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-lg bg-brand-green/10 text-brand-green">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Sobre Mim</h2>
              <p className="text-gray-400 mt-1">Conheça um pouco da minha trajetória</p>
            </div>
          </div>
          <div className="glass-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
              <p>
                Sou apaixonado por tecnologia e resolução de problemas complexos. Ao longo da minha carreira, desenvolvi sistemas utilizando arquiteturas modernas e escaláveis (como Docker, Node e Next.js), sempre focado na qualidade do código e na experiência do usuário final.
              </p>
              <p>
                Atualmente, <strong>todos os meus projetos envolvem Inteligência Artificial de forma profunda</strong>. Em minhas soluções para o mercado, busco não apenas automatizar processos, mas injetar modelos preditivos, agentes autônomos e capacidades de LLM diretamente no core business das aplicações corporativas.
              </p>
              <p>
                Tenho um forte envolvimento com projetos em infraestruturas privadas (AHCME) e pesquisas de base (ecossistema Hal-AI e Neo), onde exploro sistemas multi-agentes e arquiteturas de RAG (Retrieval-Augmented Generation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Section */}
      <section id="artigos" className="py-24 relative bg-black/20">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Artigos e Publicações</h2>
              <p className="text-gray-400 mt-1">Meus últimos textos no LinkedIn</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.linkedin.com/in/marcello-dantas-correia" target="_blank" rel="noreferrer" className="glass-card p-8 group hover:border-brand-primary/50 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-brand-secondary">
                    <Newspaper size={20} />
                    <span className="text-sm font-medium">Publicado no LinkedIn</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">A Evolução dos Agentes de IA na Engenharia de Software</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Neste artigo, discuto como os grandes modelos de linguagem estão mudando o paradigma do desenvolvimento de sistemas complexos...
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                Ler artigo completo &rarr;
              </div>
            </a>

            <a href="https://www.linkedin.com/in/marcello-dantas-correia" target="_blank" rel="noreferrer" className="glass-card p-8 group hover:border-brand-orange/50 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-brand-secondary">
                    <Newspaper size={20} />
                    <span className="text-sm font-medium">Publicado no LinkedIn</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">Arquiteturas Escaláveis com Next.js e Node em Docker</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Dicas e boas práticas para construir sistemas web de alta performance integrados a serviços em containers...
                </p>
              </div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                Ler artigo completo &rarr;
              </div>
            </a>
          </div>
          <div className="text-center mt-10">
             <a href="https://www.linkedin.com/in/marcello-dantas-correia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-surface-border hover:bg-surface-hover text-white transition-all">
                <Newspaper size={18} />
                <span>Ver meu perfil no LinkedIn</span>
             </a>
          </div>
        </div>
      </section>

      {/* Contato Section com reCAPTCHA UI */}
      <section id="contato" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/20 text-brand-primary mb-6">
              <Send size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Vamos conversar?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de escalar sua visão com Inteligência Artificial.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
