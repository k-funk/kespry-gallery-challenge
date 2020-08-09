import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import AddImages from './index';


describe('outputs the expected tree when', () => {
  let wrapper;
  let addImageSpy;

  beforeEach(() => {
    addImageSpy = jest.fn();
  });

  test('(default)', () => {
    wrapper = shallow((
      <AddImages addImage={addImageSpy} />
    ));
  });

  afterEach(() => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
