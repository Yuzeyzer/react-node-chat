import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './authForm.scss';

const AuthForm = ({ children, className}) => <div className={classNames("authForm", className)}>{children}</div>

export default AuthForm ;

