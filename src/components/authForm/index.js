import React from 'react';
import classNames from 'classnames';

import './authForm.scss';

const AuthForm = ({ children, className}) => <div className={classNames("authForm", className)}>{children}</div>

export default AuthForm ;

