import React from 'react';
import { motion } from 'framer-motion';
import DolarBlue from './components/DolarBlue';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text">
      {/* Fondo de mosaico de imágenes */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Cotización del Dólar Blue */}
        <DolarBlue />

        {/* Sección principal con título y cotizador */}
        <motion.div
          className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-2xl w-full text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-primary mb-4 leading-tight">
            ViajoSeguro.com.ar
          </h1>
          <p className="text-xl font-semibold text-secondary mb-8">
            Tu asistencia para viajar tranquilo, adonde sea que vayas.
          </p>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl shadow-inner mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Calculá tu asistencia al viajero</h2>
            {/* Aquí se renderizará el cotizador de GoAssistance */}
            <div id="landing" className="w-full"></div>
          </div>
        </motion.div>

        {/* Sección de Contacto */}
        <section id="contacto" className="w-full max-w-2xl mb-12">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="w-full bg-primary text-white py-6 px-4 text-center rounded-t-3xl shadow-inner">
          <p className="text-lg font-semibold mb-2">Contacto: Eduardo Di Fermo | WhatsApp: 11-4175-3202</p>
          <p className="text-sm opacity-80">
            ViajoSeguro.com.ar es un sitio de ventas de asistencia al viajero operado por el agente autorizado Eduardo Di Fermo para GoAssistance.
          </p>
        </footer>
      </div>
    </div>
  );
}