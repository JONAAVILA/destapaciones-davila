import emailjs from 'emailjs-com'

const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_PUBLIC_KEY } = import.meta.env

export async function sendEmail(values) {

    const{ name,email,phone,message } = values
    console.log('values:',name,email,phone,message)

    const templateParams = {
        from_name: `👋 ${name}`,
        from_email: email,
        message: `Consulta : ${message} y mi teléfono es ${phone}`
    }
    
    try {
        const res = await emailjs.send(
            PUBLIC_SERVICE_ID,
            PUBLIC_TEMPLATE_ID,
            templateParams,
            PUBLIC_PUBLIC_KEY
        )
        console.log('res adap:',res)
        return true
    } catch (error) {
        return error.message
    }
}