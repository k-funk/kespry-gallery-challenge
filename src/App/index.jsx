import React, { useState } from 'react';

import AddImages from './AddImages';
import Gallery from './Gallery';

import './style.css';


export const SAMPLE_GALLERY = Array.from(
  Array(27),
  (_, i) => `https://picsum.photos/seed/${i + 1}/450/300`,
);

const App = () => {
  const [imageList, setImageArray] = useState(SAMPLE_GALLERY);
  const [stageImg, setStageImg] = useState('');

  const addImage = newImageUrl => {
    if (imageList.includes(newImageUrl)) {
      // TODO: make this error message part of the UI
      // eslint-disable-next-line no-alert
      return alert('Image already in gallery.');
    }
    return setImageArray(oldArray => [...oldArray, newImageUrl]);
  };

  const fillGallery = () => {
    setImageArray([...SAMPLE_GALLERY]);
    setStageImg('');
  };

  const emptyGallery = () => {
    setImageArray([]);
    setStageImg('');
  };

  return (
    <div className="app">
      <h1>Image Gallery</h1>

      <div className="flex-grid">
        <div className="col">
          <AddImages
            addImage={addImage}
          />

          <button className="btn-link" onClick={fillGallery} type="button">
            Fill Gallery
          </button>
        </div>

        <div className="col">
          <Gallery
            imageList={imageList}
            stageImg={stageImg}
            setStageImg={setStageImg}
          />
          <button className="btn-link" onClick={emptyGallery} type="button">
            Empty Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
