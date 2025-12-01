import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-amber-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="text-2xl">Brew Haven</span>
            </div>
            <p className="text-amber-100">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2 text-amber-100">
              <li><a href="#about" className="hover:text-amber-300 transition">{t('footer.aboutus')}</a></li>
              <li><a href="#menu" className="hover:text-amber-300 transition">{t('nav.menu')}</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition">{t('nav.contact')}</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">{t('footer.careers')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-amber-800 pt-8 text-center text-amber-100"
        >
          <p>&copy; {t('footer.copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
}