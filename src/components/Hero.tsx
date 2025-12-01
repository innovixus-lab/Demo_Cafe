import { Coffee } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Hero() {
  const { t } = useLanguage();
  const titleText = t('hero.title');
  const letters = Array.from(titleText);

  return (
    <div className="relative h-screen">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1685956030838-bde2f02234c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjB3YXJtfGVufDF8fHx8MTc2NDUwNDE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Cafe interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-2 text-white">
          <Coffee className="w-8 h-8" />
          <span className="text-2xl">Brew Haven</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-white">
            <a href="#about" className="hover:text-amber-300 transition">{t('nav.about')}</a>
            <a href="#menu" className="hover:text-amber-300 transition">{t('nav.menu')}</a>
            <a href="#contact" className="hover:text-amber-300 transition">{t('nav.contact')}</a>
          </div>
          <LanguageSwitcher />
        </div>
      </motion.nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl mb-6">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.03,
                type: "spring",
                stiffness: 100
              }}
              style={{ display: 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#menu"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition"
        >
          {t('hero.cta')}
        </motion.a>
      </div>
    </div>
  );
}