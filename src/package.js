on

{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "^5.0.0",
    "framer-motion": "latest",
    "react-icons": "latest",
    "react-router-dom": "latest"
  },
  "main": "/index.js",
  "devDependencies": {}
}


ADD FILE: /public/index.html
html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ViajoSeguro.com.ar - Tu asistencia para viajar tranquilo</title>
    <link rel="icon" href="/favicon.ico" />
    <!-- Cotizador NUEVO: Scripts para el header -->
    <script type="text/javascript" language="javascript" src="https://back.goassistance.com/cotizador/js/cotizador2024.js"></script>
    <script>createlanding("KDpzJ7bpHSeUGiHD%2FVDOAzW5u6FwBw0c6YLXi1ETAcA%2Fl5IaNuQjwWpwWhzd8DGoTSSUR7k72Oc%3D", ["origen", "destino", "fechas", "edades", "email", "telefono"], 32, "es-ES", 0, "GO");</script>
  </head>
  <body>
    <div id="root"></div>
    <!-- Cotizador NUEVO: Div para el cotizador -->
    <div id="landing"></div>
  </body>
</html>


ADD FILE: /styles.css
css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    font-family: sans-serif;
    -webkit-font-smoothing: auto;
    -moz-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: auto;
    text-rendering: optimizeLegibility;
    font-smooth: always;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}