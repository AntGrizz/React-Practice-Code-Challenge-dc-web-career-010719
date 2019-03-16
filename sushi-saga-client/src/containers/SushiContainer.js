import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {


  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
          <Sushi
            eatenSushi={props.eatenSushi}
            afterEatSushi={props.afterEatSushi}
            budget={props.budget}
            sushi={sushi}
            key={sushi.id}
          />
        ))}
        <MoreButton updateCurrSushi={props.updateCurrSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
