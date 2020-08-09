import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Stage from './index';


describe('outputs the expected tree when', () => {
  let wrapper;
  let selectNextImageSpy;
  let selectPreviousImageSpy;
  let defaultProps;

  beforeEach(() => {
    selectNextImageSpy = jest.fn();
    selectPreviousImageSpy = jest.fn();
    defaultProps = {
      selectNextImage: selectNextImageSpy,
      selectPreviousImage: selectPreviousImageSpy,
    };
  });

  test('with an img', () => {
    wrapper = shallow((
      <Stage {...defaultProps} img="https://img.com/1" />
    ));
  });

  test('no img', () => {
    wrapper = shallow((
      <Stage {...defaultProps} img={null} />
    ));
  });

  afterEach(() => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
