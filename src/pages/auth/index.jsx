import React from 'react';
import LoginForm from '../../modules/loginForm/containers/loginForm';

import './auth.scss';

import bg from '../../images/auth-bg.png';

const Auth = () => {
  {
    return (
      <section className='auth'>
        <div className='auth__content'>
          <div className='auth__column'>
            <img className='auth__img' src={bg} alt='' />
          </div>
          <div className='auth__column'>
            <LoginForm />
          </div>
        </div>
      </section>
    );
  }
};

export default Auth;

// class Auth extends React.Component {

//     return (
//       <section className='auth'>
//         <div className='auth__content'>
//           <div className='auth__header'>
//             <h1 className='auth__title'>Войти в аккаунт</h1>
//             <p className='auth__description'>Пожалуйста, войдите в свой аккаунт</p>
//           </div>
//           <AuthForm>

// <Button className='button--large' type='primary'>
//   Войти в Аккаунт
// </Button>
//           </AuthForm>
//         </div>
//       </section>
//     );
//   }
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.form.validateFields((err, values) => {
//     if (!err) {
//       console.log('Received values of form: ', values);
//     }
//   });
// };
