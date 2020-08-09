import React, { useState } from 'react';
import { PropTypes as T } from 'prop-types';
import Thumbnails from './Thumbnails';
import Stage from './Stage';


const Gallery = ({ imageList }) => {
  const [stageImg, setStageImg] = useState('');

  const selectNextImage = () => {
    const currentIdx = imageList.indexOf(stageImg);
    const nextIdx = currentIdx >= imageList.length - 1 ? 0 : currentIdx + 1;
    return setStageImg(imageList[nextIdx]);
  };

  const selectPreviousImage = () => {
    const currentIdx = imageList.indexOf(stageImg);
    const previousIdx = currentIdx === 0 ? imageList.length - 1 : currentIdx - 1;
    return setStageImg(imageList[previousIdx]);
  };

  return (
    <div className="card">
      {!imageList.length ? (
        <div>No images in gallery.</div>
      ) : (
        <>
          <Thumbnails imageList={imageList} selectImage={setStageImg} />
          <Stage
            img={stageImg}
            selectNextImage={selectNextImage}
            selectPreviousImage={selectPreviousImage}
          />
        </>
      )}
    </div>
  );
};

Gallery.propTypes = {
  imageList: T.arrayOf(T.string).isRequired,
};

export default Gallery;
