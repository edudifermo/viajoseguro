import { useEffect } from 'react';

function Cotizador() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://back.goassistance.com/cotizador/js/cotizador2024.js";
    script.async = true;
    script.onload = () => {
      if (window.createlanding) {
        window.createlanding(
          "KDpzJ7bpHSeUGiHD%2FVDOAzW5u6FwBw0c6YLXi1ETAcA%2Fl5IaNuQjwWpwWhzd8DGoTSSUR7k72Oc%3D",
          ["origen", "destino", "fechas", "edades", "email", "telefono"],
          32,
          "es-ES",
          0,
          "GO"
        );
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="cotizador py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Cotizá tu asistencia al viajero</h2>
      <div id="landing"></div>
    </div>
  );
}

export default Cotizador;
