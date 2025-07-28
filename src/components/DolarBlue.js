import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign } from 'react-icons/fa';

const DolarBlue = () => {
  const [dolarPrice, setDolarPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDolarBlue = async () => {
      try {
        // Usamos un proxy CORS para evitar problemas de CORS con la API externa
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDolarPrice(data.blue.value_sell);
      } catch (e) {
        console.error("Error al obtener la cotización del dólar blue:", e);
        setError("No disponible");
      } finally {
        setLoading(false);
      }
    };

    fetchDolarBlue();
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchDolarBlue, 300000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaDollarSign className="text-green-500 text-lg" />
      <span className="text-gray-800 font-semibold text-sm">
        Dólar Blue: {loading ? 'Cargando...' : error ? error : `$${dolarPrice}`}
      </span>
    </motion.div>
  );
};

export default DolarBlue;