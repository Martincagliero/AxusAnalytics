# Ruleta 3D - Guía de Implementación

## Overview

La sección Proyectos ahora muestra una **ruleta circular 3D** donde los mockups (desktop y mobile) giran continuamente alrededor de un eje central.

## Estructura de archivos

Cada proyecto necesita **2 imágenes** en `/images/`:

```
images/
├── proyecto1-desktop.png    (mockup desktop - ancho)
├── proyecto1-mobile.png     (mockup mobile - alto)
├── proyecto2-desktop.png
├── proyecto2-mobile.png
├── proyecto3-desktop.png
└── proyecto3-mobile.png
```

## Especificaciones de imágenes

### Desktop
- **Ancho:** 280px (se adapta con CSS)
- **Alto:** 420px (proporción: 2:3 aproximadamente)
- **Formato:** PNG o JPG
- **Fondo:** Blanco o transparente preferido

### Mobile
- **Ancho:** 160px (se adapta con CSS)
- **Alto:** 320px
- **Formato:** PNG o JPG
- **Fondo:** Blanco o transparente preferido

**Nota:** Las imágenes se redimensionan automáticamente en responsive.

## Animaciones incluidas

### Rotación 3D
```css
animation: rotate3d 12s linear infinite;
```
- **Duración:** 12 segundos
- **Tipo:** Rotación Y continua (360°)
- **Tilt:** RotateX: 5° (para efecto subido)
- **Loop:** Infinito

### Float vertical
```css
animation: floatVertical 4s ease-in-out infinite;
```
- **Movimiento:** ±20px vertical
- **Duración:** 4 segundos
- **Suavidad:** ease-in-out

### Efectos de escala en hover
- **Scale:** 1.05 (5% más grande)
- **Sombra:** Se profundiza
- **Glow:** Aumenta intensidad

## Interactividad

### Hover
```javascript
item.addEventListener('mouseenter', () => {
  // Pausa la rotación
  container.style.animationPlayState = 'paused';
});

item.addEventListener('mouseleave', () => {
  // Resume la rotación
  container.style.animationPlayState = 'running';
});
```

**Efecto:**
- Ruleta se pausa al pasar el mouse
- Scale(1.05) en los mockups
- Al salir, resume la animación suavemente

## Responsive Design

### Desktop (>860px)
- Ruleta 3D completa visible
- **Contenedor:** 360x360px
- **Radio:** 180px
- **Ángulo rotateX:** 5°
- **Duración:** 12s

### Tablet (600px - 860px)
- Ruleta sin tilt (rotateX: 0°)
- **Contenedor:** 320x320px
- **Radio:** reducido
- **Duración:** 12s

### Mobile (<600px)
- Animación simplificada
- **Contenedor:** 280x280px
- **Rotación alternada:** 180° por mitad
- **Duración:** 14s (más lento)
- Alternar entre desktop y mobile en lugar de girar continuamente

## Estructura HTML

```html
<article class="project-carousel-item">
  <div class="carousel-3d-wrapper">
    <div class="carousel-3d-container" data-mockups="2">
      <!-- Mockup 1: Desktop (ángulo 0°) -->
      <div class="mockup-slide" style="--index: 0">
        <div class="mockup-frame">
          <img src="images/proyecto1-desktop.png" alt="..." />
        </div>
      </div>
      
      <!-- Mockup 2: Mobile (ángulo 180°) -->
      <div class="mockup-slide" style="--index: 1">
        <div class="mockup-frame mockup-mobile">
          <img src="images/proyecto1-mobile.png" alt="..." />
        </div>
      </div>
    </div>
  </div>
  
  <div class="project-info">
    <!-- Info del proyecto -->
  </div>
</article>
```

## Propiedades CSS clave

### Perspectiva 3D
```css
.carousel-3d-wrapper {
  perspective: 1200px;
}

.carousel-3d-container {
  transform-style: preserve-3d;
}
```

