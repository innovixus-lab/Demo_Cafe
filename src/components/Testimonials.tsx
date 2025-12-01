import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: t('testimonials.sarah.role'),
      text: t('testimonials.sarah.text'),
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: t('testimonials.michael.role'),
      text: t('testimonials.michael.text'),
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: t('testimonials.emily.role'),
      text: t('testimonials.emily.text'),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedText 
            text={t('testimonials.title')}
            className="text-4xl md:text-5xl mb-4 text-amber-900 justify-center"
          />
          <p className="text-lg text-gray-700">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-amber-50 p-8 rounded-2xl shadow-lg relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div>
                <p className="text-amber-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}