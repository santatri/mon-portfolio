import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopied(item);
    setTimeout(() => setCopied(null), 2000);
  };

  // Emojis de contact pour le fond
  const contactEmojis = [
    '📱', '✉️', '📞', '📧', '📠', '📨', '📩', '📪', '📫', '📬', '📭', 
    '📮', '📝', '📢', '📣', '📯', '🔔', '💬', '💭', '🗨️', '🗯️', '📲',
    '📶', '📳', '📴', '📞', '📟', '📠', '🔋', '🔌', '📍', '🏠', '🏢'
  ];

  const contacts = [
    {
      id: 1,
      name: "Téléphone/WhatsApp",
      value: "+261 383073485 / +261 383073485 (WhatsApp)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "bg-green-500/20",
      action: () => window.open(`https://wa.me/+261383073485`, '_blank')
    },
    {
      id: 2,
      name: "Email",
      value: "santatriniainafeno01@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-cyan-500/20",
      action: () => window.open('mailto:santatriniainafeno01@gmail.com', '_blank')
    },
    {
      id: 3,
      name: "Facebook",
      value: "Santatriniaina Feno Nasandratra",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      color: "bg-blue-600/20",
      action: () => window.open('https://www.facebook.com/santatrinniaina.nasandratra', '_blank')
    },
    {
      id: 4,
      name: "LinkedIn",
      value: "Feno Nasandratra SANTATRINIANA",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "bg-blue-400/20",
      action: () => window.open('https://linkedin.com/in/feno-nasandratra-santatriniana-731196311', '_blank')
    },
    {
      id: 5,
      name: "Adresse",
      value: "Antananarivo, Madagascar",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "bg-amber-500/20",
      action: () => window.open('https://goo.gl/maps/', '_blank')
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
        {/* Emojis de contact flottants en arrière-plan */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {contactEmojis.map((emoji, index) => {
            const size = 0.8 + Math.random() * 1.5;
            const duration = 15 + Math.random() * 30;
            const delay = Math.random() * 15;
            const opacity = 0.1 + Math.random() * 0.3;
            
            // Choix aléatoire de la direction (0: haut, 1: droite, 2: bas, 3: gauche)
            const direction = Math.floor(Math.random() * 4);
            
            let initialPosition, animationName;
            
            switch(direction) {
              case 0: // Depuis le haut
                initialPosition = {
                  left: `${Math.random() * 100}%`,
                  top: '-10%'
                };
                animationName = 'floatFromTop';
                break;
              case 1: // Depuis la droite
                initialPosition = {
                  right: '-10%',
                  top: `${Math.random() * 100}%`
                };
                animationName = 'floatFromRight';
                break;
              case 2: // Depuis le bas
                initialPosition = {
                  left: `${Math.random() * 100}%`,
                  bottom: '-10%'
                };
                animationName = 'floatFromBottom';
                break;
              case 3: // Depuis la gauche
                initialPosition = {
                  left: '-10%',
                  top: `${Math.random() * 100}%`
                };
                animationName = 'floatFromLeft';
                break;
              default:
                initialPosition = {
                  left: `${Math.random() * 100}%`,
                  top: '-10%'
                };
                animationName = 'floatFromTop';
            }
            
            return (
              <div 
                key={index}
                className="absolute text-xl sm:text-2xl"
                style={{
                  ...initialPosition,
                  fontSize: `${size}rem`,
                  opacity: opacity,
                  animation: `${animationName} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {emoji}
              </div>
            );
          })}
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              📨 Contactez-moi
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
            {contacts.map((contact) => (
              <div 
                key={contact.id}
                onClick={contact.action}
                className={`${contact.color} backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group flex-1 min-h-[140px] sm:min-h-[160px] flex flex-col justify-between`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${contact.color} group-hover:bg-white/10 transition`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-1 sm:mb-2">{contact.name}</h3>
                    <p className="text-sm sm:text-base text-white/80 break-words">{contact.value}</p>
                    {contact.id === 5 && (
                      <p className="text-xs sm:text-sm text-white/60 mt-1 sm:mt-2">
                        Disponible pour des rencontres en personne
                      </p>
                    )}
                  </div>
                </div>
                {(contact.id === 1 || contact.id === 2) && (
                  <div className="mt-3 sm:mt-4 text-right">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(contact.value, contact.id === 1 ? 'phone' : 'email');
                      }}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-cyan-400 hover:text-cyan-300 transition"
                    >
                      {copied === (contact.id === 1 ? 'phone' : 'email') ? '📋 Copié !' : `📋 Copier ${contact.id === 1 ? 'le numéro' : "l'email"}`}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section Localisation avec plus de détails */}
          <div className="mt-8 sm:mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
            <div className="flex items-center mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-white/90">📍 Localisation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">
                  Je suis basé à <span className="text-amber-300 font-medium">Antananarivo, Madagascar</span>, 
                  au cœur de la capitale malagasy.
                </p>
                <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">
                  Pour une collaboration en personne, n'hésitez pas à me contacter.
                </p>
                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r">
                  <p className="text-white/80 text-xs sm:text-sm">
                    <span className="font-medium">📌 Note :</span> Merci beaucoup pour votre visite.
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-48 sm:h-64 bg-gray-700 flex items-center justify-center">
                <div className="text-center p-3 sm:p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-amber-400 mb-1 sm:mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm sm:text-base text-white/80 mb-1 sm:mb-2">Antananarivo, Madagascar</p>
                  <button 
                    onClick={() => window.open('https://www.google.com/maps/place/Tananarive', '_blank')}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-amber-600/30 hover:bg-amber-600/40 text-amber-300 rounded-md text-xs sm:text-sm transition border border-amber-500/30"
                  >
                    🗺️ Voir sur la carte
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center text-white/60 px-2 sm:px-4">
            <p className="text-sm sm:text-lg mb-1 sm:mb-2">📲 N'hésitez pas à me contacter via l'un de ces canaux</p>
            <p className="text-xs sm:text-sm">👆 Cliquez sur une carte pour accéder directement</p>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes floatFromTop {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes floatFromRight {
            0% {
              transform: translateX(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateX(-100vw) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes floatFromBottom {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes floatFromLeft {
            0% {
              transform: translateX(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateX(100vw) rotate(360deg);
              opacity: 0;
            }
          }

          @media (max-width: 640px) {
            @keyframes floatFromTop {
              100% { transform: translateY(150vh) rotate(360deg); }
            }
            @keyframes floatFromBottom {
              100% { transform: translateY(-150vh) rotate(360deg); }
            }
            @keyframes floatFromLeft {
              100% { transform: translateX(150vw) rotate(360deg); }
            }
            @keyframes floatFromRight {
              100% { transform: translateX(-150vw) rotate(360deg); }
            }
          }
        `
        }} />
      </main>
      <Footer />
    </>
  );
}