import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Gallery from './index';


describe('outputs the expected tree when', () => {
  let wrapper;

  test('images in gallery', () => {
    wrapper = shallow((
      <Gallery
        imageList={['https://img.com/1', 'https://img.com/2']}
      />
    ));
  });

  test('no images in gallery', () => {
    wrapper = shallow((
      <Gallery
        imageList={[]}
      />
    ));
  });

  afterEach(() => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
