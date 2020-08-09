import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Thumbnails from './index';


describe('outputs the expected tree when', () => {
  let wrapper;
  let selectImageSpy;

  beforeEach(() => {
    selectImageSpy = jest.fn();
  });

  test('(default)', () => {
    wrapper = shallow((
      <Thumbnails
        imageList={['https://img.com/1', 'https://img.com/2']}
        selectImage={selectImageSpy}
      />
    ));
  });

  afterEach(() => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
