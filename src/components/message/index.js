import React from 'react';
import PropTypes from 'prop-types';
import distanseInWordsToNow from 'date-fns/distance_in_words_to_now';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from 'assets/svg/readed.svg';
import unreadedSvg from 'assets/svg/unreaded.svg';
import './message.scss';

const Message = ({ avatar, user, text, date, isMe, isReaded }) => {
  return (
    <div className={classNames('message', { 'message-isMe': isMe })}>
      <div className='message__avatar'>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className='message__content'>
        {isMe && isReaded && <img className={'message__readed'} src={readedSvg} alt='is Readed' />}
				{isMe && !isReaded && <img className={'message__unreaded'} src={unreadedSvg} alt='unread' />}
        <div className='message__bubble'>
          <p className='message__text'>{text}</p>
        </div>
        <time className='message__date'>
          {distanseInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
        </time>
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
