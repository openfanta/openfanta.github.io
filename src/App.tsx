import { motion, AnimatePresence } from 'motion/react';
import { Github, Code2, Calculator, Users, Shield, ArrowRight, Terminal, Star, Menu, X } from 'lucide-react';
import { useState, ReactNode, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const words = [
    "DEL POPOLO.",
    "GRATUITO.",
    "COERENTE.",
    "OPEN SOURCE."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-neon selection:text-darker">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-darker/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon rounded-sm flex items-center justify-center transform -rotate-6">
              <Star className="w-5 h-5 text-darker fill-darker" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">OpenFanta</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-white/60">
            <a href="#features" className="hover:text-neon transition-colors">/features</a>
            <a href="#algorithm" className="hover:text-neon transition-colors">/algoritmo</a>
            <a href="#community" className="hover:text-neon transition-colors">/community</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full font-mono text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-darker border-b border-white/10 p-6 flex flex-col gap-4 font-mono text-sm">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-neon transition-colors py-2">/features</a>
            <a href="#algorithm" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-neon transition-colors py-2">/algoritmo</a>
            <a href="#community" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-neon transition-colors py-2">/community</a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-lg mt-4 justify-center"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-neon/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon/30 bg-neon/5 text-neon font-mono text-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            v1.0.0-beta in sviluppo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-[0.9] tracking-tighter mb-8 min-h-[1.8em] sm:min-h-[1.8em]"
          >
            IL FANTACALCIO<br />
            <div className="h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-green-400 to-neon animate-gradient-x block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mb-12 font-light leading-relaxed"
          >
            Gratuito. Senza pubblicità. Open Source.
            Voti basati su algoritmi e statistiche, non sulle opinioni dei giornalisti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#community" className="bg-neon text-darker font-bold font-display px-8 py-4 rounded-none hover:bg-[#b3e600] transition-colors flex items-center justify-center gap-2 text-lg">
              Contribuisci ora <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white font-mono px-8 py-4 rounded-none hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <Terminal className="w-5 h-5" /> git clone openfanta
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 border-t border-white/10 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Le regole del gioco sono cambiate.
            </h2>
            <p className="text-white/60 font-mono text-sm max-w-2xl">
              // Abbiamo preso tutto ciò che odiavamo del fantacalcio tradizionale e lo abbiamo riscritto da zero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-neon" />}
              title="100% Gratuito & No Ads"
              description="Nessun abbonamento premium, nessun banner invasivo. OpenFanta è e sarà sempre gratuito per tutti, mantenuto dalla community."
              delay={0.1}
            />
            <FeatureCard
              icon={<Calculator className="w-8 h-8 text-neon" />}
              title="Voti Algoritmici"
              description="Basta polemiche sui voti dei giornalisti. I nostri voti sono calcolati matematicamente basandosi su statistiche reali (Opta/StatsBomb)."
              delay={0.2}
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-neon" />}
              title="Guidato dalla Community"
              description="Vuoi una nuova regola? Apri una issue su GitHub. Le funzionalità più votate vengono implementate dalla community e rilasciate per tutti."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Algorithm Section */}
      <section id="algorithm" className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              La matematica non tifa per nessuno.
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Il nostro algoritmo analizza oltre 200 metriche per partita: passaggi chiave, xG, xA, contrasti vinti, posizionamento e molto altro. Il risultato è un voto oggettivo, trasparente e riproducibile.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                <span className="text-white/80">Nessun bias giornalistico o simpatie</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                <span className="text-white/80">Formula open source e verificabile su GitHub</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-neon/10 blur-2xl rounded-full pointer-events-none" />
            <div className="bg-surface border border-white/10 rounded-xl p-6 font-mono text-xs sm:text-sm overflow-x-auto relative z-10 shadow-2xl">
              <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="text-white/70">
                <code className="language-typescript">
                  {`function calculateGrade(stats: PlayerStats): number {
  const baseGrade = 6.0;
  
  // Offensive impact (Expected Goals & Assists)
  const offensiveImpact = (stats.xG * 1.5) + (stats.xA * 1.2);
  
  // Defensive impact (Tackles, Interceptions)
  const defensiveImpact = (stats.tacklesWon * 0.2) 
                        + (stats.interceptions * 0.15);
                        
  // Mistakes penalty
  const mistakes = stats.errorsLeadingToShot * -0.5;
  
  let finalGrade = baseGrade 
                 + offensiveImpact 
                 + defensiveImpact 
                 + mistakes;
  
  // Normalize between 1 and 10
  return Math.min(Math.max(finalGrade, 1), 10);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 bg-neon text-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Code2 className="w-16 h-16 mx-auto mb-8" />
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            COSTRUITO DA NOI,<br />PER NOI.
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-80 mb-12 max-w-2xl mx-auto">
            OpenFanta non è di un'azienda, è di chi ci gioca. Proponi idee, scrivi codice, migliora l'algoritmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-darker text-white font-bold font-display px-8 py-4 hover:bg-darker/90 transition-colors flex items-center justify-center gap-2 text-lg">
              <Github className="w-5 h-5" /> Apri una Issue
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-darker text-darker font-bold font-display px-8 py-4 hover:bg-darker/10 transition-colors flex items-center justify-center gap-2 text-lg">
              Unisciti al Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center md:text-left bg-darker">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-neon rounded-sm flex items-center justify-center transform -rotate-6">
              <Star className="w-3 h-3 text-darker fill-darker" />
            </div>
            <span className="font-display font-bold text-lg">OpenFanta</span>
          </div>
          <div className="text-white/40 font-mono text-sm">
            Distribuito sotto licenza MIT. Fatto con <span className="text-neon">♥</span> dalla community.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="p-8 border border-white/10 bg-darker hover:border-neon/50 transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-neon/20 transition-colors" />
      <div className="mb-6 p-4 bg-white/5 inline-block rounded-lg group-hover:bg-neon/10 transition-colors relative z-10">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-white/60 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
}

