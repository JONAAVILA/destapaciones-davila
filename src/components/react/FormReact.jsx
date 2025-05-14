import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateConsult } from '../../utils/schema'
import { sendEmail } from '../../adapters/sendConsult'
import './formReact.css'

const FormReact = ()=>{
    return(
        <div className='container_form' >
            <span className='circle_form' />
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