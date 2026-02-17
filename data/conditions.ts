
export const conditions = [
    { id: '01', title: 'Denominación', icon: 'FileText' },
    { id: '02', title: 'Justificación', icon: 'Target' },
    { id: '03', title: 'Curricular', icon: 'BookOpen' },
    { id: '04', title: 'Organización', icon: 'Briefcase' },
    { id: '05', title: 'Investigación', icon: 'Search' },
    { id: '06', title: 'Sector', icon: 'Handshake' },
    { id: '07', title: 'Docentes', icon: 'GraduationCap' },
    { id: '08', title: 'Medios', icon: 'Monitor' },
    { id: '09', title: 'Infraestructura', icon: 'Building' },
];

export const conditionDetails: { [key: string]: { title: string; description: string } } = {
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
