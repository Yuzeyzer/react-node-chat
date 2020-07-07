import React from 'react';
import { Message } from 'components';

import './home.scss';

function Home() {
  return (
    <div className="home">
      <Message 
			avatar="https://lh3.googleusercontent.com/S1Ms7L33svJK-4HX-HNQPTwL-C7PMGZVqMGHEJb56RMZ3_o4yguJcg-z2FruYUoG-7Mh=s85"
			text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
			date="Tue Jul 07 2020 04:38:12 GMT+0600"
			/>
    </div>
  );
}

export default Home;
