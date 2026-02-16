import React, { useState } from 'react';
import { Semester } from '../types';

const semestersData: Semester[] = [
  { id: 1, name: "Primer Semestre", subjects: ["Cálculo Diferencial", "Álgebra Lineal", "Introducción a la IA", "Programación Básica", "Física Mecánica"] },
  { id: 2, name: "Segundo Semestre", subjects: ["Cálculo Integral", "Probabilidad y Estadística", "Estructuras de Datos", "Programación Orientada a Objetos", "Física Electromagnética"] },
  { id: 3, name: "Tercer Semestre", subjects: ["Cálculo Multivariado", "Matemáticas Discretas", "Algoritmos y Complejidad", "Bases de Datos I", "Circuitos Digitales"] },
  { id: 4, name: "Cuarto Semestre", subjects: ["Ecuaciones Diferenciales", "Inferencia Estadística", "Machine Learning I", "Bases de Datos II", "Arquitectura de Computadores"] },
  { id: 5, name: "Quinto Semestre", subjects: ["Deep Learning", "Optimización", "Ingeniería de Software", "Sistemas Operativos", "Redes Neuronales"] },
  { id: 6, name: "Sexto Semestre", subjects: ["Procesamiento de Lenguaje Natural", "Visión por Computadora", "Desarrollo Web Fullstack", "Ética en IA", "Electiva I"] },
  { id: 7, name: "Séptimo Semestre", subjects: ["Robótica Inteligente", "Big Data", "Computación en la Nube", "Gestión de Proyectos", "Electiva II"] },
  { id: 8, name: "Octavo Semestre", subjects: ["IA Generativa", "Internet de las Cosas (IoT)", "Ciberseguridad", "Emprendimiento", "Electiva III"] },
  { id: 9, name: "Noveno Semestre", subjects: ["Práctica Profesional", "Seminario de Investigación I", "Electiva IV"] },
  { id: 10, name: "Décimo Semestre", subjects: ["Trabajo de Grado", "Seminario de Investigación II", "Electiva V"] },
];

const Curriculum: React.FC = () => {
  const [activeSemester, setActiveSemester] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-4">Plan de Estudios</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nuestro programa está diseñado para brindarte una base sólida en matemáticas y ciencias de la computación, especializándote en las tecnologías más avanzadas de IA.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Semester Selector */}
          <div className="md:w-1/3 space-y-2">
            {semestersData.map((sem) => (
              <button
                key={sem.id}
                onClick={() => setActiveSemester(sem.id)}
                className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-all flex justify-between items-center ${
                  activeSemester === sem.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 translate-x-2"
                    : "bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <span>{sem.name}</span>
                {activeSemester === sem.id && <span className="material-icons text-sm">chevron_right</span>}
              </button>
            ))}
          </div>

          {/* Subjects Display */}
          <div className="md:w-2/3">
            {activeSemester && (
              <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold shadow-md">
                     {activeSemester}
                   </div>
                   <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Asignaturas</h2>
                </div>
                
                <div className="grid gap-4">
                  {semestersData.find(s => s.id === activeSemester)?.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border-l-4 border-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="material-icons text-accent">school</span>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;