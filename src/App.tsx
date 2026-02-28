import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Download, 
  Users, 
  Calendar, 
  Search, 
  ArrowLeft, 
  Printer, 
  Menu, 
  X,
  Shield,
  Cross,
  ScrollText,
  Zap,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Instagram,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VOLUMES, Volume, Encounter } from './data/volumes';

// --- Components ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9c042" />
        <stop offset="50%" stopColor="#f5a623" />
        <stop offset="100%" stopColor="#d48411" />
      </linearGradient>
    </defs>
    {/* Modern Real Fish Body */}
    <path 
      d="M5 50 C 15 30, 45 25, 70 40 C 85 50, 95 45, 95 50 C 95 55, 85 50, 70 60 C 45 75, 15 70, 5 50 Z" 
      fill="url(#goldGradient)" 
      fillOpacity="0.2"
      stroke="url(#goldGradient)" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    {/* Fin detail */}
    <path 
      d="M40 35 C 45 25, 55 25, 60 35" 
      stroke="url(#goldGradient)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M40 65 C 45 75, 55 75, 60 65" 
      stroke="url(#goldGradient)" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    {/* Priest Crown (Modernized) */}
    <path 
      d="M45 42 L48 35 L51 40 L54 35 L57 42" 
      stroke="url(#goldGradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Eye */}
    <circle cx="20" cy="48" r="2" fill="url(#goldGradient)" />
    {/* Cross in the body */}
    <path 
      d="M75 45 L75 55 M70 50 L80 50" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

const BackgroundWatermark = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.08] no-print">
    <svg className="absolute -right-20 -bottom-20 w-[600px] h-[600px]" viewBox="0 0 100 100" fill="currentColor">
      {/* Silhouette of a man with a staff (Moses/Shepherd) */}
      <path d="M50 20 C 55 20, 55 30, 50 30 C 45 30, 45 20, 50 20 Z" /> {/* Head */}
      <path d="M45 32 L55 32 L60 60 L55 90 L45 90 L40 60 Z" /> {/* Body */}
      <path d="M35 35 L45 45 M65 35 L55 45" stroke="currentColor" strokeWidth="2" /> {/* Arms */}
      <path d="M30 20 L30 95" stroke="currentColor" strokeWidth="3" /> {/* Staff */}
    </svg>
    <svg className="absolute -left-20 top-40 w-[400px] h-[400px]" viewBox="0 0 100 100" fill="currentColor">
      {/* Scroll/Tablets icon */}
      <rect x="20" y="20" width="30" height="60" rx="2" />
      <rect x="50" y="20" width="30" height="60" rx="2" />
      <path d="M25 30 H45 M25 40 H45 M25 50 H45 M55 30 H75 M55 40 H75 M55 50 H75" stroke="black" strokeWidth="1" />
    </svg>
  </div>
);

const Navbar = ({ currentPath, onNavigate }: { currentPath: string, onNavigate: (path: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '#/' },
    { name: 'Metodologia', path: '#/metodologia' },
    { name: 'Antigo Testamento', path: '#/at' },
    { name: 'Novo Testamento', path: '#/nt' },
    { name: 'Contatos', path: '#/contatos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('#/')}>
            <Logo className="w-10 h-10 text-gold-500 mr-2" />
            <span className="font-serif text-xl font-bold tracking-tight text-gold">HOMENS NA PALAVRA</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.path);
                }}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  currentPath === link.path ? 'text-gold-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-card border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.path);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-white/5 py-12 no-print">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-4">
            <Logo className="w-6 h-6 text-gold-500 mr-2" />
            <span className="font-serif text-lg font-bold text-gold">HOMENS NA PALAVRA 360°</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-md">
            Formação Bíblica Expositiva pelas 4 Lentes: Exegética • Bíblico-Redentiva • Sistemática • Prática.
            Um ministério focado no avivamento masculino cristocêntrico.
          </p>
        </div>
        <div className="flex flex-col md:items-end space-y-2">
          <span className="text-zinc-400 text-sm font-medium">Acesse: biolink.info/institutopalavra</span>
          <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} Instituto Palavra. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);

