import React, { useState } from 'react';
import { apiService } from '../services/apiService';
import { FormData, FormStatus } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', program: 'Ingeniería IA', message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      const res = await apiService.submitContactForm(formData);
      setStatus(FormStatus.SUCCESS);
      setResponseMsg(res.message);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', program: 'Ingeniería IA', message: '' });
    } catch (error) {
      setStatus(FormStatus.ERROR);
      setResponseMsg("Hubo un error al enviar el formulario. Intenta nuevamente.");
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Info Side */}
        <div className="md:w-5/12 bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
            <p className="opacity-90 mb-8">¿Tienes dudas sobre el programa? Déjanos tus datos y un asesor se comunicará contigo.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-icons bg-white/20 p-2 rounded-full">phone</span>
                <span>+57 (8) 632 0700</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons bg-white/20 p-2 rounded-full">email</span>
                <span>admisiones@unitropico.edu.co</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons bg-white/20 p-2 rounded-full">location_on</span>
                <span>Cra 19 No. 39-40, Yopal, Casanare</span>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 pt-8 border-t border-white/20">
             <p className="text-sm opacity-70">Síguenos en redes sociales</p>
             <div className="flex gap-4 mt-4">
               {/* Social Icons Mock */}
               <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-accent cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-accent cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-accent cursor-pointer transition-colors"></div>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-7/12 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellido</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje (Opcional)</label>
               <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"></textarea>
            </div>

            <button disabled={status === FormStatus.SUBMITTING} type="submit" className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
              {status === FormStatus.SUBMITTING ? (
                <>
                  <span className="material-icons animate-spin mr-2 text-sm">refresh</span> Enviando...
                </>
              ) : "Solicitar Información"}
            </button>

            {status === FormStatus.SUCCESS && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2">
                <span className="material-icons">check_circle</span> {responseMsg}
              </div>
            )}
            {status === FormStatus.ERROR && (
               <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2">
                 <span className="material-icons">error</span> {responseMsg}
               </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;