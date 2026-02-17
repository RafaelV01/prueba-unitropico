import React from 'react';

const Condition01_Denominacion: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">description</span>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Contenido de Denominación</h3>
                <p className="text-gray-600 max-w-md">
                    Aquí puedes detallar la denominación del programa, incluyendo el título que otorga, la duración, la modalidad, etc.
                </p>
            </div>
            {/* Example of rich content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Título que Otorga</h4>
                    <p className="text-sm text-gray-600">Ingeniero(a) en Inteligencia Artificial</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Duración</h4>
                    <p className="text-sm text-gray-600">9 Semestres</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Título que Otorga</h4>
                    <p className="text-sm text-gray-600">Ingeniero(a) en Inteligencia Artificial</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Duración</h4>
                    <p className="text-sm text-gray-600">9 Semestres</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Título que Otorga</h4>
                    <p className="text-sm text-gray-600">Ingeniero(a) en Inteligencia Artificial</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Duración</h4>
                    <p className="text-sm text-gray-600">9 Semestres</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Título que Otorga</h4>
                    <p className="text-sm text-gray-600">Ingeniero(a) en Inteligencia Artificial</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Duración</h4>
                    <p className="text-sm text-gray-600">9 Semestres</p>
                </div>
            </div>
        </div>
    );
};

export default Condition01_Denominacion;