const Toast = ({ message, visible }: { message: string, visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-8 right-8 z-50 bg-gold-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-medium">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- Views ---

const Home = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const lenses = [
    { icon: <ScrollText className="w-8 h-8" />, title: 'Exegética', desc: 'Foco no texto, contexto e palavras originais (hebraico/grego).' },
    { icon: <Cross className="w-8 h-8" />, title: 'Bíblico-Redentiva', desc: 'Criação-queda-redenção-consumação; Cristo como o centro de tudo.' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Sistemática', desc: 'Doutrinas envolvidas e síntese bíblica coerente.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Prática', desc: 'Aplicação masculina, discipulado e avivamento real.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="hero" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(113,64,20,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Homens forjados pela <span className="text-gold">Palavra</span>, livro por livro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-4xl mx-auto"
          >
            Exposição cristocêntrica dos homens da Bíblia através de 4 lentes teológicas e altamente práticas para a era digital.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => onNavigate('#/at')} className="px-8 py-4 gold-gradient rounded-full font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-gold-900/20">
              Explorar Antigo Testamento
            </button>
            <button onClick={() => onNavigate('#/nt')} className="px-8 py-4 border border-gold-600/50 rounded-full font-bold text-gold-400 hover:bg-gold-600/10 transition-colors">
              Explorar Novo Testamento
            </button>
            <button onClick={() => onNavigate('#/volume/pentateuco')} className="px-8 py-4 bg-zinc-900 rounded-full font-bold text-white hover:bg-zinc-800 transition-colors">
              Começar Volume 1
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modelo PALAVRA 360 Section */}
      <section id="metodologia" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 uppercase tracking-widest">Modelo PALAVRA 360°</h2>
            <p className="text-gold-500 font-medium mb-6">Uma visão completa e profunda da masculinidade bíblica</p>
            <div className="w-24 h-1 bg-gold-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lenses.map((lens, idx) => (
              <motion.div 
                key={lens.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:border-gold-500/30 transition-colors group"
              >
                <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform">{lens.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{lens.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="colecao" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-10 rounded-3xl border-gold-600/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ScrollText className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Antigo Testamento</h2>
              <p className="text-zinc-400 mb-8">A fundação da promessa, a lei e a história da redenção através dos patriarcas e profetas.</p>
              <button onClick={() => onNavigate('#/at')} className="flex items-center text-gold-400 font-bold hover:text-gold-300 transition-colors">
                Ver Volumes <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="glass-card p-10 rounded-3xl border-gold-600/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cross className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Novo Testamento</h2>
              <p className="text-zinc-400 mb-8">O cumprimento da promessa em Cristo, a missão da igreja e a esperança da glória futura.</p>
              <button onClick={() => onNavigate('#/nt')} className="flex items-center text-gold-400 font-bold hover:text-gold-300 transition-colors">
                Ver Volumes <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section id="como-usar" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Como Usar</h2>
            <p className="text-zinc-400">Flexibilidade para o seu crescimento espiritual</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Individual', desc: 'Estudo pessoal diário com foco em devocional e profundidade teológica.' },
              { title: 'Em Grupo', desc: 'Dinâmica de pequenos grupos com perguntas para compartilhamento e oração.' },
              { title: 'Liderança', desc: 'Treinamento para líderes de ministérios masculinos forjarem novos discípulos.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 bg-gold-600/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  {item.title[0]}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revival Section */}
      <section id="avivamento" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-900/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gold">Avivamento Masculino</h2>
          <p className="text-xl md:text-2xl italic text-zinc-300 leading-relaxed">
            "Não somos chamados para sermos apenas bons homens, mas homens de Deus. A responsabilidade espiritual, a santidade no secreto e a liderança sacrificial no lar são os frutos de um homem forjado pela Palavra. O mundo precisa de homens que tremem diante da Escritura e se curvam diante do Cordeiro."
          </p>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contatos" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contatos</h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center">
              <Mail className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">E-mail</h3>
              <p className="text-zinc-400 text-sm">contato@institutopalavra.info</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <Phone className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-zinc-400 text-sm">+55 (00) 00000-0000</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <Instagram className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Instagram</h3>
              <p className="text-zinc-400 text-sm">@institutopalavra</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Localização</h3>
              <p className="text-zinc-400 text-sm">Brasil</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const VolumeGrid = ({ volumes, title, subtitle, onNavigate }: { volumes: Volume[], title: string, subtitle: string, onNavigate: (path: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');

  const sections = ['Todos', ...Array.from(new Set(volumes.map(v => v.section)))];

  const filteredVolumes = volumes.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          v.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'Todos' || v.section === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          <p className="text-zinc-400 text-lg">{subtitle}</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {sections.map(s => (
              <button
                key={s}
                onClick={() => setActiveFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === s ? 'bg-gold-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar volume..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVolumes.map((v, idx) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onNavigate(`#/volume/${v.id}`)}
              className="glass-card p-8 rounded-2xl cursor-pointer hover:border-gold-500/50 transition-all group"
            >
              <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">{v.section}</div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold-400 transition-colors">{v.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-2">{v.subtitle}</p>
              <div className="flex items-center text-gold-500 font-bold text-sm">
                Explorar Volume <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </motion.div>
          ))}
          {filteredVolumes.length === 0 && (
            <div className="col-span-full text-center py-24 text-zinc-500">
              Nenhum volume encontrado para sua busca.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VolumeDetail = ({ volumeId, onNavigate, showToast }: { volumeId: string, onNavigate: (path: string) => void, showToast: (msg: string) => void }) => {
  const volume = VOLUMES.find(v => v.id === volumeId);
  const [completedEncounters, setCompletedEncounters] = useState<string[]>([]);
  const [expandedEncounter, setExpandedEncounter] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`progress_${volumeId}`);
    if (saved) setCompletedEncounters(JSON.parse(saved));
    window.scrollTo(0, 0);
  }, [volumeId]);

  if (!volume) return <div className="pt-32 text-center">Volume não encontrado.</div>;

  const progress = volume.encounters.length > 0 
    ? Math.round((completedEncounters.length / volume.encounters.length) * 100) 
    : 0;

  const toggleComplete = (id: string) => {
    const newCompleted = completedEncounters.includes(id)
      ? completedEncounters.filter(item => item !== id)
      : [...completedEncounters, id];
    
    setCompletedEncounters(newCompleted);
    localStorage.setItem(`progress_${volumeId}`, JSON.stringify(newCompleted));
    
    if (!completedEncounters.includes(id)) {
      showToast('Encontro concluído!');
    }
  };

  const nextVolume = VOLUMES.find(v => {
    const currentIndex = VOLUMES.findIndex(vol => vol.id === volumeId);
    return VOLUMES[currentIndex + 1];
  });

  return (
    <div className="pt-16 pb-24">
      {/* Progress Bar Fixed */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-zinc-900 z-40 no-print">
        <motion.div 
          className="h-full bg-gold-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <button 
          onClick={() => onNavigate(volume.category === 'AT' ? '#/at' : '#/nt')}
          className="flex items-center text-zinc-500 hover:text-white mb-8 transition-colors no-print"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para {volume.category === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}
        </button>

        <div className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{volume.title}</h1>
              <p className="text-gold-500 font-medium text-lg">{volume.subtitle}</p>
            </div>
            <button onClick={() => window.print()} className="p-2 text-zinc-500 hover:text-white transition-colors no-print">
              <Printer className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-wrap gap-4 no-print">
            <button className="px-6 py-2 gold-gradient rounded-full font-bold text-white text-sm">Começar</button>
            <button className="px-6 py-2 border border-white/10 rounded-full font-bold text-zinc-300 text-sm flex items-center">
              <Download className="mr-2 w-4 h-4" /> Baixar Guia (PDF)
            </button>
            <button className="px-6 py-2 border border-white/10 rounded-full font-bold text-zinc-300 text-sm flex items-center">
              <Calendar className="mr-2 w-4 h-4" /> Ver Plano (12 semanas)
            </button>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl mb-12">
          <h2 className="text-xl font-serif font-bold mb-4 text-gold-400">Introdução</h2>
          <p className="text-zinc-300 leading-relaxed">{volume.description}</p>
        </div>

        {/* Encounters List */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-serif font-bold mb-6">Módulos e Encontros</h2>
          {volume.encounters.length > 0 ? (
            volume.encounters.map((encounter, idx) => (
              <div key={encounter.id} className="glass-card rounded-2xl overflow-hidden border-white/5">
                <div 
                  className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedEncounter(expandedEncounter === encounter.id ? null : encounter.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      completedEncounters.includes(encounter.id) ? 'bg-green-600 text-white' : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {completedEncounters.includes(encounter.id) ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                    </div>
                    <h3 className="font-serif font-bold md:text-lg">{encounter.title}</h3>
                  </div>
                  {expandedEncounter === encounter.id ? <ChevronUp className="text-zinc-500" /> : <ChevronDown className="text-zinc-500" />}
                </div>
                
                <AnimatePresence>
                  {expandedEncounter === encounter.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5"
                    >
                      <div className="p-8 space-y-8">
                        <div>
                          <h4 className="text-gold-500 font-bold text-sm uppercase tracking-widest mb-2">Texto Base</h4>
                          <p className="text-zinc-200 text-lg font-serif italic">{encounter.baseText}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <h5 className="font-bold text-gold-400 flex items-center"><ScrollText className="w-4 h-4 mr-2" /> Exegética</h5>
                            <p className="text-zinc-400 text-sm">{encounter.lenses.exegetical}</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="font-bold text-gold-400 flex items-center"><Cross className="w-4 h-4 mr-2" /> Bíblico-Redentiva</h5>
                            <p className="text-zinc-400 text-sm">{encounter.lenses.biblicalRedemptive}</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="font-bold text-gold-400 flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Sistemática</h5>
                            <p className="text-zinc-400 text-sm">{encounter.lenses.systematic}</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="font-bold text-gold-400 flex items-center"><Zap className="w-4 h-4 mr-2" /> Prática</h5>
                            <p className="text-zinc-400 text-sm">{encounter.lenses.practical}</p>
                          </div>
                        </div>

                        <div className="pt-4 no-print">
                          <button 
                            onClick={() => toggleComplete(encounter.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all ${
                              completedEncounters.includes(encounter.id)
                                ? 'bg-green-600/20 text-green-500 border border-green-600/30'
                                : 'bg-gold-600 text-white hover:scale-105'
                            }`}
                          >
                            {completedEncounters.includes(encounter.id) ? (
                              <>
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Concluído</span>
                              </>
                            ) : (
                              <span>Marcar como Concluído</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-12 glass-card rounded-2xl text-zinc-500">
              Conteúdo em breve para este volume.
            </div>
          )}
        </div>

        {/* Resources */}
        <div className="mb-16 no-print">
          <h2 className="text-2xl font-serif font-bold mb-6">Recursos Adicionais</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Slides', 'Apostila', 'Áudio', 'Guia do Líder', 'Perguntas em Grupo'].map(res => (
              <div key={res} className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white">{res}</span>
                <Download className="w-4 h-4 text-zinc-600 group-hover:text-gold-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Community CTA */}
        <div className="glass-card p-10 rounded-3xl text-center mb-16 border-gold-600/30 no-print">
          <Users className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">Comunidade de Homens</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Não caminhe sozinho. Junte-se a centenas de homens que estão estudando este volume agora mesmo.</p>
          <button className="px-10 py-4 gold-gradient rounded-full font-bold text-white hover:scale-105 transition-transform">
            Entrar no grupo de homens
          </button>
        </div>

        {/* Next Volume */}
        {nextVolume && (
          <div className="no-print">
            <h2 className="text-xl font-serif font-bold mb-6 text-zinc-500">Próximo Volume</h2>
            <div 
              onClick={() => onNavigate(`#/volume/${nextVolume.id}`)}
              className="glass-card p-8 rounded-2xl cursor-pointer hover:border-gold-500/30 transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-gold-500 uppercase mb-2">{nextVolume.section}</div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-gold-400 transition-colors">{nextVolume.title}</h3>
              </div>
              <ChevronRight className="w-8 h-8 text-zinc-700 group-hover:text-gold-500 transition-colors" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [path, setPath] = useState(window.location.hash || '#/');
  const [toast, setToast] = useState({ message: '', visible: false });

  useEffect(() => {
    const handleHashChange = () => setPath(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
    setPath(newPath);
  };

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const renderView = () => {
    if (path === '#/') return <Home onNavigate={navigate} />;
    if (path === '#/metodologia') {
      // Scroll to methodology section on home
      setTimeout(() => {
        const el = document.getElementById('metodologia');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return <Home onNavigate={navigate} />;
    }
    if (path === '#/contatos') {
      // Scroll to contacts section on home
      setTimeout(() => {
        const el = document.getElementById('contatos');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return <Home onNavigate={navigate} />;
    }
    if (path === '#/at') return (
      <VolumeGrid 
        volumes={VOLUMES.filter(v => v.category === 'AT')} 
        title="Antigo Testamento" 
        subtitle="A revelação progressiva da promessa de Deus."
        onNavigate={navigate}
      />
    );
    if (path === '#/nt') return (
      <VolumeGrid 
        volumes={VOLUMES.filter(v => v.category === 'NT')} 
        title="Novo Testamento" 
        subtitle="O cumprimento final em Cristo e a vida da Igreja."
        onNavigate={navigate}
      />
    );
    if (path.startsWith('#/volume/')) {
      const volumeId = path.replace('#/volume/', '');
      return <VolumeDetail volumeId={volumeId} onNavigate={navigate} showToast={showToast} />;
    }
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundWatermark />
      <Navbar currentPath={path} onNavigate={navigate} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
