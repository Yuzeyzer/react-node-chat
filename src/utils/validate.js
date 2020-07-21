export default ({ isAuth, values, errors }) => {
  console.log(errors)
  const rules = {
    email: ( value) => {
      if (!value) {
        errors.email = 'Введите Ваш адрес почты, пожалуйста';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Не правильный адрес почты';
      }
    },
    username: (value, isAuth) => {
      if (!value) {
        errors.username = 'Введите Ваше имя пользователя';
      } else if (!/(?=.*[a-zA-Z])/i.test(value)) {
        errors.username = 'Не правильное имя пользователя';
      }
    },
    password: (value, isAuth) => {
      if (!value) {
        errors.password = 'Введите Ваш пароль, пожалуйста';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком уязвимый пароль';
      }
    },
  };
  Object.keys(values).keys.forEach((key) => rules[key] && rules[key](values[key]));
};
