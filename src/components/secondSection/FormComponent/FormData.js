

export const FormData = () => {

    const questions = [
        {
            id: 'tipoDepartamento',
            pregunta: '¿Qué tipo de departamento buscás?',
            opciones: ['Monoambiente', 'Dos ambientes', 'Tres ambientes', 'Cuatro ambientes'],
        },
        {
            id: 'zonaDepartamento',
            pregunta: '¿Cuál es tu zona de preferencia?',
            opciones: ['Núñez', 'Saavedra', 'Villa Urquiza', 'Caballito', 'Centro'],
        }
    ]
    
    const info = [
        {label: 'Nombre completo', name: 'nombreCompleto'},
        {label: 'Email', name: 'mail'}, 
        {label: 'Número de teléfono', name: 'telefono'}
    ];

    return {
        questions,
        info,
    }
}
