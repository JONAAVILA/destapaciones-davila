import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateConsult } from '../../utils/schema'
import { sendEmail } from '../../adapters/sendConsult'
import './formReact.css'

const FormReact = ()=>{
    return(
        <div className='container_form' >
            <Formik
                initialValues={{
                    name:'',
                    phone:'',
                    email:'',
                    message:''
                }}
                validationSchema={validateConsult}
                    onSubmit={ async (values)=>{
                        try {
                            const res = await sendEmail(values)
                            console.log(res)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            >
                {
                    ()=>(
                        <Form className='form_react' >
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
                            />
                            <div className='box_errors' >
                                <ErrorMessage name='phone' component='div' />
                            </div>
                            <Field
                                type='text'
                                name='email'
                                placeholder='EMAIL'
                            />
                            <div className='box_errors' >
                                <ErrorMessage name='email' component='div' />
                            </div>
                            <Field
                                type='text'
                                name='message'
                                placeholder='CONSULTA'
                            />
                            <div className='box_errors' >
                                <ErrorMessage name='message' component='div' />
                            </div>
                            <button type='submit' >
                                ENVIA
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormReact