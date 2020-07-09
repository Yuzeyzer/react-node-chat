import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({
  // mapPropsToValues: () => ({ email: 'qwewqeqwe' }),
  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Введите Ваш адрес почты, пожалуйста';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Не правильный адрес почты';
    }

    if (!values.username) {
      errors.username = 'Введите Ваше имя пользователя';
    } else if (!/(?=.*[a-zA-Z])/i.test(values.username)) {
      errors.username = 'Не правильное имя пользователя';
    }

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
