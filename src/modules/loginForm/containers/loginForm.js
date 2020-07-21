import LoginForm from '../components/loginForm';
import { withFormik } from 'formik';
import validatForm from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: (values) => {
		let errors = {};
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