
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in format 000-00-00')
    .required('Number is required'),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field
              id="name"
              name="name"
              placeholder="Enter name"
              className={styles.input}
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>

          <div className={styles.fieldContainer}>
            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field
              id="number"
              name="number"
              placeholder="000-00-00"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
