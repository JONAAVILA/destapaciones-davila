import emailjs from 'emailjs-com'

const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_PUBLIC_KEY } = import.meta.env

export async function sendEmail(values) {
    const{ name,email,phone,message } = values

    const templateParams = {
        from_name: `👋 ${name}`,
        from_email: email,
        message: `Consulta : ${message} y mi teléfono es ${phone}`
    }
    
    try {
        await emailjs.send(
            PUBLIC_SERVICE_ID,
            PUBLIC_TEMPLATE_ID,
            templateParams,
            PUBLIC_PUBLIC_KEY
        )
        return true
    } catch (error) {
        return error.message
    }
}