import React, { useState } from 'react';
import { PropTypes as T } from 'prop-types';


const AddImages = ({ addImage }) => {
  const [imgUrl, onChange] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addImage(imgUrl);
    onChange('');
  };

  return (
    <div className="card">
      <h4>Add Image URLs</h4>
      <form onSubmit={onSubmit}>
        <input
          type="url"
          placeholder="https://picsum.photos/seed/picsum/450/300"
          onChange={e => onChange(e.target.value)}
          value={imgUrl}
        />
        <button className="btn" type="submit">
          Add Image
        </button>
      </form>
    </div>
  );
};

AddImages.propTypes = {
  addImage: T.func.isRequired,
};

export default AddImages;
