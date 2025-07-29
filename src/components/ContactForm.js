function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mleqzybn"
      method="POST"
      className="flex flex-col gap-4 max-w-md mx-auto p-4"
    >
      <input type="text" name="nombre" placeholder="Nombre" required className="border p-2 rounded" />
      <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
      <input type="tel" name="telefono" placeholder="Teléfono" className="border p-2 rounded" />
      <textarea name="mensaje" placeholder="¿En qué podemos ayudarte?" rows="4" required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
