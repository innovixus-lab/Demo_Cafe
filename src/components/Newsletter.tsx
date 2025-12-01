import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { TypewriterText } from './AnimatedText';
import { useLanguage } from '../contexts/LanguageContext';

export function Newsletter() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-amber-600" />
            </motion.div>
          </div>

          <TypewriterText 
            text={t('newsletter.title')}
            className="text-3xl md:text-4xl mb-4 text-white"
          />
          <p className="text-lg text-amber-100 mb-8">
            {t('newsletter.subtitle')}
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-amber-900 hover:bg-amber-950 text-white px-8 py-3 rounded-full transition"
            >
              {t('newsletter.submit')}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}