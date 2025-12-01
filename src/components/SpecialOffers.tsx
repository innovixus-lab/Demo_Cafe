import { motion } from 'motion/react';
import { Sparkles, Clock, Gift } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { useLanguage } from '../contexts/LanguageContext';

export function SpecialOffers() {
  const { t } = useLanguage();
  
  const offers = [
    {
      icon: Clock,
      title: t('offers.happyhour.title'),
      description: t('offers.happyhour.desc'),
      color: 'bg-orange-500',
    },
    {
      icon: Gift,
      title: t('offers.loyalty.title'),
      description: t('offers.loyalty.desc'),
      color: 'bg-purple-500',
    },
    {
      icon: Sparkles,
      title: t('offers.weekend.title'),
      description: t('offers.weekend.desc'),
      color: 'bg-pink-500',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedText 
            text={t('offers.title')}
            className="text-4xl md:text-5xl mb-4 text-amber-900 justify-center"
          />
          <p className="text-lg text-gray-700">
            {t('offers.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 ${offer.color} opacity-10 rounded-full -mr-16 -mt-16`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className={`w-16 h-16 ${offer.color} rounded-full flex items-center justify-center mb-4 relative z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-amber-900">{offer.title}</h3>
                <p className="text-gray-700">{offer.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}