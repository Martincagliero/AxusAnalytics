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
      method: 'Cómo trabajamos',
      experiences: 'Experiencias',
      forWhom: 'Para quién',
      contact: 'Contactar'
    },
    hero: {
      eyebrow: 'Consultoría en datos',
      subtitle: 'Análisis de datos para empresas',
      lead: 'Transformamos información en decisiones claras.',
      cta: 'Contactar',
      metric1: 'Eficiencia operativa',
      metric2: 'Monitoreo clave',
      metric3Title: 'Ventas',
      metric3: 'Optimización comercial'
    },
    services: {
      title: 'Servicios',
      intro: 'Soluciones claras y accionables para entender y mejorar el rendimiento de tu negocio.',
      card1: {
        title: 'Análisis de ventas',
        desc: 'Identificamos patrones, oportunidades y variaciones clave para potenciar ingresos.'
      },
      card2: {
        title: 'Análisis de gastos',
        desc: 'Detectamos ineficiencias y optimizamos costos con base en datos reales.'
      },
      card3: {
        title: 'Indicadores clave (KPIs)',
        desc: 'Definimos y monitoreamos métricas esenciales para decisiones rápidas.'
      },
      card4: {
        title: 'Reportes claros y accionables',
        desc: 'Entregamos reportes simples, precisos y enfocados en resultados.'
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
    method: {
      title: 'Cómo trabajamos',
      step1: {
        title: 'Recibimos los datos',
        desc: 'Relevamos tus fuentes de información y objetivos de negocio.'
      },
      step2: {
        title: 'Analizamos la información',
        desc: 'Aplicamos análisis descriptivo y diagnóstico con rigor profesional.'
      },
      step3: {
        title: 'Creamos reportes claros',
        desc: 'Visualizaciones limpias, entendibles y alineadas a prioridades.'
      },
      step4: {
        title: 'Explicamos los resultados',
        desc: 'Interpretamos hallazgos y recomendamos acciones concretas.'
      }
    },
    gallery: {
      title: 'Proyectos en acción',
      intro: 'Visualizaciones claras, reportes ejecutivos y tableros de control enfocados en resultados.'
    },
    forWhom: {
      title: 'Para quién',
      card1: {
        title: 'Empresas',
        desc: 'Mejoramos el control y la lectura de datos estratégicos.'
      },
      card2: {
        title: 'Pymes',
        desc: 'Tomá decisiones con indicadores claros y objetivos.'
      },
      card3: {
        title: 'Comercios',
        desc: 'Detectá tendencias de ventas y optimizá tu operación.'
      }
    },
    experiences: {
      title: 'Experiencias de uso',
      intro: 'Ejemplos ilustrativos de cómo nuestros servicios impactan positivamente en diferentes tipos de negocios.',
      disclaimer: '* Los testimonios que verás a continuación son ejemplos ilustrativos de uso y no representan clientes reales.',
      testimonial1: {
        text: '"Ahora puedo cambiar textos y servicios sin depender de nadie. Mi web se actualiza al instante y todo funciona perfecto."',
        name: 'Cliente PyME',
        role: 'Propietario'
      },
      testimonial2: {
        text: '"La web se ve profesional y funciona perfecto en el celular. Nuestros clientes están muy satisfechos con la experiencia."',
        name: 'Responsable de Ventas',
        role: 'E-commerce'
      },
      testimonial3: {
        text: '"Tener estadísticas claras nos ayudó a entender mejor a nuestros clientes. Ahora sabemos exactamente qué funciona y qué no."',
        name: 'Analista Digital',
        role: 'Marketing'
      },
      testimonial4: {
        text: '"El panel es muy intuitivo. Mi equipo aprendió a usarlo en minutos. Esto nos ahorró muchísimo tiempo y dinero en mantenimiento."',
        name: 'Gerente de IT',
        role: 'Mediana Empresa'
      }
    },
    contact: {
      title: 'Contacto',
      text: 'Escribinos y coordinamos una primera conversación para entender tu necesidad.',
      email: 'Enviar correo'
    },
    footer: {
      text: '© 2026 Axus Analytics. Consultoría en análisis de datos.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      webEditable: 'Editable website',
      method: 'How we work',
      experiences: 'Experiences',
      forWhom: 'For whom',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Data consulting',
      subtitle: 'Data analysis for businesses',
      lead: 'We transform information into clear decisions.',
      cta: 'Contact',
      metric1: 'Operational efficiency',
      metric2: 'Key monitoring',
      metric3Title: 'Sales',
      metric3: 'Commercial optimization'
    },
    services: {
      title: 'Services',
      intro: 'Clear and actionable solutions to understand and improve your business performance.',
      card1: {
        title: 'Sales analysis',
        desc: 'We identify patterns, opportunities and key variations to boost revenue.'
      },
      card2: {
        title: 'Expense analysis',
        desc: 'We detect inefficiencies and optimize costs based on real data.'
      },
      card3: {
        title: 'Key Performance Indicators (KPIs)',
        desc: 'We define and monitor essential metrics for quick decisions.'
      },
      card4: {
        title: 'Clear and actionable reports',
        desc: 'We deliver simple, accurate and results-focused reports.'
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
    method: {
      title: 'How we work',
      step1: {
        title: 'We receive the data',
        desc: 'We survey your information sources and business objectives.'
      },
      step2: {
        title: 'We analyze the information',
        desc: 'We apply descriptive and diagnostic analysis with professional rigor.'
      },
      step3: {
        title: 'We create clear reports',
        desc: 'Clean, understandable visualizations aligned with priorities.'
      },
      step4: {
        title: 'We explain the results',
        desc: 'We interpret findings and recommend concrete actions.'
      }
    },
    gallery: {
      title: 'Projects in action',
      intro: 'Clear visualizations, executive reports and results-focused dashboards.'
    },
    forWhom: {
      title: 'For whom',
      card1: {
        title: 'Companies',
        desc: 'We improve the control and interpretation of strategic data.'
      },
      card2: {
        title: 'SMEs',
        desc: 'Make decisions with clear and objective indicators.'
      },
      card3: {
        title: 'Retail businesses',
        desc: 'Detect sales trends and optimize your operation.'
      }
    },
    experiences: {
      title: 'User experiences',
      intro: 'Illustrative examples of how our services positively impact different types of businesses.',
      disclaimer: '* The following testimonials are illustrative examples and do not represent real clients.',
      testimonial1: {
        text: '"Now I can change texts and services without depending on anyone. My website updates instantly and everything works perfectly."',
        name: 'SME Client',
        role: 'Owner'
      },
      testimonial2: {
        text: '"The website looks professional and works perfectly on mobile. Our customers are very satisfied with the experience."',
        name: 'Sales Manager',
        role: 'E-commerce'
      },
      testimonial3: {
        text: '"Having clear statistics helped us better understand our customers. Now we know exactly what works and what doesn\'t."',
        name: 'Digital Analyst',
        role: 'Marketing'
      },
      testimonial4: {
        text: '"The panel is very intuitive. My team learned to use it in minutes. This saved us a lot of time and money on maintenance."',
        name: 'IT Manager',
        role: 'Medium Company'
      }
    },
    contact: {
      title: 'Contact',
      text: 'Write to us and we will coordinate a first conversation to understand your needs.',
      email: 'Send email'
    },
    footer: {
      text: '© 2026 Axus Analytics. Data analysis consulting.'
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
