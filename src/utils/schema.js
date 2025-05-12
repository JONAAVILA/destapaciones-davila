import * as Yup from 'yup'

export const validateConsult = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre y Apellido muy corto")
        .max(60,'Nombre y Apellido muy largo')
        .matches('^[a-zA-Z ]+$','Formato inválido')
        .required('El nombre es requerido'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches(/^\+?[0-9 ()-]+$/, "Formato inválido")
        .required('El teléfono es requerido'),
    email:Yup.string()
        .email('Email invalido')    
        .required('El email es requerido'),
    message:Yup.string()
        .min(10)
        .max(300)
        .matches(/^[a-zA-Z0-9\s]+$/,'Formato inválido')
        .required('El mensaje es requerido'),
})