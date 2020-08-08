import React from 'react';
import PropTypes from 'prop-types';
import distanseInWordsToNow from 'date-fns/distance_in_words_to_now';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from 'assets/svg/readed.svg';
import unreadedSvg from 'assets/svg/unreaded.svg';
import './message.scss';
import avatar1 from 'assets/avatars/1.png';

const Message = ({ avatar, user, text, date, isMe, isTyping, isReaded, attachments }) => {
  console.log(attachments);
  return (
    <div className={classNames('message', { 'message-isMe': isMe, 'message-is-typing': isTyping })}>
      <div className='message__avatar'>
        <img src={avatar1} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className='message__content'>
        <div>
          {isMe && isReaded && (
            <img className={'message__readed'} src={readedSvg} alt='is readed' />
          )}
          {isMe && !isReaded && (
            <img className={'message__unreaded'} src={unreadedSvg} alt='is unread' />
          )}
          <div className='message__bubble'>
            {text && <p className='message__text'>{text}</p>}
           {isTyping && <div className='message__typing typing'>
              <div class='typing__indicator'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>}
          </div>
          <div className='message__attachments'>
            {attachments &&
              attachments.map((item) => (
                <div className='message__attachments-item'>
                  <img src={item.url} alt={item.fileName} />
                </div>
              ))}
          </div>
        </div>
        {date && (
          <time className='message__date'>
            {distanseInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
          </time>
        )}
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
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
