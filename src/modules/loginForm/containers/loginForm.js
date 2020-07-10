import LoginForm from '../components/loginForm';
import { withFormik } from 'formik';
import validatForm from 'utils/validate';

export default withFormik({
  validate: (values) => {
		const errors = {};
		validatForm({ Auth: true, values, errors})

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);