import React, { useState } from 'react';
import { apiService } from '../services/apiService';

const Enroll: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      await apiService.submitEnrollment({});
      setIsSubmitting(false);
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-icons text-4xl text-green-600 dark:text-green-400">check_circle</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 dark:text-white">¡Pre-inscripción Exitosa!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Hemos recibido tus datos. Revisa tu correo electrónico para continuar con el proceso de pago y carga de documentos.</p>
          <button onClick={() => window.location.href = '/'} className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">Volver al Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary dark:text-white">Formulario de Inscripción</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Periodo Académico 2026-A</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2"></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold dark:text-white mb-4">Datos Personales</h3>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Nombres" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
                <input required type="text" placeholder="Apellidos" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <input required type="text" placeholder="Documento de Identidad" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              <input required type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold dark:text-white mb-4">Información de Contacto</h3>
              <input required type="email" placeholder="Correo Electrónico" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              <input required type="tel" placeholder="Teléfono Celular" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Departamento" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
                <input required type="text" placeholder="Ciudad" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold dark:text-white mb-4">Información Académica</h3>
              <input required type="text" placeholder="Colegio de Procedencia" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary outline-none" />
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <input type="checkbox" id="terms" required className="w-5 h-5 text-primary focus:ring-primary rounded" />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">Acepto la política de tratamiento de datos personales y los términos de inscripción.</label>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-2 rounded-lg text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Atrás
              </button>
            ) : <div></div>}
            
            <button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center">
              {isSubmitting ? 'Procesando...' : (step === 3 ? 'Finalizar Inscripción' : 'Siguiente')}
              {!isSubmitting && step < 3 && <span className="material-icons ml-2 text-sm">arrow_forward</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;