import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { validateConsult } from '../../utils/schema'
import { sendEmail } from '../../adapters/sendConsult'
import Alert from './modal/Alert'
import Loader from './loader/Loader'
import './formReact.css'

const FormReact = ()=>{
    const [alert,setAlert] = useState('')
    const [loader,setLoader] = useState(false)

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <div className='container_form' >
            <span className='circle_form' />
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {loader && <Loader size={80} />}
            <Formik
                initialValues={{
                    name:'',
                    phone:'',
                    email:'',
                    message:''
                }}
                validationSchema={validateConsult}
                    onSubmit={ async (values,actions)=>{
                        try {
                            setLoader(!loader)
                            const res = await sendEmail(values)
                            setLoader(false)
                            actions.resetForm()
                            if(res) setAlert(`En poco tiempo estaremos en contacto ${values.name} 🙌`) 
                        } catch (error) {
                            setLoader(false)
                            actions.resetForm()
                            setAlert('Algo salio mal 🤷‍♂️')
                            console.log('error',error)
                        }
                    }
                }
            >
                {
                    ()=>(
                        <Form className='form_react' >
                            <div>
                                <Field
                                    type='text'
                                    name='name'
                                    placeholder='NOMBRE'
                                    className='input_form'
                                />
                                <div className='box_errors' >
                                    <ErrorMessage name='name' component='div' />
                                </div>
                                <Field
                                    type='text'
                                    name='phone'
                                    placeholder='TELÉFONO'
                                    className='input_form'
                                />
                                <div className='box_errors' >
                                    <ErrorMessage name='phone' component='div' />
                                </div>
                                <Field
                                    type='text'
                                    name='email'
                                    placeholder='EMAIL'
                                    className='input_form'
                                />
                                <div className='box_errors' >
                                    <ErrorMessage name='email' component='div' />
                                </div>
                                <Field 
                                    as="textarea"
                                    name="message" 
                                    id="message"
                                    placeholder='CONSULTA'
                                    className='input_form'
                                />
                                <div className='box_errors' >
                                    <ErrorMessage name='message' component='div' />
                                </div>
                            </div>
                            <div className='box_button_form' >
                                <button className='button_form_react' type='submit' >
                                    ENVIAR
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormReact