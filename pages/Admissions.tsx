import React from 'react';
import { Link } from 'react-router-dom';

const Admissions: React.FC = () => {
  const steps = [
    { title: "Inscripción en Línea", desc: "Diligencia el formulario y paga los derechos de inscripción.", icon: "app_registration" },
    { title: "Entrega de Documentos", desc: "Carga tu documento de identidad, resultados ICFES y diploma de bachiller.", icon: "upload_file" },
    { title: "Entrevista", desc: "Presenta una entrevista con el director del programa.", icon: "groups" },
    { title: "Matrícula", desc: "Una vez admitido, realiza el pago de tu matrícula para asegurar tu cupo.", icon: "verified" },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Proceso de Admisión</h1>
            <p className="text-xl opacity-90 max-w-2xl">Únete a la nueva generación de ingenieros. Aquí encontrarás todo lo que necesitas saber para ser parte de Unitrópico.</p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-accent mb-6">
                <span className="material-icons text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Requisitos</h2>
            <ul className="space-y-4">
              {[
                "Fotocopia del documento de identidad ampliada al 150%.",
                "Resultado de las pruebas saber 11 (ICFES).",
                "Fotocopia del diploma de bachiller o acta de grado.",
                "Recibo de pago de los derechos de inscripción.",
                "Dos fotos tamaño 3x4 fondo blanco."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-icons text-accent mt-0.5">check_circle</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
               <Link to="/enroll" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-colors">
                 Iniciar Proceso
                 <span className="material-icons text-sm">arrow_forward</span>
               </Link>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop" alt="Estudiantes en campus" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admissions;