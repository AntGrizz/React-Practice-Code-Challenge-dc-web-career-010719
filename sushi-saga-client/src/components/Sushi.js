import React, { Fragment } from 'react';

const Sushi = props => {

  let isSushiEaten = sushi => {
    return props.eatenSushi.includes(sushi)
  }

  let handleClick = (sushi) => {
    if (sushi.price > props.budget){
      alert("You need bread")
    } else {
      props.afterEatSushi(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleClick(props.sushi)}>
        {isSushiEaten(props.sushi) === true ? null : (
          <img
            src={props.sushi['img_url']}
            alt={props.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
