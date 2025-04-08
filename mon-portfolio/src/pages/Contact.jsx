// src/pages/Contact.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopied(item);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      id: 1,
      name: "Téléphone/WhatsApp",
      value: "+261 383073485 / +261 329042042",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "bg-green-500/20",
      action: () => window.open(`https://wa.me/+261 383073485 / +261 329042042`, '_blank')
    },
    {
      id: 2,
      name: "Email",
      value: " santatriniainafeno01@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-cyan-500/20",
      action: () => window.open('mailto: santatriniainafeno01@gmail.com', '_blank')
    },
    {
      id: 3,
      name: "Facebook",
      value: "facebook.com/santatrinniaina feno nasandratra",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      color: "bg-blue-600/20",
      action: () => window.open('https://www.facebook.com/santatrinniaina.nasandratra', '_blank')
    },
    {
      id: 4,
      name: "LinkedIn",
      value: "linkedin.com/in/Feno Nasandratra SANTATRINIANA",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "bg-blue-400/20",
      action: () => window.open('https://linkedin.com/in/feno-nasandratra-santatriniana-731196311', '_blank')
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              Contactez-moi
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div 
                key={contact.id}
                onClick={contact.action}
                className={`${contact.color} backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-${contact.color.split('/')[0]}/30 group`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${contact.color} group-hover:bg-white/10 transition`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/90">{contact.name}</h3>
                    <p className="text-white/80 mt-1">{contact.value}</p>
                    {contact.id === 1 && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(contact.value, 'phone');
                        }}
                        className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
                      >
                        {copied === 'phone' ? 'Copié !' : 'Copier le numéro'}
                      </button>
                    )}
                    {contact.id === 2 && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(contact.value, 'email');
                        }}
                        className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
                      >
                        {copied === 'email' ? 'Copié !' : 'Copier l\'email'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-white/60">
            <p>N'hésitez pas à me contacter via l'un de ces canaux</p>
            <p className="mt-2 text-sm">Cliquez sur une carte pour accéder directement</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}