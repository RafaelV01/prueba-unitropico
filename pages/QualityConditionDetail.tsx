import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const conditionDetails: { [key: string]: { title: string; description: string } } = {
    '01': { title: 'Denominación', description: 'Detalles sobre la denominación del programa.' },
    '02': { title: 'Justificación', description: 'Justificación y pertinencia del programa.' },
    '03': { title: 'Aspectos Curriculares', description: 'Estructura y contenidos curriculares.' },
    '04': { title: 'Organización', description: 'Organización de las actividades académicas.' },
    '05': { title: 'Investigación', description: 'Componente de investigación y creación artística.' },
    '06': { title: 'Relación Sector', description: 'Relación con el sector externo.' },
    '07': { title: 'Personal Docente', description: 'Cualificación y dedicación del personal docente.' },
    '08': { title: 'Medios Educativos', description: 'Disponibilidad de medios educativos e infraestructura.' },
    '09': { title: 'Infraestructura', description: 'Infraestructura física y tecnológica.' },
};

const QualityConditionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const detail = id ? conditionDetails[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!detail) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-32">
                <h1 className="text-3xl font-display font-bold text-primary mb-4">Condición no encontrada</h1>
                <button
                    onClick={() => navigate('/quality-conditions')}
                    className="px-6 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition-colors"
                >
                    Volver
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen w-full bg-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate('/quality-conditions')}
                        className="flex items-center text-gray-500 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        Volver
                    </button>
                    <span className="h-6 w-px bg-gray-300"></span>
                    <span className="text-secondary font-display font-bold text-xl">{id}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                    {detail.title}
                </h1>

                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                    {detail.description}
                </p>

                <div className="p-8 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">construction</span>
                    <h3 className="text-lg font-bold text-gray-500 mb-2">Contenido en Desarrollo</h3>
                    <p className="text-gray-400 max-w-md">
                        La información detallada para esta condición de calidad está siendo actualizada.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default QualityConditionDetail;
