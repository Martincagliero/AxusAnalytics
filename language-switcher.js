/**
 * Sistema de cambio de idioma para Axus Analytics
 * Soporta Español (ES) e Inglés (EN) con persistencia en localStorage
 */

// Objeto con todas las traducciones
const translations = {
  es: {
    nav: {
      services: 'Servicios',
      webEditable: 'Web editable',
      projects: 'Proyectos',
      method: 'Cómo trabajamos',
      experiences: 'Experiencias',
      forWhom: 'Para quién',
      contact: 'Contactar'
    },
    hero: {
      eyebrow: 'Desarrollo Web Profesional',
      subtitle: 'Creamos sitios web modernos que impulsan tu negocio',
      lead: 'Páginas web profesionales, rápidas y pensadas para vender. Llevá tu negocio online en días.',
      cta: 'Pedí tu web',
      metric1Title: 'Tu web',
      metric1Value: 'Online',
      metric1: 'En pocos días',
      metric2Title: 'Mobile',
      metric2: 'Responsive',
      metric3Title: 'Panel',
      metric3Value: 'Fácil',
      metric3: '100% editable'
    },
    services: {
      title: 'Servicios',
      intro: 'Soluciones web profesionales para que tu negocio destaque online y llegue a más clientes.',
      card1: {
        title: 'Páginas web institucionales',
        desc: 'Tu negocio con presencia profesional online. Ideal para barberías, estudios, marcas personales y emprendimientos.'
      },
      card2: {
        title: 'Landing pages',
        desc: 'Páginas diseñadas para convertir visitas en clientes. Perfectas para servicios, productos y campañas.'
      },
      card3: {
        title: 'Catálogos online',
        desc: 'Mostrá tus productos y servicios online. Tus clientes pueden ver todo desde el celular, 24/7.'
      },
      card4: {
        title: 'Sistemas de turnos web',
        desc: 'Agenda automática para tu negocio. Menos mensajes por WhatsApp, mejor organización.'
      },
      card5: {
        title: 'Analítica y automatización',
        desc: 'Valor agregado: reportes de visitas, análisis de datos y automatizaciones para escalar tu negocio.'
      }
    },
    webEditable: {
      title: 'Web profesional 100% editable',
      intro: 'Diseñamos y publicamos tu sitio web para que puedas modificar textos e imágenes cuando quieras, sin conocimientos técnicos y sin depender de nadie.',
      benefit1: {
        title: 'Edición simple de textos e imágenes',
        desc: 'Modifica tu contenido sin complicaciones'
      },
      benefit2: {
        title: 'Panel fácil de usar',
        desc: 'Interfaz intuitiva diseñada para todos'
      },
      benefit3: {
        title: 'Diseño responsive',
        desc: 'Perfecto en celular, tablet y PC'
      },
      benefit4: {
        title: 'Web online y funcional en pocos días',
        desc: 'Deployment rápido y sin complicaciones'
      },
      cta: 'Contactanos'
    },
    projects: {
      title: 'Nuestros proyectos',
      intro: 'Trabajos reales que muestran cómo desarrollamos soluciones personalizadas para cada negocio.',
      project1: {
        title: 'Sistema de turnos online para barberías',
        description: 'Sistema de turnos web desarrollado por AXUS. Publicado como referencia para mostrar cómo trabajamos. Cada implementación se adapta al negocio del cliente.',
        benefit1: 'Agenda automática',
        benefit2: 'Menos mensajes por WhatsApp',
        benefit3: 'Mejor organización de turnos',
        benefit4: 'Experiencia profesional para el cliente',
        cta1: 'Ver sistema funcionando',
        cta2: 'Contactanos para uno igual'
      },
      project2: {
        title: 'Web para artista textil - Casi como ella',
        description: 'Sitio web desarrollado por AXUS para artista textil. Incluye galería de trabajos, sección sobre la artista y contacto directo. Diseño personalizado que refleja la identidad artística del emprendimiento.',
        benefit1: 'Galería visual de trabajos',
        benefit2: 'Diseño personalizado único',
        benefit3: 'Contacto directo por WhatsApp',
        benefit4: 'Optimizado para móviles',
        cta1: 'Ver sitio web',
        cta2: 'Creá tu web'
      }
    },
    method: {
      title: 'Cómo trabajamos',
      step1: {
        title: 'Entendemos tu negocio',
        desc: 'Conversamos sobre tu negocio, tus clientes y qué necesitás mostrar online.'
      },
      step2: {
        title: 'Diseñamos tu web',
        desc: 'Creamos un diseño profesional adaptado a tu marca y optimizado para celulares.'
      },
      step3: {
        title: 'Publicamos y enseñamos',
        desc: 'Subimos tu web y te mostramos cómo editar textos e imágenes fácilmente.'
      },
      step4: {
        title: 'Soporte continuo',
        desc: 'Estamos disponibles para actualizaciones, mejoras y analizar resultados.'
      }
    },
    gallery: {
      title: 'Proyectos en acción',
      intro: 'Visualizaciones claras, reportes ejecutivos y tableros de control enfocados en resultados.'
    },
    forWhom: {
      title: 'Para quién',
      card1: {
        title: 'Emprendedores',
        desc: 'Tu marca personal online con diseño profesional y panel editable.'
      },
      card2: {
        title: 'Negocios locales',
        desc: 'Barberías, costureras, estudios: mostrá tus servicios 24/7 desde el celular.'
      },
      card3: {
        title: 'Comercios y PYMEs',
        desc: 'Catálogos online, sistemas de turnos y automatizaciones inteligentes.'
      }
    },
    experiences: {
      title: 'Experiencias de uso',
      intro: 'Ejemplos ilustrativos de cómo nuestros servicios impactan positivamente en diferentes tipos de negocios.',
      disclaimer: '* Los testimonios que verás a continuación son ejemplos ilustrativos de uso y no representan clientes reales.',
      testimonial1: {
        text: '"Ahora mis clientes pueden reservar turnos directo desde mi web. Se redujo un 80% los mensajes de WhatsApp para agendar."',
        name: 'Barbería Local',
        role: 'Propietario'
      },
      testimonial2: {
        text: '"Mi catálogo online funciona perfecto. Los clientes ven mis trabajos desde el celular y me llegan más consultas por Instagram."',
        name: 'Estudio de Moda',
        role: 'Emprendedora'
      },
      testimonial3: {
        text: '"Además de la web, agregamos estadísticas. Ahora sabemos qué servicios son los más consultados y ajustamos nuestras promociones."',
        name: 'Centro de Estética',
        role: 'Responsable de Marketing'
      },
      testimonial4: {
        text: '"El panel es súper intuitivo. Cambio precios y fotos sin llamar a nadie. Mi web siempre está actualizada."',
        name: 'Estudio Contable',
        role: 'PyME'
      }
    },
    contact: {
      title: 'Contacto',
      text: 'Escribinos y coordinamos una primera charla para entender tu proyecto web.',
      email: 'Pedí tu web'
    },
    footer: {
      text: '© 2026 Axus. Desarrollo web profesional con automatización inteligente.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      webEditable: 'Editable website',
      projects: 'Projects',
      method: 'How we work',
      experiences: 'Experiences',
      forWhom: 'For whom',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Professional Web Development',
      subtitle: 'We create modern websites that boost your business',
      lead: 'Professional, fast websites designed to sell. Take your business online in days.',
      cta: 'Get your website',
      metric1Title: 'Your web',
      metric1Value: 'Online',
      metric1: 'In a few days',
      metric2Title: 'Mobile',
      metric2: 'Responsive',
      metric3Title: 'Panel',
      metric3Value: 'Easy',
      metric3: '100% editable'
    },
    services: {
      title: 'Services',
      intro: 'Professional web solutions so your business stands out online and reaches more customers.',
      card1: {
        title: 'Institutional websites',
        desc: 'Your business with professional online presence. Ideal for barbershops, studios, personal brands and ventures.'
      },
      card2: {
        title: 'Landing pages',
        desc: 'Pages designed to convert visits into customers. Perfect for services, products and campaigns.'
      },
      card3: {
        title: 'Online catalogs',
        desc: 'Show your products and services online. Your customers can see everything from their phone, 24/7.'
      },
      card4: {
        title: 'Web appointment systems',
        desc: 'Automatic scheduling for your business. Fewer WhatsApp messages, better organization.'
      },
      card5: {
        title: 'Analytics and automation',
        desc: 'Added value: visit reports, data analysis and automations to scale your business.'
      }
    },
    webEditable: {
      title: '100% editable professional website',
      intro: 'We design and publish your website so you can modify texts and images whenever you want, without technical knowledge and without depending on anyone.',
      benefit1: {
        title: 'Simple text and image editing',
        desc: 'Modify your content without complications'
      },
      benefit2: {
        title: 'Easy-to-use panel',
        desc: 'Intuitive interface designed for everyone'
      },
      benefit3: {
        title: 'Responsive design',
        desc: 'Perfect on mobile, tablet and PC'
      },
      benefit4: {
        title: 'Online and functional website in a few days',
        desc: 'Fast deployment without complications'
      },
      cta: 'Contact us'
    },
    projects: {
      title: 'Our projects',
      intro: 'Real work that shows how we develop customized solutions for each business.',
      project1: {
        title: 'Online appointment system for barbershops',
        description: 'Web appointment system developed by AXUS. Published as a reference to show how we work. Each implementation is adapted to the client\'s business.',
        benefit1: 'Automatic scheduling',
        benefit2: 'Fewer WhatsApp messages',
        benefit3: 'Better appointment organization',
        benefit4: 'Professional experience for the client',
        cta1: 'See working system',
        cta2: 'Contact us for a similar one'
      },
      project2: {
        title: 'Website for textile artist - Casi como ella',
        description: 'Website developed by AXUS for a textile artist. Includes gallery of works, about the artist section and direct contact. Custom design that reflects the artistic identity of the business.',
        benefit1: 'Visual gallery of works',
        benefit2: 'Unique custom design',
        benefit3: 'Direct WhatsApp contact',
        benefit4: 'Mobile optimized',
        cta1: 'See website',
        cta2: 'Create your website'
      }
    },
    method: {
      title: 'How we work',
      step1: {
        title: 'We understand your business',
        desc: 'We talk about your business, your customers and what you need to show online.'
      },
      step2: {
        title: 'We design your website',
        desc: 'We create a professional design adapted to your brand and optimized for mobile.'
      },
      step3: {
        title: 'We publish and teach',
        desc: 'We upload your website and show you how to easily edit texts and images.'
      },
      step4: {
        title: 'Continuous support',
        desc: 'We are available for updates, improvements and results analysis.'
      }
    },
    gallery: {
      title: 'Projects in action',
      intro: 'Clear visualizations, executive reports and results-focused dashboards.'
    },
    forWhom: {
      title: 'For whom',
      card1: {
        title: 'Entrepreneurs',
        desc: 'Your personal brand online with professional design and editable panel.'
      },
      card2: {
        title: 'Local businesses',
        desc: 'Barbershops, seamstresses, studios: show your services 24/7 from mobile.'
      },
      card3: {
        title: 'Retail & SMEs',
        desc: 'Online catalogs, appointment systems and intelligent automations.'
      }
    },
    experiences: {
      title: 'User experiences',
      intro: 'Illustrative examples of how our services positively impact different types of businesses.',
      disclaimer: '* The following testimonials are illustrative examples and do not represent real clients.',
      testimonial1: {
        text: '"Now my clients can book appointments directly from my website. WhatsApp messages for scheduling reduced by 80%."',
        name: 'Local Barbershop',
        role: 'Owner'
      },
      testimonial2: {
        text: '"My online catalog works perfectly. Clients see my work from their phones and I get more inquiries on Instagram."',
        name: 'Fashion Studio',
        role: 'Entrepreneur'
      },
      testimonial3: {
        text: '"In addition to the website, we added statistics. Now we know which services are most requested and adjust our promotions."',
        name: 'Beauty Center',
        role: 'Marketing Manager'
      },
      testimonial4: {
        text: '"The panel is super intuitive. I change prices and photos without calling anyone. My website is always updated."',
        name: 'Accounting Firm',
        role: 'SME'
      }
    },
    contact: {
      title: 'Contact',
      text: 'Write to us and we will coordinate a first conversation to understand your web project.',
      email: 'Get your website'
    },
    footer: {
      text: '© 2026 Axus. Professional web development with intelligent automation.'
    }
  }
};

