/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          YOu bet any traveling howheohweihrowehr heirhowehr heirhwoirhowherihwo
          dfasdf qwerqwer asdf fqwer q adfasfdsfsdfweqfeadfasdf
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>150000 people requrested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
}

export default Header;
