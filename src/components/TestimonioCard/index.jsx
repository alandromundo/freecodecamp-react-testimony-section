import React from 'react';
import './TestimonioCard.css';

function TestimonioCard(props) {
  return(
    <div className="TestimonioCard__container">
      <img src={props.img} alt="" />
      <div className="TestimonioCard__info">
        <h2><b>{props.name}</b> in {props.city}</h2>
        <h3>{props.job} at <b>{props.company}</b></h3>
        <p><i>"{props.testimony}"</i></p>
      </div>
    </div>
  );
}

export { TestimonioCard };