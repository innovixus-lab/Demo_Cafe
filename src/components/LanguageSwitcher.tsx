import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    { code: 'es' as const, label: 'Español', flag: '🇪🇸' },
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'ar' as const, label: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition text-white"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden md:inline">{currentLanguage?.flag} {currentLanguage?.label}</span>
        <span className="md:hidden">{currentLanguage?.flag}</span>
      </motion.button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20 min-w-[160px]"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ backgroundColor: '#FEF3C7' }}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition ${
                  language === lang.code ? 'bg-amber-100 text-amber-900' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
