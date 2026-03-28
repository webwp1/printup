import React from 'react';
import { motion } from 'motion/react';
import { 
  Printer, 
  PenTool, 
  Shirt, 
  Image as ImageIcon, 
  Package, 
  Layers, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Menu,
  X,
  ShoppingCart
} from 'lucide-react';

const services = [
  { 
    icon: Layers, 
    title: 'Tiskoviny & Vizitky', 
    desc: 'Prémiové papíry, ražba, parciální lak a speciální formáty pro dokonalý první dojem.',
    colSpan: 'md:col-span-2 lg:col-span-1'
  },
  { 
    icon: PenTool, 
    title: 'Reklamní předměty', 
    desc: 'Propisky, hrnky, klíčenky, flash disky a tisíce dalších předmětů s vaším logem.',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  { 
    icon: Shirt, 
    title: 'Potisk textilu', 
    desc: 'Trička, mikiny, pracovní oděvy i tašky. Využíváme sítotisk, transfer i výšivku.',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  { 
    icon: ImageIcon, 
    title: 'Velkoformátový tisk', 
    desc: 'Bannery, roll-upy, polepy výloh, aut a billboardy ve špičkovém rozlišení.',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  { 
    icon: Package, 
    title: 'Obalový materiál', 
    desc: 'Krabice na míru, potištěné lepící pásky a dárkové tašky pro váš e-shop.',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
];

const features = [
  { title: 'Špičková kvalita', desc: 'Nejmodernější tiskové technologie a prémiové materiály.' },
  { title: 'Rychlé dodání', desc: 'Většinu zakázek expedujeme do 48 hodin od schválení.' },
  { title: 'Osobní přístup', desc: 'Poradíme s výběrem materiálu přesně pro váš projekt.' },
];

const products = [
  {
    title: 'Tričko',
    price: 'od 25 €',
    desc: 'Prémiový tisk, příjemný materiál a individuální design podle vašich představ.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mikina s kapucí',
    price: 'od 40 €',
    desc: 'Teplá a stylová mikina s kapucí – perfektní pro každodenní nošení.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mikina bez kapuce',
    price: 'od 45 €',
    desc: 'Klasický střih bez kapuce (crewneck) – moderní, pohodlná a ideální na každý den.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<typeof products[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-indigo-500 selection:text-white text-zinc-900">
      {/* Modern Floating Pill Navigation */}
      <div className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center pointer-events-auto transition-all duration-300">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1eR0l1OLGVqhNxwRYDLMouGSFq1HouRVa" 
              alt="PrintUp Logo" 
              className="h-10 sm:h-14 w-auto object-contain scale-110 origin-left drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-zinc-100/50 p-1.5 rounded-full border border-zinc-200/50">
            <a href="#sluzby" className="px-5 py-2 text-sm font-bold text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">Služby</a>
            <a href="#cenik" className="px-5 py-2 text-sm font-bold text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">Ceník</a>
            <a href="#vyhody" className="px-5 py-2 text-sm font-bold text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">Proč my</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#kontakt" className="px-7 py-2.5 bg-zinc-900 text-white text-sm font-bold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all shadow-lg shadow-zinc-900/20">
              Poptat tisk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-2xl border border-white/50 p-4 rounded-[2rem] shadow-2xl pointer-events-auto flex flex-col gap-2 max-w-7xl mx-auto">
            <a href="#sluzby" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3.5 text-base font-bold text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors">Služby</a>
            <a href="#cenik" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3.5 text-base font-bold text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors">Ceník</a>
            <a href="#vyhody" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3.5 text-base font-bold text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl transition-colors">Proč my</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-base font-bold bg-zinc-900 text-white text-center rounded-2xl mt-2 hover:bg-indigo-600 transition-colors shadow-lg">Kontakt</a>
          </div>
        )}
      </div>

      {/* Modern Hero Section */}
      <section className="relative pt-48 pb-20 lg:pt-64 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-xs font-bold text-zinc-800 mb-8 border border-zinc-200 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Nejmodernější tiskové technologie
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-zinc-900 mb-6 leading-[0.85]">
              TISKNETE <br />
              <span className="text-indigo-600">
                S PROFÍKY.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Od prémiových vizitek a firemních propisek až po velkoformátové bannery a textil. 
              Kvalitně, rychle a s nekompromisním důrazem na detail.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a href="#kontakt" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-indigo-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-xl shadow-zinc-900/20">
                Nezávazná poptávka <ArrowRight size={20} />
              </a>
              <a href="#cenik" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-50 hover:scale-105 transition-all duration-300 border border-zinc-200 flex items-center justify-center text-lg shadow-sm">
                Prohlédnout produkty
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section id="sluzby" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-zinc-900 mb-4">Naše služby</h2>
              <p className="text-xl text-zinc-500 font-medium">
                Moderní technologie nám umožňují potisknout téměř jakýkoliv materiál.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-10 rounded-[2.5rem] bg-white border border-zinc-200/80 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group ${service.colSpan}`}
              >
                <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <service.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-display font-bold text-zinc-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Shop Section */}
      <section id="cenik" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-zinc-900 mb-4">Oblíbené produkty</h2>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
              Vyberte si z naší nabídky textilu. Ideální jako firemní merch nebo originální dárky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col text-left bg-white rounded-[2.5rem] p-4 border border-zinc-200/80 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-full aspect-[4/5] rounded-[2rem] bg-zinc-100 mb-6 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl px-5 py-2.5 rounded-full font-bold text-zinc-900 shadow-[0_4px_20px_rgb(0,0,0,0.08)] text-sm border border-white/50">
                    {product.price}
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <h3 className="text-2xl font-display font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">{product.title}</h3>
                  <p className="text-zinc-500 font-medium line-clamp-2">
                    {product.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Features Section */}
      <section id="vyhody" className="py-32 bg-zinc-950 text-white overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-8 relative z-20">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-[0.9]">
                PROČ TISKNOUT <br/><span className="text-indigo-500">S NÁMI?</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-12 font-medium leading-relaxed">
                Nejsme jen tiskárna. Jsme váš partner pro budování značky. 
                Zakládáme si na preciznosti, dodržování termínů a osobním přístupu.
              </p>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <CheckCircle className="text-indigo-400" size={18} strokeWidth={3} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-2 tracking-tight">{feature.title}</h4>
                      <p className="text-zinc-400 font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-[0_20px_50px_rgb(0,0,0,0.5)] border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tiskový proces" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-white text-zinc-900 p-8 rounded-[2.5rem] shadow-2xl z-20 border border-zinc-100">
                <div className="text-6xl font-display font-black tracking-tighter mb-1 text-indigo-600">10+</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Let zkušeností</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="kontakt" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-[3rem] overflow-hidden border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="p-10 md:p-16 lg:col-span-2 flex flex-col justify-between relative overflow-hidden text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6">Pojďme na to.</h2>
                  <p className="text-zinc-400 mb-12 text-lg font-medium">
                    Máte představu? My máme technologie. Napište nám, co potřebujete potisknout.
                  </p>
                </div>
                
                <div className="space-y-8 relative z-10">
                  <div className="group">
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-2">E-mail</div>
                    <a href="mailto:info@print-up.at" className="text-2xl font-display font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-3">
                      info@print-up.at <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                  <div className="group">
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-2">Telefon</div>
                    <a href="tel:068120228978" className="text-2xl font-display font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-3">
                      068120228978 <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-10 md:p-16 lg:col-span-3 bg-white m-2 rounded-[2.5rem] shadow-sm relative z-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Jméno a příjmení</label>
                      <input type="text" id="name" className="w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium" placeholder="Jan Novák" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Firma (volitelné)</label>
                      <input type="text" id="company" className="w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium" placeholder="Název firmy" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-zinc-700 mb-2 ml-1">E-mail</label>
                      <input type="email" id="email" className="w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium" placeholder="jan@novak.cz" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Telefon</label>
                      <input type="tel" id="phone" className="w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium" placeholder="068120228978" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-700 mb-2 ml-1">Zpráva / Poptávka</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-5 rounded-[2rem] border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium resize-none" placeholder="Dobrý den, potřeboval bych potisknout..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-5 bg-indigo-600 text-white font-bold text-lg rounded-full hover:bg-indigo-700 hover:scale-[1.02] transition-all shadow-xl shadow-indigo-600/20">
                    Odeslat poptávku
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-zinc-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1eR0l1OLGVqhNxwRYDLMouGSFq1HouRVa" 
              alt="PrintUp Logo" 
              className="h-16 w-auto object-contain scale-125 origin-left"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-zinc-400 font-medium text-sm">
            &copy; {new Date().getFullYear()} NB International Group s. r. o. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>

      {/* Modern Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col md:flex-row border border-zinc-100"
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center text-zinc-900 hover:bg-white hover:text-indigo-600 transition-colors z-10 shadow-sm"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            
            <div className="w-full md:w-1/2 bg-zinc-100 relative min-h-[300px]">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 font-bold rounded-full text-sm mb-4 border border-indigo-100">
                  {selectedProduct.price}
                </span>
                <h3 className="text-3xl font-display font-black tracking-tight text-zinc-900 mb-4">{selectedProduct.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  {selectedProduct.desc}
                </p>
              </div>
              
              <a 
                href="#kontakt" 
                onClick={() => {
                  setSelectedProduct(null);
                  const msgInput = document.getElementById('message') as HTMLTextAreaElement;
                  if (msgInput) {
                    msgInput.value = `Dobrý den, měl/a bych zájem o: ${selectedProduct.title} (${selectedProduct.price})`;
                  }
                }}
                className="w-full py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-colors shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Poptat produkt
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
