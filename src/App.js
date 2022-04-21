import { Formik, Form, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Radio from './components/Radio';
import { Col, Container, Row } from 'react-bootstrap'

const validate = (values) => {

  const errors = {}

  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }

  if (!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}


function App() {

  return (
    <>
      <Container>
        <Row className='mx-auto text-center'>
          <Col sm={12} className='mt-5 mx-auto'>
            <h2>Formulario con validaciones de Formik</h2>
            <Formik
              initialValues={{ name: '', lastname: '', email: '', opcion: '', radio: '' }}
              validate={validate}
              onSubmit={values => console.log(values)}
            >

              <Form className='mb-5 border rounded rounded-lg mt-5'>
                <label htmlFor='name' className='mt-5 fw-bold'>Nombre</label>
                <TextInput name="name" id='name' className='mt-1 w-50' />
                <br />
                <label htmlFor='lastname' className='mt-1 fw-bold'>Apellido</label>
                <TextInput name="lastname" id='lastname' className='mt-3 w-50' />
                <br />
                <label htmlFor='email' className='mt-1 fw-bold'>Correo</label>
                <TextInput name="email" id='email' className='mt-3 w-50' />
                <label htmlFor='opcion' className='fw-bold mt-2'>Tipo de opcion</label>
                <Select name="opcion" id='opcion' className='mt-3 w-50'>
                  <option value="">Seleccione Opcion</option>
                  <option value="felipe">Felipe</option>
                  <option value="chanchitofeliz">Felipe Feliz</option>
                  <option value="chanchitoinfeliz">Felipe Infeliz</option>
                </Select>
                <Checkbox name="accept" className='mt-3 mt-5'>
                  Aceptar Terminos y condiciones
                </Checkbox >
                <Radio name="radio" value="opcion1" label="opcion1" />
                <Radio name="radio" value="opcion2" label="opcion2" />
                <Radio name="radio" value="opcion3" label="opcion3" className='mb-4' />
                <ErrorMessage name="radio" />
                <button type='submit' className='btn btn-success w-50 mb-4' >Enviar</button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </>


  );
}

export default App;
