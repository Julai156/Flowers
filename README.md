# Floral Love

Una escena romántica en React donde gerberas y tulipanes crecen hasta componer el mensaje **I ♥ U**.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Vite mostrará la URL local (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/App.jsx`: escena principal y línea de tiempo GSAP.
- `src/components/FlowerHeart.jsx`: composición del corazón floral.
- `src/components/LetterI.jsx` y `LetterU.jsx`: letras botánicas.
- `src/components/AnimatedFlower.jsx`: gerberas y tulipanes SVG reutilizables.
- `src/components/Background.jsx`: atmósfera, textura y pétalos ambientales.
- `src/components/Botanical.jsx`: tallos y hojas reutilizables.
- `src/styles.css`: dirección visual, responsive y accesibilidad de movimiento.