// Estado actual del idioma
let currentLanguage = 'es';

/**
 * Obtiene el valor de una traducción usando notación de puntos
 * Ejemplo: getTranslation('hero.subtitle', 'en')
 */
function getTranslation(key, lang) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      console.warn(`Translation not found: ${key} for language: ${lang}`);
      return key;
    }
  }
  
  return value;
}

/**
 * Actualiza todos los elementos con atributo data-i18n
 */
function updatePageLanguage(lang) {
  // Actualizar todos los elementos con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key, lang);
    
    // Actualizar el contenido del elemento
    element.textContent = translation;
  });
  
  // Actualizar el atributo lang del HTML
  document.documentElement.setAttribute('lang', lang);
  
  currentLanguage = lang;
}

/**
 * Cambia el idioma y actualiza la interfaz
 */
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language not supported: ${lang}`);
    return;
  }
  
  // Actualizar el contenido de la página
  updatePageLanguage(lang);
  
  // Guardar preferencia en localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Actualizar estado visual de los botones
  updateLanguageButtons(lang);
}

/**
 * Actualiza el estado visual de los botones de idioma
 */
function updateLanguageButtons(lang) {
  const buttons = document.querySelectorAll('.lang-btn');
  
  buttons.forEach(button => {
    const buttonLang = button.getAttribute('data-lang');
    
    if (buttonLang === lang) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'true');
    } else {
      button.classList.remove('active');
      button.removeAttribute('aria-current');
    }
  });
}

/**
 * Inicializa el sistema de idiomas
 */
function initLanguageSwitcher() {
  // Obtener idioma guardado o usar el predeterminado
  const savedLanguage = localStorage.getItem('preferredLanguage');
  const browserLanguage = navigator.language.split('-')[0]; // 'es-AR' -> 'es'
  
  // Prioridad: localStorage > navegador > español por defecto
  let initialLanguage = 'es';
  
  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  } else if (translations[browserLanguage]) {
    initialLanguage = browserLanguage;
  }
  
  // Aplicar el idioma inicial
  updatePageLanguage(initialLanguage);
  updateLanguageButtons(initialLanguage);
  
  // Configurar event listeners para los botones
  const languageButtons = document.querySelectorAll('.lang-btn');
  
  languageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = button.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}

// Exportar funciones para uso externo si es necesario
window.axusLang = {
  change: changeLanguage,
  current: () => currentLanguage,
  translations: translations
};
