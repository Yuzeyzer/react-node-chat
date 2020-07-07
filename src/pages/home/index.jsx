import React from 'react';
import { Message } from 'components';

import './home.scss';

function Home() {
  return (
    <div className='home'>
      <Message
        avatar='https://lh3.googleusercontent.com/S1Ms7L33svJK-4HX-HNQPTwL-C7PMGZVqMGHEJb56RMZ3_o4yguJcg-z2FruYUoG-7Mh=s85'
        text='Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'
        date='Tue Jul 07 2020 07:29:27'
      />
			 <Message
        avatar='https://lh3.googleusercontent.com/S1Ms7L33svJK-4HX-HNQPTwL-C7PMGZVqMGHEJb56RMZ3_o4yguJcg-z2FruYUoG-7Mh=s85'
        text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
        date='Tue Jul 07 2020 07:29:27'
      />
      <Message
        avatar='https://lh3.googleusercontent.com/YwcsCTzF--Hb_15uHBb8eXS4YbN_IBTcM88anuVp6R8XI14V3FT4SqrvgYjI_6QKUXwn=s85'
        text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
        date='Tue Jul 07 2020 07:29:27'
				isMe={true}
				isReaded={true}
      />
      <Message
        avatar='https://lh3.googleusercontent.com/S1Ms7L33svJK-4HX-HNQPTwL-C7PMGZVqMGHEJb56RMZ3_o4yguJcg-z2FruYUoG-7Mh=s85'
        text='Да нзч! Ок, держи в курсе.'
        date='Tue Jul 07 2020 07:29:27'
      />
      <Message
        avatar='https://lh3.googleusercontent.com/YwcsCTzF--Hb_15uHBb8eXS4YbN_IBTcM88anuVp6R8XI14V3FT4SqrvgYjI_6QKUXwn=s85'
        text='Ave Caesar! Morituri te salutant! ☝️'
        date='Tue Jul 07 2020 07:29:27'
				isMe={true}
				isReaded={true}
      />
      <Message
        avatar='https://lh3.googleusercontent.com/S1Ms7L33svJK-4HX-HNQPTwL-C7PMGZVqMGHEJb56RMZ3_o4yguJcg-z2FruYUoG-7Mh=s85'
        text='Кек. Ты то меня никогда не предашь 😌'
        date='Tue Jul 07 2020 07:29:27'
      />
			 <Message
        avatar='https://lh3.googleusercontent.com/YwcsCTzF--Hb_15uHBb8eXS4YbN_IBTcM88anuVp6R8XI14V3FT4SqrvgYjI_6QKUXwn=s85'
        text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
        date='Tue Jul 07 2020 07:29:27'
				isMe={true}
				isReaded={false}
      />
    </div>
  );
}

export default Home;
