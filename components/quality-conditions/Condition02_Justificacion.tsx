import React from 'react';

const Condition02_Justificacion: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">lightbulb</span>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Contenido de Justificación</h3>
                <p className="text-gray-600 max-w-md">
                    Explica aquí la justificación del programa, el por qué es necesario en la región y el país, y su pertinencia académica y social.
                </p>
            </div>
        </div>
    );
};

export default Condition02_Justificacion;
