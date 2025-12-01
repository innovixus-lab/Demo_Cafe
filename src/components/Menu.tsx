import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Menu() {
  const { t } = useLanguage();
  
  const coffeeMenu = [
    { name: t('menu.espresso'), price: '$3.50', description: t('menu.espresso.desc') },
    { name: t('menu.cappuccino'), price: '$4.50', description: t('menu.cappuccino.desc') },
    { name: t('menu.latte'), price: '$4.75', description: t('menu.latte.desc') },
    { name: t('menu.americano'), price: '$3.75', description: t('menu.americano.desc') },
    { name: t('menu.mocha'), price: '$5.25', description: t('menu.mocha.desc') },
    { name: t('menu.coldbrew'), price: '$4.50', description: t('menu.coldbrew.desc') },
  ];

  const pastryMenu = [
    { name: t('menu.croissant'), price: '$3.50', description: t('menu.croissant.desc') },
    { name: t('menu.muffin'), price: '$4.00', description: t('menu.muffin.desc') },
    { name: t('menu.scone'), price: '$3.75', description: t('menu.scone.desc') },
    { name: t('menu.cinnamon'), price: '$4.50', description: t('menu.cinnamon.desc') },
    { name: t('menu.biscotti'), price: '$3.00', description: t('menu.biscotti.desc') },
    { name: t('menu.banana'), price: '$3.50', description: t('menu.banana.desc') },
  ];

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-amber-900">{t('menu.title')}</h2>
          <p className="text-lg text-gray-700">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coffee Menu */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjQ1MDU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl mb-6 text-amber-900">{t('menu.coffee')}</h3>
            </div>
            <div className="space-y-6">
              {coffeeMenu.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-amber-200 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl text-amber-900">{item.name}</h4>
                    <span className="text-lg text-amber-700">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pastry Menu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666114265205-394e9d5848c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzY0NTAwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pastries"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl mb-6 text-amber-900">{t('menu.pastries')}</h3>
            </div>
            <div className="space-y-6">
              {pastryMenu.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-amber-200 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl text-amber-900">{item.name}</h4>
                    <span className="text-lg text-amber-700">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}