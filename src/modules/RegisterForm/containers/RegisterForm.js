import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';
import validatFunc from 'utils/validate';

export default withFormik({
  // mapPropsToValues: () => ({ email: 'qwewqeqwe' }),
  // Custom sync validation
  validate: (values) => {
		const errors = {};
		const validate = validatFunc({ Auth: false})

    Object.keys(values).keys.forEach((key) => validate[key] && validate[key](errors, values[key]));

    if (!values.password) {
      errors.password = 'Введите Ваш пароль, пожалуйста';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
      errors.password = 'Не правильный пароль';
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
