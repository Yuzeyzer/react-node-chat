import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({
  // mapPropsToValues: () => ({ email: 'qwewqeqwe' }),
  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
		}
		if (!values.password) {
      errors.password = 'Input your password, please';
    } else if (!/^[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.password = 'Invalid password';
		}
		if (!values.username) {
      errors.username = 'Input your username, please';
    } else if (!/^[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.username = 'Invalid username';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
