import React from 'react';
import { Message } from 'components';

import './home.scss';

function Home() {
  return (
    <div className='home'>
      <Message
        avatar='https://lh3.googleusercontent.com/s4ua5PdReekUNHE5i4UrXmMrQcA9VvP9Wpo12OiI4_vUkfY0aewQtrukXMMXBLKlqap-5A=s85'
        text='Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'
        date='Tue Jul 07 2020 07:29:27'
        attachments={[
          {
            fileName: 'images.png',
            url: 'https://source.unsplash.com/50x50/?random=1&nature,water',
          },
          {
            fileName: 'images.png',
            url: 'https://source.unsplash.com/50x50/?random=2&nature,water',
          },
          {
            fileName: 'images.png',
            url: 'https://source.unsplash.com/50x50/?random=3&nature,water',
          },
        ]}
      />
      <Message
        avatar='https://lh3.googleusercontent.com/uK2L2f1T0sAoHDZz4ohjx79vIR-FZvI6CxqIXfBgAFwKpFmsnx7crBVw1vwvSbcwso9mlQ=s85'
        text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
        date='Tue Jul 07 2020 07:29:27'
      />
      <Message
        avatar='https://lh3.googleusercontent.com/QJZ3PHj7-555lvKB00r3y1RZoTRztBTkssysQOTEL0xiM-_zIaGzAI_IGiOukfkco4V5=s85'
        text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
        date='Tue Jul 07 2020 07:29:27'
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar='https://lh3.googleusercontent.com/uK2L2f1T0sAoHDZz4ohjx79vIR-FZvI6CxqIXfBgAFwKpFmsnx7crBVw1vwvSbcwso9mlQ=s85'
        text='Да нзч! Ок, держи в курсе.'
        date='Tue Jul 07 2020 07:29:27'
      />
      <Message
        avatar='https://lh3.googleusercontent.com/QJZ3PHj7-555lvKB00r3y1RZoTRztBTkssysQOTEL0xiM-_zIaGzAI_IGiOukfkco4V5=s85'
        text='Ave Caesar! Morituri te salutant! ☝️'
        date='Tue Jul 07 2020 07:29:27'
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar='https://lh3.googleusercontent.com/KZ3zVwtvu2wY7ATQPriTZyqT1emA1M0JxT6OcgeuReylJphw9-Mw1bDteqxKaZISjE5QWg=s85'
        text='Кек. Ты то меня никогда не предашь 😌'
        date='Tue Jul 07 2020 07:29:27'
      />
      <Message
        avatar='https://lh3.googleusercontent.com/QJZ3PHj7-555lvKB00r3y1RZoTRztBTkssysQOTEL0xiM-_zIaGzAI_IGiOukfkco4V5=s85'
        text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
        date='Tue Jul 07 2020 07:29:27'
        isMe={true}
        isReaded={false}
      />
    </div>
  );
}

export default Home;
