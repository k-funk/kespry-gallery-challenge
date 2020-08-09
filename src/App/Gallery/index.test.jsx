import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Gallery from './index';


describe('outputs the expected tree when', () => {
  let wrapper;
  let setStageImgSpy;
  let defaultProps;

  beforeEach(() => {
    setStageImgSpy = jest.fn();
    defaultProps = {
      stageImg: 'https://img.com/1',
      setStageImg: setStageImgSpy,
    };
  });

  test('images in gallery', () => {
    wrapper = shallow((
      <Gallery
        {...defaultProps}
        imageList={['https://img.com/1', 'https://img.com/2']}
      />
    ));
  });

  test('no images in gallery', () => {
    wrapper = shallow((
      <Gallery
        {...defaultProps}
        imageList={[]}
      />
    ));
  });

  afterEach(() => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
