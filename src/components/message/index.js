import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import './message.scss';

const Message = ({ avatar, user, text, date }) => {
  return (
    <div className='message'>
      <div className='message__avatar'>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className='message__content'>
        <div className='message__bubble'>
          <p className='message__text'>{text}</p>
        </div>
        <time className='message__date'>Вчера, в 12:31</time>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  userr: PropTypes.object,
};

export default Message;
