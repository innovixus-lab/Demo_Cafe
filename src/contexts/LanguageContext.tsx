import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Welcome to Brew Haven',
    'hero.subtitle': 'Your cozy corner for exceptional coffee and delightful treats',
    'hero.cta': 'View Our Menu',
    
    // About
    'about.title': 'Our Story',
    'about.description': 'Since 2015, Brew Haven has been serving the finest artisanal coffee and homemade pastries to our beloved community. We believe in creating moments of warmth and connection, one cup at a time.',
    'about.love.title': 'Made with Love',
    'about.love.desc': 'Every drink and pastry is crafted with passion and attention to detail',
    'about.community.title': 'Community First',
    'about.community.desc': "We're more than a cafe - we're a gathering place for friends and neighbors",
    'about.quality.title': 'Premium Quality',
    'about.quality.desc': 'We source only the finest organic, fair-trade beans from around the world',
    
    // Special Offers
    'offers.title': 'Special Offers',
    'offers.subtitle': "Don't miss out on our amazing deals and rewards",
    'offers.happyhour.title': 'Happy Hour',
    'offers.happyhour.desc': 'Get 20% off all drinks from 2-4 PM on weekdays',
    'offers.loyalty.title': 'Loyalty Rewards',
    'offers.loyalty.desc': 'Buy 9 coffees, get your 10th free with our stamp card',
    'offers.weekend.title': 'Weekend Special',
    'offers.weekend.desc': 'Free pastry with any large coffee on Saturdays',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Explore our carefully curated selection of beverages and treats',
    'menu.coffee': 'Coffee',
    'menu.pastries': 'Pastries',
    'menu.espresso': 'Espresso',
    'menu.espresso.desc': 'Rich and bold single shot',
    'menu.cappuccino': 'Cappuccino',
    'menu.cappuccino.desc': 'Espresso with steamed milk and foam',
    'menu.latte': 'Latte',
    'menu.latte.desc': 'Smooth espresso with steamed milk',
    'menu.americano': 'Americano',
    'menu.americano.desc': 'Espresso with hot water',
    'menu.mocha': 'Mocha',
    'menu.mocha.desc': 'Espresso with chocolate and steamed milk',
    'menu.coldbrew': 'Cold Brew',
    'menu.coldbrew.desc': 'Smooth, cold-steeped coffee',
    'menu.croissant': 'Croissant',
    'menu.croissant.desc': 'Buttery and flaky',
    'menu.muffin': 'Chocolate Muffin',
    'menu.muffin.desc': 'Rich double chocolate',
    'menu.scone': 'Blueberry Scone',
    'menu.scone.desc': 'Fresh baked daily',
    'menu.cinnamon': 'Cinnamon Roll',
    'menu.cinnamon.desc': 'Warm with cream cheese frosting',
    'menu.biscotti': 'Almond Biscotti',
    'menu.biscotti.desc': 'Perfect for dipping',
    'menu.banana': 'Banana Bread',
    'menu.banana.desc': 'Homemade recipe',
    
    // Gallery
    'gallery.title': 'Our Gallery',
    'gallery.subtitle': 'A glimpse into our cozy cafe',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': "Don't just take our word for it",
    'testimonials.sarah.text': 'Best coffee in town! The atmosphere is perfect for working or catching up with friends.',
    'testimonials.sarah.role': 'Regular Customer',
    'testimonials.michael.text': 'Their pastries are absolutely divine. You can taste the quality in every bite.',
    'testimonials.michael.role': 'Food Blogger',
    'testimonials.emily.text': 'Brew Haven has become my morning ritual. The staff is friendly and the coffee is consistently excellent.',
    'testimonials.emily.role': 'Local Resident',
    
    // Contact
    'contact.title': 'Visit Us',
    'contact.subtitle': "We'd love to see you! Stop by and enjoy a warm cup with us.",
    'contact.location': 'Location',
    'contact.hours': 'Hours',
    'contact.hours.weekday': 'Monday - Friday: 7:00 AM - 7:00 PM',
    'contact.hours.weekend': 'Saturday - Sunday: 8:00 AM - 8:00 PM',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Get in Touch',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    
    // Newsletter
    'newsletter.title': 'Join Our Newsletter',
    'newsletter.subtitle': 'Get exclusive offers, new menu updates, and cafe news delivered to your inbox',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.submit': 'Subscribe',
    
    // Footer
    'footer.tagline': 'Your cozy corner for exceptional coffee and delightful treats since 2015.',
    'footer.quicklinks': 'Quick Links',
    'footer.aboutus': 'About Us',
    'footer.careers': 'Careers',
    'footer.follow': 'Follow Us',
    'footer.copyright': '2025 Brew Haven. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.menu': 'Menú',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Bienvenido a Brew Haven',
    'hero.subtitle': 'Tu rincón acogedor para café excepcional y delicias encantadoras',
    'hero.cta': 'Ver Nuestro Menú',
    
    // About
    'about.title': 'Nuestra Historia',
    'about.description': 'Desde 2015, Brew Haven ha estado sirviendo el mejor café artesanal y pasteles caseros a nuestra querida comunidad. Creemos en crear momentos de calidez y conexión, una taza a la vez.',
    'about.love.title': 'Hecho con Amor',
    'about.love.desc': 'Cada bebida y pastel se elabora con pasión y atención al detalle',
    'about.community.title': 'Comunidad Primero',
    'about.community.desc': 'Somos más que una cafetería: somos un lugar de encuentro para amigos y vecinos',
    'about.quality.title': 'Calidad Premium',
    'about.quality.desc': 'Obtenemos solo los mejores granos orgánicos de comercio justo de todo el mundo',
    
    // Special Offers
    'offers.title': 'Ofertas Especiales',
    'offers.subtitle': 'No te pierdas nuestras increíbles ofertas y recompensas',
    'offers.happyhour.title': 'Hora Feliz',
    'offers.happyhour.desc': 'Obtén 20% de descuento en todas las bebidas de 2-4 PM en días laborables',
    'offers.loyalty.title': 'Recompensas de Lealtad',
    'offers.loyalty.desc': 'Compra 9 cafés y obtén el décimo gratis con nuestra tarjeta de sellos',
    'offers.weekend.title': 'Especial de Fin de Semana',
    'offers.weekend.desc': 'Pastel gratis con cualquier café grande los sábados',
    
    // Menu
    'menu.title': 'Nuestro Menú',
    'menu.subtitle': 'Explora nuestra selección cuidadosamente curada de bebidas y delicias',
    'menu.coffee': 'Café',
    'menu.pastries': 'Pasteles',
    'menu.espresso': 'Espresso',
    'menu.espresso.desc': 'Rico y audaz, un solo shot',
    'menu.cappuccino': 'Capuchino',
    'menu.cappuccino.desc': 'Espresso con leche espumada',
    'menu.latte': 'Café con Leche',
    'menu.latte.desc': 'Espresso suave con leche vaporizada',
    'menu.americano': 'Americano',
    'menu.americano.desc': 'Espresso con agua caliente',
    'menu.mocha': 'Moca',
    'menu.mocha.desc': 'Espresso con chocolate y leche vaporizada',
    'menu.coldbrew': 'Café Frío',
    'menu.coldbrew.desc': 'Café suave, preparado en frío',
    'menu.croissant': 'Croissant',
    'menu.croissant.desc': 'Mantecoso y hojaldrado',
    'menu.muffin': 'Muffin de Chocolate',
    'menu.muffin.desc': 'Rico chocolate doble',
    'menu.scone': 'Scone de Arándanos',
    'menu.scone.desc': 'Horneado fresco diariamente',
    'menu.cinnamon': 'Rollo de Canela',
    'menu.cinnamon.desc': 'Caliente con glaseado de queso crema',
    'menu.biscotti': 'Biscotti de Almendras',
    'menu.biscotti.desc': 'Perfecto para mojar',
    'menu.banana': 'Pan de Plátano',
    'menu.banana.desc': 'Receta casera',
    
    // Gallery
    'gallery.title': 'Nuestra Galería',
    'gallery.subtitle': 'Un vistazo a nuestra acogedora cafetería',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'No solo confíes en nuestra palabra',
    'testimonials.sarah.text': '¡El mejor café de la ciudad! El ambiente es perfecto para trabajar o ponerse al día con amigos.',
    'testimonials.sarah.role': 'Cliente Regular',
    'testimonials.michael.text': 'Sus pasteles son absolutamente divinos. Puedes saborear la calidad en cada bocado.',
    'testimonials.michael.role': 'Bloguero de Comida',
    'testimonials.emily.text': 'Brew Haven se ha convertido en mi ritual matutino. El personal es amable y el café es consistentemente excelente.',
    'testimonials.emily.role': 'Residente Local',
    
    // Contact
    'contact.title': 'Visítanos',
    'contact.subtitle': '¡Nos encantaría verte! Pasa y disfruta de una taza caliente con nosotros.',
    'contact.location': 'Ubicación',
    'contact.hours': 'Horario',
    'contact.hours.weekday': 'Lunes - Viernes: 7:00 AM - 7:00 PM',
    'contact.hours.weekend': 'Sábado - Domingo: 8:00 AM - 8:00 PM',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.form.title': 'Ponte en Contacto',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Correo',
    'contact.form.email.placeholder': 'tu@correo.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Tu mensaje...',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Newsletter
    'newsletter.title': 'Únete a Nuestro Boletín',
    'newsletter.subtitle': 'Recibe ofertas exclusivas, actualizaciones del menú y noticias del café en tu bandeja de entrada',
    'newsletter.placeholder': 'Ingresa tu correo',
    'newsletter.submit': 'Suscribirse',
    
    // Footer
    'footer.tagline': 'Tu rincón acogedor para café excepcional y delicias encantadoras desde 2015.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.aboutus': 'Acerca de Nosotros',
    'footer.careers': 'Carreras',
    'footer.follow': 'Síguenos',
    'footer.copyright': '2025 Brew Haven. Todos los derechos reservados.',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Bienvenue à Brew Haven',
    'hero.subtitle': 'Votre coin douillet pour un café exceptionnel et des délices savoureux',
    'hero.cta': 'Voir Notre Menu',
    
    // About
    'about.title': 'Notre Histoire',
    'about.description': 'Depuis 2015, Brew Haven sert le meilleur café artisanal et pâtisseries maison à notre communauté bien-aimée. Nous croyons en la création de moments de chaleur et de connexion, une tasse à la fois.',
    'about.love.title': 'Fait avec Amour',
    'about.love.desc': 'Chaque boisson et pâtisserie est préparée avec passion et attention aux détails',
    'about.community.title': 'Communauté Avant Tout',
    'about.community.desc': 'Nous sommes plus qu\'un café - nous sommes un lieu de rassemblement pour les amis et les voisins',
    'about.quality.title': 'Qualité Premium',
    'about.quality.desc': 'Nous ne nous approvisionnons qu\'avec les meilleurs grains biologiques et équitables du monde entier',
    
    // Special Offers
    'offers.title': 'Offres Spéciales',
    'offers.subtitle': 'Ne manquez pas nos offres et récompenses incroyables',
    'offers.happyhour.title': 'Happy Hour',
    'offers.happyhour.desc': 'Obtenez 20% de réduction sur toutes les boissons de 14h à 16h en semaine',
    'offers.loyalty.title': 'Récompenses de Fidélité',
    'offers.loyalty.desc': 'Achetez 9 cafés, obtenez le 10ème gratuit avec notre carte de fidélité',
    'offers.weekend.title': 'Spécial Week-end',
    'offers.weekend.desc': 'Pâtisserie gratuite avec tout grand café le samedi',
    
    // Menu
    'menu.title': 'Notre Menu',
    'menu.subtitle': 'Explorez notre sélection soigneusement organisée de boissons et de délices',
    'menu.coffee': 'Café',
    'menu.pastries': 'Pâtisseries',
    'menu.espresso': 'Espresso',
    'menu.espresso.desc': 'Riche et audacieux, un seul shot',
    'menu.cappuccino': 'Cappuccino',
    'menu.cappuccino.desc': 'Espresso avec lait mousseux',
    'menu.latte': 'Latte',
    'menu.latte.desc': 'Espresso doux avec lait vapeur',
    'menu.americano': 'Americano',
    'menu.americano.desc': 'Espresso avec eau chaude',
    'menu.mocha': 'Moka',
    'menu.mocha.desc': 'Espresso avec chocolat et lait vapeur',
    'menu.coldbrew': 'Café Froid',
    'menu.coldbrew.desc': 'Café doux, infusé à froid',
    'menu.croissant': 'Croissant',
    'menu.croissant.desc': 'Beurré et feuilleté',
    'menu.muffin': 'Muffin au Chocolat',
    'menu.muffin.desc': 'Riche double chocolat',
    'menu.scone': 'Scone aux Myrtilles',
    'menu.scone.desc': 'Fraîchement cuit tous les jours',
    'menu.cinnamon': 'Roulé à la Cannelle',
    'menu.cinnamon.desc': 'Chaud avec glaçage au fromage à la crème',
    'menu.biscotti': 'Biscotti aux Amandes',
    'menu.biscotti.desc': 'Parfait pour tremper',
    'menu.banana': 'Pain à la Banane',
    'menu.banana.desc': 'Recette maison',
    
    // Gallery
    'gallery.title': 'Notre Galerie',
    'gallery.subtitle': 'Un aperçu de notre café chaleureux',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Ne nous croyez pas sur parole',
    'testimonials.sarah.text': 'Le meilleur café de la ville! L\'atmosphère est parfaite pour travailler ou retrouver des amis.',
    'testimonials.sarah.role': 'Cliente Régulière',
    'testimonials.michael.text': 'Leurs pâtisseries sont absolument divines. On peut goûter la qualité à chaque bouchée.',
    'testimonials.michael.role': 'Blogueur Culinaire',
    'testimonials.emily.text': 'Brew Haven est devenu mon rituel matinal. Le personnel est sympathique et le café est toujours excellent.',
    'testimonials.emily.role': 'Résidente Locale',
    
    // Contact
    'contact.title': 'Visitez-nous',
    'contact.subtitle': 'Nous serions ravis de vous voir! Passez et profitez d\'une tasse chaleureuse avec nous.',
    'contact.location': 'Emplacement',
    'contact.hours': 'Horaires',
    'contact.hours.weekday': 'Lundi - Vendredi: 7h00 - 19h00',
    'contact.hours.weekend': 'Samedi - Dimanche: 8h00 - 20h00',
    'contact.phone': 'Téléphone',
    'contact.email': 'E-mail',
    'contact.form.title': 'Contactez-nous',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'E-mail',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.submit': 'Envoyer le Message',
    
    // Newsletter
    'newsletter.title': 'Rejoignez Notre Newsletter',
    'newsletter.subtitle': 'Recevez des offres exclusives, des mises à jour du menu et des nouvelles du café dans votre boîte de réception',
    'newsletter.placeholder': 'Entrez votre e-mail',
    'newsletter.submit': 'S\'abonner',
    
    // Footer
    'footer.tagline': 'Votre coin douillet pour un café exceptionnel et des délices savoureux depuis 2015.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.aboutus': 'À Propos de Nous',
    'footer.careers': 'Carrières',
    'footer.follow': 'Suivez-nous',
    'footer.copyright': '2025 Brew Haven. Tous droits réservés.',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة عنا',
    'nav.menu': 'القائمة',
    'nav.contact': 'تواصل معنا',

    // Hero
    'hero.title': 'مرحبًا بكم في برو هيفن',
    'hero.subtitle': 'زاويتكم الدافئة للقهوة المتميزة والحلويات الشهية',
    'hero.cta': 'استعرض قائمتنا',

    // About
    'about.title': 'قصتنا',
    'about.description': 'منذ عام 2015 ونحن في برو هيفن نقدّم أجود القهوة الحرفية والمخبوزات المنزلية لمجتمعنا العزيز. نؤمن بصناعة لحظات من الدفء والترابط، فنجانًا تلو الآخر.',
    'about.love.title': 'مصنوع بحب',
    'about.love.desc': 'كل مشروب وحلوى تُحضَّر بشغف وعناية بالتفاصيل',
    'about.community.title': 'المجتمع أولًا',
    'about.community.desc': 'نحن أكثر من مقهى – نحن مساحة لقاء للأصدقاء والجيران',
    'about.quality.title': 'جودة متميزة',
    'about.quality.desc': 'نختار أفضل حبوب البن العضوية وعادلة التجارة من أنحاء العالم',

    // Special Offers
    'offers.title': 'عروض خاصة',
    'offers.subtitle': 'لا تفوّت عروضنا المذهلة وبرامج المكافآت',
    'offers.happyhour.title': 'ساعة السعادة',
    'offers.happyhour.desc': 'احصل على خصم 20% على جميع المشروبات من 2-4 مساءً في أيام الأسبوع',
    'offers.loyalty.title': 'مكافآت الولاء',
    'offers.loyalty.desc': 'اشترِ 9 أكواب قهوة واحصل على العاشر مجانًا عبر بطاقة الأختام',
    'offers.weekend.title': 'عرض نهاية الأسبوع',
    'offers.weekend.desc': 'قطعة معجنات مجانية مع أي قهوة كبيرة يوم السبت',

    // Menu
    'menu.title': 'قائمتنا',
    'menu.subtitle': 'استكشف باقة مشروباتنا ومخبوزاتنا المختارة بعناية',
    'menu.coffee': 'قهوة',
    'menu.pastries': 'مخبوزات',
    'menu.espresso': 'إسبريسو',
    'menu.espresso.desc': 'جرعة غنية وقوية',
    'menu.cappuccino': 'كابتشينو',
    'menu.cappuccino.desc': 'إسبريسو مع حليب مبخر ورغوة',
    'menu.latte': 'لاتيه',
    'menu.latte.desc': 'إسبريسو ناعم مع حليب مبخر',
    'menu.americano': 'أميريكانو',
    'menu.americano.desc': 'إسبريسو مع ماء ساخن',
    'menu.mocha': 'موكا',
    'menu.mocha.desc': 'إسبريسو مع شوكولاتة وحليب مبخر',
    'menu.coldbrew': 'قهوة باردة',
    'menu.coldbrew.desc': 'قهوة ناعمة منقوعة على البارد',
    'menu.croissant': 'كرواسون',
    'menu.croissant.desc': 'زبدية وهشّة',
    'menu.muffin': 'مافن شوكولاتة',
    'menu.muffin.desc': 'شوكولاتة مزدوجة غنية',
    'menu.scone': 'سكون بالتوت الأزرق',
    'menu.scone.desc': 'يُخبز طازجًا يوميًا',
    'menu.cinnamon': 'لفافة قرفة',
    'menu.cinnamon.desc': 'دافئة مع صلصة جبن كريمي',
    'menu.biscotti': 'بسكوتي لوز',
    'menu.biscotti.desc': 'مثالي للغمس',
    'menu.banana': 'خبز الموز',
    'menu.banana.desc': 'وصفة منزلية',

    // Gallery
    'gallery.title': 'معرضنا',
    'gallery.subtitle': 'لمحة عن مقهانا الدافئ',

    // Testimonials
    'testimonials.title': 'آراء زبائننا',
    'testimonials.subtitle': 'لا تكتفِ بكلامنا فقط',
    'testimonials.sarah.text': 'أفضل قهوة في المدينة! الأجواء مثالية للعمل أو للقاء الأصدقاء.',
    'testimonials.sarah.role': 'زبونة دائمة',
    'testimonials.michael.text': 'مخبوزاتهم رائعة بحق. يمكنك تذوق الجودة في كل قضمة.',
    'testimonials.michael.role': 'مدوّن طعام',
    'testimonials.emily.text': 'أصبح برو هيفن طقسي الصباحي. الطاقم ودود والقهوة ممتازة دائمًا.',
    'testimonials.emily.role': 'مقيمة محلية',

    // Contact
    'contact.title': 'تفضل بزيارتنا',
    'contact.subtitle': 'يسعدنا لقاؤك! مرّ علينا واستمتع بفنجان دافئ.',
    'contact.location': 'الموقع',
    'contact.hours': 'الساعات',
    'contact.hours.weekday': 'الاثنين - الجمعة: 7:00 صباحًا - 7:00 مساءً',
    'contact.hours.weekend': 'السبت - الأحد: 8:00 صباحًا - 8:00 مساءً',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.form.title': 'تواصل معنا',
    'contact.form.name': 'الاسم',
    'contact.form.name.placeholder': 'اكتب اسمك',
    'contact.form.email': 'البريد',
    'contact.form.email.placeholder': 'بريدك@مثال.com',
    'contact.form.message': 'الرسالة',
    'contact.form.message.placeholder': 'اكتب رسالتك...',
    'contact.form.submit': 'إرسال الرسالة',

    // Newsletter
    'newsletter.title': 'انضم إلى نشرتنا البريدية',
    'newsletter.subtitle': 'احصل على عروض حصرية وتحديثات القائمة وأخبار المقهى مباشرة إلى بريدك',
    'newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'newsletter.submit': 'اشتراك',

    // Footer
    'footer.tagline': 'زاويتك الدافئة للقهوة المتميزة والحلويات الشهية منذ 2015.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.aboutus': 'من نحن',
    'footer.careers': 'الوظائف',
    'footer.follow': 'تابعنا',
    'footer.copyright': '2025 برو هيفن. جميع الحقوق محفوظة.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Detect user location (via IP) and set an appropriate default language.
  // This runs once on mount and does NOT prevent the user from changing language manually.
  useEffect(() => {
    const detectLanguageFromIP = async () => {
      try {
        // Simple, no-key geolocation API; you can swap this for your own service if needed.
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) return;

        const data = await response.json();
        const countryCode = (data.country_code as string | undefined) || '';

        let detected: Language | null = null;

        // Map common countries to supported languages
        const upperCountry = countryCode.toUpperCase();
        if (['ES', 'MX', 'AR', 'CO', 'PE', 'CL', 'VE', 'EC', 'UY', 'PY', 'BO', 'CR', 'DO', 'GT', 'HN', 'NI', 'PA', 'SV'].includes(upperCountry)) {
          detected = 'es';
        } else if (['FR', 'BE', 'CA', 'CH', 'LU', 'MC'].includes(upperCountry)) {
          detected = 'fr';
        } else if ([
          'SA', 'AE', 'EG', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB', 'DZ',
          'MA', 'TN', 'LY', 'YE', 'IQ', 'SD', 'SY', 'PS'
        ].includes(upperCountry)) {
          detected = 'ar';
        }

        if (detected && detected !== language) {
          setLanguage(detected);
        }
      } catch {
        // Fail silently and keep default 'en'
      }
    };

    detectLanguageFromIP();
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
