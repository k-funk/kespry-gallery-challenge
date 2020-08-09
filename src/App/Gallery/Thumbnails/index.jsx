import React from 'react';
import { PropTypes as T } from 'prop-types';

import './style.css';


const Thumbnails = ({ imageList, selectImage }) => (
  <div className="thumbnails">
    {imageList.map((imageUrl, idx) => (
      <span
        key={imageUrl}
        role="button"
        tabIndex={0}
        onClick={() => selectImage(imageUrl)}
        onKeyUp={() => selectImage(imageUrl)}
      >
        <img
          src={imageUrl}
          alt={`Thumbnail ${idx}`}
          className="thumbnail"
        />
      </span>
    ))}
  </div>
);

Thumbnails.propTypes = {
  imageList: T.arrayOf(T.string).isRequired,
  selectImage: T.func.isRequired,
};

export default Thumbnails;
