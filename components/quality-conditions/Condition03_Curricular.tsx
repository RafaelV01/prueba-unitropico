import React from 'react';

const Condition03_Curricular: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">school</span>
                <h3 className="text-lg font-bold text-gray-500 mb-2">Aspectos Curriculares</h3>
                <p className="text-gray-600 max-w-md">
                    Detalla aquí el plan de estudios, los componentes de formación, las competencias que se desarrollan y la flexibilidad curricular.
                </p>
            </div>
        </div>
    );
};

export default Condition03_Curricular;
