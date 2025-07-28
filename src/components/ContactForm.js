import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';

const countryCodes = [
  { code: '+54', name: 'Argentina' },
  { code: '+1', name: 'Estados Unidos' },
  { code: '+34', name: 'España' },
  { code: '+52', name: 'México' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+51', name: 'Perú' },
  { code: '+598', name: 'Uruguay' },
  { code: '+591', name: 'Bolivia' },
  { code: '+55', name: 'Brasil' },
  { code: '+593', name: 'Ecuador' },
  { code: '+58', name: 'Venezuela' },
  { code: '+507', name: 'Panamá' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+504', name: 'Honduras' },
  { code: '+503', name: 'El Salvador' },
  { code: '+502', name: 'Guatemala' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+595', name: 'Paraguay' },
  // Agrega más países según sea necesario
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+54',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Solo permitir números en el campo de teléfono
      setFormData({ ...formData, [name]: value.replace(/[^0-9]/g, '') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Aquí iría la lógica para enviar el correo.
    // En un entorno real, esto se manejaría con un backend (por ejemplo, un servicio de correo como EmailJS, SendGrid, o una función serverless).
    // Dado que no podemos ejecutar código de backend directamente aquí, simularemos el envío.
    console.log("Datos del formulario:", formData);

    // Simulación de envío exitoso
    setTimeout(() => {
      setStatus('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({
        name: '',
        email: '',
        countryCode: '+54',
        phone: '',
        message: ''
      });
    }, 1500);

    // Si fuera un envío real a un servicio como EmailJS, se vería algo así:
    /*
    try {
      const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
      console.log('SUCCESS!', response.status, response.text);
      setStatus('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({ name: '', email: '', countryCode: '+54', phone: '', message: '' });
    } catch (err) {
      console.log('FAILED...', err);
      setStatus('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
    */
  };

  return (
    <motion.div
      className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="sr-only">Nombre</label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Teléfono</label>
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="flex-shrink-0 bg-gray-100 border border-gray-300 rounded-l-xl py-3 px-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} ({country.name})
                </option>
              ))}
            </select>
            <div className="relative flex-grow">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Mensaje</label>
          <div className="relative">
            <FaCommentDots className="absolute left-4 top-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              rows="5"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-y"
            ></textarea>
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPaperPlane />
          <span>Enviar Mensaje</span>
        </motion.button>

        {status && (
          <motion.p
            className={`mt-4 text-center font-medium ${status.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;