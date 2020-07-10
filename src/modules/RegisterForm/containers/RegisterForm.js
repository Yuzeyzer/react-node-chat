import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';
import validatForm from 'utils/validate';

export default withFormik({
  // mapPropsToValues: () => ({ email: 'qwewqeqwe' }),
  // Custom sync validation
  validate: (values) => {
    const errors = {};
    validatForm({ Auth: false, values, errors });
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
