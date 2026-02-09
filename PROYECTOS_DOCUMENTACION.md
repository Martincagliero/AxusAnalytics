# Sección Proyectos - Documentación de Mejoras

## Resumen de cambios

Se ha rediseñado completamente la sección "Proyectos" del portfolio web con un layout moderno en 2 columnas, mockups flotantes con efectos visuales premium, y animaciones suaves.

---

## Estructura HTML

### Cambios principales:

**Archivo:** `index.html` (líneas 181-280)

La nueva estructura reemplaza los `<iframe>` con un layout responsive en grid:

```html
<article class="project-card-modern">
  <div class="project-mockup-container">
    <div class="project-mockup">
      <img src="images/proyecto1-desktop.png" alt="..." class="mockup-image" />
      <div class="mockup-glow"></div>
    </div>
  </div>
  <div class="project-info">
    <span class="project-type">Portfolio Web</span>
    <h4 class="project-title">Título del proyecto</h4>
    <p class="project-description">Descripción</p>
    <div class="project-benefits">...</div>
    <div class="project-actions">...</div>
  </div>
</article>
```

### Elementos clave:

- **`.project-mockup-container`** - Contenedor con perspectiva 3D
- **`.project-mockup`** - Wrapper con animación de flotación
- **`.mockup-image`** - Imagen del proyecto (PNG/JPG)
- **`.mockup-glow`** - Efecto de brillo detrás de la imagen
- **`.project-info`** - Contenedor de toda la información textual
- **`.project-type`** - Badge con tipo de proyecto (Portfolio Web, Sistema Web, etc.)

---

## Estilos CSS

### Archivo: `style.css` (líneas 1391-1568)

#### Grid principal (`.projects-grid-modern`)
- Espaciado de 80px entre proyectos
- Max-width: 1200px
- Una columna de proyectos

#### Cards (`.project-card-modern`)
- Grid 2-columnas: `1fr 1.2fr` (imagen, contenido)
- Espaciado: 64px entre columnas
- Alternancia de dirección: proyectos pares se invierten con `direction: rtl`
- Animación entrada: `fadeInUpProjects` (0.8s)

#### Animaciones configuradas:

**1. Entrada (fadeInUpProjects)**
```css
@keyframes fadeInUpProjects {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**2. Flotación (floatMockup)**
```css
@keyframes floatMockup {
  0%, 100% { transform: translateY(0px) rotateZ(1deg); }
  50% { transform: translateY(-20px) rotateZ(-0.5deg); }
}
```
- Duración: 6 segundos
- Movimiento vertical: -20px
- Rotación sutil: ±1 grado

#### Estilos de mockup (`.mockup-image`)
- Border-radius: 20px
- Sombras multicapa:
  - Sombra base: `0 20px 60px rgba(0,0,0,0.6)`
  - Glow cyan: `0 0 60px rgba(0,212,255,0.15)`
  - Inner highlight: `inset 0 1px 0 rgba(255,255,255,0.1)`

#### Hover effects
- Scale: `1.02`
- Sombra más profunda
- Glow intensificado

#### Badges de tipo (`.project-type`)
- Fondo: `rgba(6,182,212,0.1)`
- Borde: `1px solid rgba(6,182,212,0.3)`
- Texto: Cyan (#06b6d4)
- Uppercase con letter-spacing

---

## Responsive Design

### Breakpoint 860px (`.project-card-modern`)
- Grid cambia a 1 columna
- Espaciado reducido a 40px
- Alternancia desactivada
- Animación de flotación removida

### Breakpoint 600px (Mobile)
- Grid sigue siendo 1 columna
- Imagen arriba, contenido abajo
- Animación flotación simplificada: `floatMockupMobile` (4s, ±12px)
- Espaciado: 28px entre secciones
- Tipografía ajustada
- Botones en columna única

---

## Especificaciones de imágenes

### Archivos requeridos:
1. `images/proyecto1-desktop.png`
2. `images/proyecto2-desktop.png`
3. `images/proyecto3-desktop.png`

### Recomendaciones técnicas:
- **Formato:** PNG (fondo transparente preferido) o JPG
- **Ancho recomendado:** 800-1000px
- **Proporción:** 16:9 o similar
- **Resolución:** 72 DPI mínimo
- **Fondo:** Oscuro para consistencia

### Placeholder actual:
Se han creado SVGs placeholder en `/images/` que actúan como guía visual hasta que subas tus mockups.

---

## Paleta de colores utilizada

```css
--blue-cyan: #06b6d4        /* Acentos y glows */
--blue-electric: #2563eb    /* Gradientes */
--blue-dark: #0a1628        /* Fondo principal */
--white: #ffffff            /* Texto principal */
--text-secondary: rgba(255, 255, 255, 0.8)
--gray-400: #94a3b8         /* Bordes sutiles */
```

---

## Transiciones

```css
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Características implementadas

✅ **Layout 2-columnas alternado**
- Imagen izquierda, contenido derecha
- Alterna en proyectos pares

✅ **Mockups fotantes**
- Animación suave de 6 segundos
- Rotación sutil (±1°)
- Movimiento vertical (-20px)

✅ **Efectos visuales premium**
- Sombras multicapa con glow cyan
- Bordes redondeados (20px)
- Border con gradient sutil

✅ **Entrada suave**
- Fade + translateY(40px)
- Delay escalonado entre proyectos

✅ **Hover effects**
- Scale(1.02)
- Sombra profunda
- Glow intensificado
- Transición fluida

✅ **Responsive completo**
- 860px: 1 columna, sin animación float
- 600px: Optimizado para móvil con animación float reducida

✅ **Internacionalización**
- Mantiene todos los `data-i18n` del HTML original
- Completamente compatible con language-switcher.js

---

## Cómo personalizar

### Cambiar colores de glow:
**Archivo:** `style.css`

```css
/* Busca y reemplaza */
rgba(0, 212, 255, ...) /* Color actual: cyan */
```

### Ajustar velocidad de animación:
```css
.project-mockup {
  animation: floatMockup 6s ease-in-out infinite;
  /* Cambia 6s por otro valor */
}
```

### Modificar espaciado:
```css
.projects-grid-modern {
  gap: 80px; /* Espaciado entre proyectos */
}

.project-card-modern {
  gap: 64px; /* Espaciado entre mockup y contenido */
}
```

### Cambiar intensidad de sombra:
```css
.mockup-image {
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.6),  /* Aumenta último número para más sombra */
    0 0 60px rgba(0, 212, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
```

---

## Notas importantes

1. **No se modificaron otras secciones** - El resto del sitio permanece igual
2. **Compatibilidad total** - Funciona con el sistema de idiomas existente
3. **Performance** - Todas las animaciones usan `transform` y `opacity` (optimizadas)
4. **Accesibilidad** - Mantiene estructura semántica y atributos ARIA
5. **Browser support** - Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## Próximos pasos

1. **Crea tus mockups** en diseño actual del sitio
2. **Exporta como PNG/JPG** (preferible fondo transparente)
3. **Copia a `/images/`** con los nombres exactos:
   - `proyecto1-desktop.png`
   - `proyecto2-desktop.png`
   - `proyecto3-desktop.png`
4. **Verifica en navegador** - Los mockups aparecerán automáticamente con todos los efectos

---

## Soporte

Si necesitas hacer cambios adicionales o agregar más proyectos, contáctame.

**Fecha de creación:** 8 de febrero de 2026
**Última actualización:** 8 de febrero de 2026