### Posicionamiento circular
```css
.mockup-slide {
  --total-mockups: 2;
  --angle: calc(var(--index) * (360deg / var(--total-mockups)));
  --radius: 180px;
  
  transform: 
    rotateY(var(--angle))        /* Ángulo en el círculo */
    translateZ(var(--radius))    /* Distancia del centro */
    rotateY(calc(var(--angle) * -1)); /* Enfrenta la cámara */
}
```

**Cálculo para 2 mockups:**
- Mockup 1 (index 0): ángulo = 0°, frente a la cámara
- Mockup 2 (index 1): ángulo = 180°, detrás, gira hacia nosotros

## Personalización

### Cambiar velocidad de rotación
En `style.css`, busca:
```css
.carousel-3d-container {
  animation: rotate3d 12s linear infinite;
  /* Cambia 12s por otro valor */
}
```

### Cambiar intensidad del tilt
```css
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg) rotateX(5deg);
    /* Cambia 5deg por otro valor */
  }
  100% {
    transform: rotateY(360deg) rotateX(5deg);
  }
}
```

### Cambiar distancia del círculo (radius)
```css
.mockup-slide {
  --radius: 180px;
  /* Cambia 180px a un valor menor o mayor */
}
```

### Cambiar tamaño de mockups
```css
.mockup-frame {
  width: 280px;
  height: 420px;
  /* Ajusta estos valores */
}

.mockup-mobile {
  width: 160px;
  height: 320px;
}
```

### Cambiar colores del glow
```css
.mockup-frame {
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(0, 212, 255, 0.1),
    /* Cambia rgba(0, 212, 255, ...) a otro color */
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

## Agregar más proyectos

1. **Copia la estructura** de un `project-carousel-item`
2. **Actualiza los IDs:**
   ```html
   data-project-id="project-4"
   ```
3. **Crea las imágenes:**
   ```
   proyecto4-desktop.png
   proyecto4-mobile.png
   ```
4. **Actualiza los textos** (datos-i18n, títulos, descripciones)
5. **Ajusta animation-delay** si quieres efecto escalonado en entrada

## Agregar más mockups por proyecto

Para agregar un 3er mockup (ej: tablet):

```html
<div class="mockup-slide" style="--index: 2">
  <div class="mockup-frame mockup-tablet">
    <img src="images/proyecto1-tablet.png" alt="..." />
  </div>
</div>
```

Y actualizar:
```html
<div class="carousel-3d-container" data-mockups="3">
```

**El ángulo se calcula automáticamente:**
- 2 mockups: 0°, 180°
- 3 mockups: 0°, 120°, 240°
- 4 mockups: 0°, 90°, 180°, 270°

## Temas de render 3D

### Performance
- Usa `transform` para animaciones (GPU acelerado)
- Evita cambios en `width/height` durante animaciones
- Remove.mockup-slide tiene `transform-style: preserve-3d` para mantienen el orden

### Navegadores soportados
- Chrome/Edge: ✓ Total support
- Firefox: ✓ Total support  
- Safari: ✓ Total support (iOS 13+)
- IE: ✗ No soportado

### Fallback para navegadores viejos
The mockups mantienen estructura estática si CSS 3D no es soportado.

## Debugging

### Visible pero no rota
- Verifica que `perspective` esté en el wrapper
- Comprueba que `transform-style: preserve-3d` esté en el contenedor

### Mockups no se ven
- Verifica rutas: `/images/proyecto*-*.png`
- Comprueba que las imágenes existen
- Abre console (F12) para ver errores

### Animación no se pausa en hover
- Verifica que el JavaScript de carousel esté cargando
- Abre DevTools > Console para ver errores

## Ficheros modificados

```
✓ index.html        - Nueva estructura HTML
✓ style.css         - Estilos 3D + responsive
✓ (new)             - Este archivo CAROUSEL_3D_GUIDE.md
```

---

**Última actualización:** 8 de febrero de 2026
**Versión:** 1.0
