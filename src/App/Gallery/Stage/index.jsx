import React from 'react';
import { PropTypes as T } from 'prop-types';

import './style.css';


const Stage = ({ img, selectNextImage, selectPreviousImage }) => {
  if (!img) { return null; }

  return (
    <div className="stage">
      <div
        className="select-image previous"
        role="button"
        onClick={selectPreviousImage}
        onKeyUp={selectPreviousImage}
        tabIndex={0}
      >
        ❮
      </div>
      <div
        className="select-image next"
        role="button"
        onClick={selectNextImage}
        onKeyUp={selectNextImage}
        tabIndex={0}
      >
        ❯
      </div>
      <img
        src={img}
        alt={img}
      />
    </div>
  );
};

Stage.propTypes = {
  img: T.string,
  selectNextImage: T.func.isRequired,
  selectPreviousImage: T.func.isRequired,
};

export default Stage;
