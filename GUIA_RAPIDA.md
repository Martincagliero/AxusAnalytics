# GUÍA RÁPIDA - Cómo usar la nueva sección Proyectos

## ¿Qué se hizo?

Se rediseñó completamente la sección "Proyectos" con:

✅ Layout en 2 columnas (imagen izquierda, contenido derecha)  
✅ Mockups flotantes con rotación sutil  
✅ Animaciones suaves (fade-in + floating)  
✅ Efectos hover mejorados (scale + sombra profunda)  
✅ Bordes con glow cyan  
✅ 100% responsive (mobile: imagen arriba, texto abajo)  
✅ Alternancia automática de columnas por proyecto  

---

## Próximos pasos

### 1. Crear tus mockups
- Haz screenshots de tus proyectos (desktop)
- Recorta mostrando lo más representativo
- Fondo oscuro preferentemente

### 2. Exportar las imágenes
- Formato: **PNG** (con fondo transparente) o JPG
- Tamaño: 800-1000px de ancho
- Coloca en carpeta: `/images/`

### 3. Nombrar los archivos EXACTAMENTE así:
```
proyecto1-desktop.png    (Portfolio profesional)
proyecto2-desktop.png    (Sistema de turnos barberías)
proyecto3-desktop.png    (Web artista textil)
```

### 4. Verifica en navegador
- Abre el sitio
- Ve a sección "Proyectos"
- ¡Los mockups aparecerán automáticamente con todos los efectos!

---

## ¿Qué vería el usuario en la sección Proyectos?

### Desktop (≥860px)
```
[MOCKUP FLOTANTE]    TITULO
[FLOTA 6s]           DESCRIPCION
[Rot ±1°]            ✓ Beneficio 1
[Glow Cyan]          ✓ Beneficio 2
[Shadow]             ✓ Beneficio 3
                     ✓ Beneficio 4
                     [Ver proyecto] [Solicitar similar]
```

Alternado: siguiente proyecto tiene imagen a la derecha

### Mobile (<600px)
```
[MOCKUP FLOTANTE]
[Flota 4s]
[Rot 0°]

TITULO
DESCRIPCION
✓ Beneficio 1
✓ Beneficio 2
✓ Beneficio 3
✓ Beneficio 4

[Ver proyecto]
[Solicitar similar]
```

---

## Efectos visuales incluidos

### Animaciones automáticas:

| Efecto | Duración | Cantidad |
|--------|----------|----------|
| Entrada (fade+slide) | 0.8s | Al cargar |
| Flotar | 6s | Infinito |
| Hover scale | 0.3s | Al pasar mouse |
| Rotación | 6s | Infinito ±1° |

### Estilos:
- Sombras con glow cyan (0 0 60px)
- Bordes redondeados (20px)
- Borde con alpha: rgba(0, 212, 255, 0.2)
- Escala hover: 102%
- Paleta: dark + cyan acentos

---

## Especificaciones técnicas

### Tamaño recomendado:
- Ancho: 800-1000px
- Alto: Auto (mantiene proporción)
- Proporción: 16:9 ideal

### Información dentro del HTML:
```html
<img src="images/proyecto1-desktop.png" alt="..." />
```

### Estructura mantenida:
- Todos los `data-i18n` intactos (compatible con language-switcher.js)
- URLs de proyectos directo a live demos
- Misma estructura de beneficios y CTAs

---

## ¿Qué cambia si cambio el nombre del archivo?

❌ **NO FUNCIONARÁ**
```
proyecto-1-desktop.png      ✗
Proyecto1.png               ✗
proyecto1.jpg               ✗ (si la ruta dice .png)
```

✅ **FUNCIONARÁ**
```
proyecto1-desktop.png       ✓
proyecto1-desktop.jpg       ✓ (también vale JPG)
```

---

## Personalización (Opcionales)

### Cambiar color del glow:
En `style.css` busca `rgba(0, 212, 255, ...)`

### Cambiar velocidad de flotación:
En `style.css` busca `animation: floatMockup 6s`

### Cambiar espaciado entre proyectos:
En `style.css` busca `.projects-grid-modern { gap: 80px; }`

### Cambiar escala en hover:
En CSS busca `transform: scale(1.02)`

---

## Archivos modificados

```
✓ index.html (sección proyectos 181-280)
✓ style.css (nuevos estilos + responsive)
✓ images/proyecto1-desktop.png (placeholder)
✓ images/proyecto2-desktop.png (placeholder)
✓ images/proyecto3-desktop.png (placeholder)
✓ images/PLACEHOLDER_INSTRUCTIONS.md
✓ PROYECTOS_DOCUMENTACION.md (documentación completa)
✓ GUIA_RAPIDA.md (este archivo)
```

---

## Troubleshooting

### Las imágenes no se ven
- ¿Están en `/images/`?
- ¿Tienen el nombre exacto?
- ¿Refrescaste el navegador (Ctrl+F5)?

### La animación se ve extraña
- Desactiva adblocks
- Comprueba que tu navegador sea moderno
- En móvil puede verse más lenta (es normal, es más suave)

### Los botones no funcionan
- Verifica que las URLs tengan `https://`
- El mailto está funcionando

---

## Soporte

Para cambios adicionales o problemas, contacta al equipo de desarrollo.

**Última actualización:** 8 de febrero de 2026
